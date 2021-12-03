import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AppcontextProvider} from "./context/Appcontext"

ReactDOM.render(
  <React.StrictMode>
  <AppcontextProvider>
    <App />
</AppcontextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();