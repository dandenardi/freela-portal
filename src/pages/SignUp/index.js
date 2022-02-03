import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import '../SignUp/signup.css';


function SignUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e){
    e.preventDefault();

    if(name !== '' && email !== '' && password !==''){
      signUp(email, password, name)
      console.log(email, password, name);
    }
  }
  
  return(
    <div className='App'>
      <div className='App-header'>
        <h1>Vamos criar seu cadastro!</h1>
      
        
          
        <form onSubmit={handleSubmit}>
          <div className='input'>
            <label htmlFor="name">Nome</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="email">Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type='submit'> {loadingAuth ? 'Carregando...' : 'Cadastrar'}</button>
              
          </div>  
        </form>
        
        <p>Já tem conta? <a href="/SignIn">Entre aqui!</a></p>

      </div>
      

    </div>
  )

}

export default SignUp;
