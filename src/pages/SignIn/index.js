import React, { useState, useContext } from 'react';


import { AuthContext } from '../../contexts/auth';

import '../SignUp/signup.css';




function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e){
    e.preventDefault();
    
    if(email !== '' && password !== ''){
      signIn(email, password);
    }
  }
  
  return(
    <div className='App'>
      <div className='App-header'>
        <h1>Entre em sua conta!</h1>
       
        <form onSubmit={handleSubmit}>
          <div className='input'>
            
            <label htmlFor="email">Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type='submit'> {loadingAuth ? 'Carregando...' : 'Acessar'}</button>

              
          </div>  
        </form>
        
        <p>Ainda não tem conta? <a href="/SignIn">Cadastre-se!</a></p>

      </div>
      

    </div>
  )

}

export default SignIn;
