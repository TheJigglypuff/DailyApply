import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './client/App'



render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);