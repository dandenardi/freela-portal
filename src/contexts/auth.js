import { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    function loadStorage(){
      const storageUser = localStorage.getItem('SistemUser');

      if(storageUser){
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
  
      setLoading(false);
    }
    
    loadStorage();

  }, [])


  async function signUp(email, password, name){
    setLoadingAuth(true);

    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( async (value)=>{
      let uid = value.user.uid;

      await firebase.firestore().collection('users')
      .doc(uid).set({
        name: name,
        avatarUrl: null,
      })
      .then( () => {

        let data = {
          uid: uid,
          name: name,
          email: value.user.email,
          avatarUrl: null
        };

        setUser(data);
        storageUser(data);
        setLoadingAuth(false);

      })

    })
    .catch((error)=>{
      console.log(error);
      setLoadingAuth(false);
    })

  }



  function storageUser(data){
    localStorage.setItem('SistemUser', JSON.stringify(data));
  }

  async function signIn(email, password){
    //funcao que autentica o usuario
    setLoadingAuth(true);

    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async (value) => {
      let uid = value.user.uid;

      const userProfile = await firebase.firestore().collection('users')
      .doc(uid).get();

      let data = {
        uid: uid,
        name: userProfile.data().name,
        avatarUrl: userProfile.data().avatarUrl,
        email: value.user.email,
      };

      setUser(data);
      storageUser(data);
      setLoadingAuth(false);

    })
    .catch((error)=>{
      alert('Houve um problema para entrar no sistema. Tem certeza que este é o usuário e a senha?');
      console.log(error);
      setLoadingAuth(false);
    })
    
  }

  async function signOut(){
    //funcao que remove o usuario do sistema
    await firebase.auth().signOut();
    localStorage.removeItem('SistemUser');
    setUser(null);
  }


  return(
    <AuthContext.Provider 
    value={{ 
      signed: !!user,  
      user, 
      loading, 
      signUp,
      signIn,
      signOut,
      loadingAuth
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
