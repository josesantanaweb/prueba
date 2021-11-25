import React from 'react';
import ReactDOM from 'react-dom';
import GlobalCSS from './styles/global-styles';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalCSS />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);