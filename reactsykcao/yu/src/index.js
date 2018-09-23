import React from 'react';
import ReactDOM from 'react-dom';
import './assets//css/index.css';
import App from './components/globle/App';
import'./assets/css/header.css';
import './assets/css/banner.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
