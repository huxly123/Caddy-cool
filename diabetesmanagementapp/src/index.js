import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BrowseRouter from "react-router-dom"

ReactDOM.render(
  <BrowseRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowseRouter>,
  document.getElementById('root')
);
reportWebVitals();
