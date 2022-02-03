import React, { useContext } from 'react';
import './dashboard.css';

import {AuthContext} from '../../contexts/auth';

function Dashboard() {

  const { signOut } = useContext(AuthContext);

  return (
    <div className="App">
      <h1>Dashboard</h1>
      <button onClick={() => signOut()}>Sair da conta</button>
    </div>
  );
}

export default Dashboard;