import React from 'react';


import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import Routes from './routes';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import './App.css';



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>

    </AuthProvider>
    
  );

}

export default App;