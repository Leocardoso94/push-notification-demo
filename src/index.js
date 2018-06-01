import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { inicializarFirebase } from './push-notification';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
inicializarFirebase(); 