import React from 'react';
import icon from './icon.png';
import './App.css';
import { pedirPermissaoParaReceberNotificacoes } from './push-notification';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={icon} className="App-logo" alt="icon" />
      <h1 className="App-title">Bem vindo a demo de push notification</h1>
    </header>
    <button onClick={pedirPermissaoParaReceberNotificacoes} >
      Clique aqui para receber notificações
    </button>
  </div>
);

export default App;
