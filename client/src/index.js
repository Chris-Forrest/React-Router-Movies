import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom'  // imported BrowserRouter renamed to Router 


import './index.css';
import App from './App';

ReactDOM.render(                    //wrapped Router around the app
<Router>
<App />
</Router>
, document.getElementById('root'));
