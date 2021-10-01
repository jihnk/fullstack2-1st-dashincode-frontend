import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.scss';
import './styles/common.scss';
import Router from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
