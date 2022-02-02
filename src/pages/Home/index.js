import React from 'react';
import './home.css';

import { useState } from 'react';


function Home() {


  const [earnPerMonth, setEarnPerMonth] = useState(0);
  const [hourWorked, setHourWorked] = useState(0);
  const [hoursPerProject, setHoursPerProject] = useState(0);

  const handleForm = (e) => {
    e.preventDefault();
  };

  const handleCostPerHour = () => {
    let costPerHour;
    costPerHour = earnPerMonth / hourWorked;
    return costPerHour;
  };

  const handleBudget = () => {
    const myHour = handleCostPerHour();

    let projectBudget;

    projectBudget = myHour * hoursPerProject;
    return projectBudget;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='form'>
          <h1>Meu orçamento!</h1>
          <form className="form" onSubmit={handleForm}>
            <div className='input'>
              <label>Quanto quero receber por mês:</label>
              <input
                type="number"
                value={earnPerMonth}
                onChange={(e) => setEarnPerMonth(e.target.value)}
              ></input>
            </div>
            
            <div className='input'>
              <label>Quantas horas trabalharei por mês:</label>
              <input
                type="number"
                value={hourWorked}
                onChange={(e) => setHourWorked(e.target.value)}
              ></input>
            </div>
            
            <div className='input'>
              <label>Quantidade de horas para este projeto:</label>
              <input
                type="number"
                value={hoursPerProject}
                onChange={(e) => setHoursPerProject(e.target.value)}
              ></input>
            </div>
            
          </form>
        </div>
        
        <div>
          <h1>Seu custo por hora é de: {handleCostPerHour()}</h1>
          <h1>O custo do projeto atual é de: {handleBudget()}</h1>
        </div>
        <div className="user-id">
          <h3>Gostaria de salvar seus resultados? <br /></h3>
          <a href="/SignIn">Entre com sua conta </a> <p>ou</p>
          <a href="/SignUp">Cadastre-se </a>
        </div>
      </header>
    </div>
  );
}

export default Home;