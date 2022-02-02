import React from 'react';

import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import '../SignUp/signup.css';


function SignIn() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => handleLogin(data);

  function handleLogin(data){
    //checa os dados e, caso validos, encaminha para login no banco de dados
    let login = data.email;
    let password = data.password;
    console.log(login, password);
    


  }


  return(
    <div className='App'>
      <div className='App-header'>
        
        
          <h1>Entre em sua conta!</h1>

          <form onSubmit={ handleSubmit(onSubmit) }>
            
            <div className='input'>
              <label htmlFor="email">Email</label>
                <input
                  placeholder="bluebill1049@hotmail.com"
                  type="email"
                  {...register("email", { required: "Este campo precisa ser preenchido" })}
                />
                <ErrorMessage 
                errors = { errors } 
                name="email" 
                render = {( { message }) => <p className='error'>Corrija os erros a seguir: { message } </p>}
                />

              <label htmlFor="password">Password</label>
                <input
                  placeholder="password"
                  type="password"
                  {...register("password", { required: "Este campo precisa ser preenchido" })}
                />
                <ErrorMessage 
                errors = { errors } 
                name="password" 
                render = {( { message }) => <p className='error'>Corrija os erros a seguir: { message } </p>}
                />

              <input type="submit" value='Entrar'/>
            </div>  
          </form>
          
          
        

        <p>Não tem conta? <a href="/SignUp">Cadastre-se </a></p>

      </div>
      

    </div>
    
  )

}

export default SignIn;