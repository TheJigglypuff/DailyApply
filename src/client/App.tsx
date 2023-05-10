import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Login from './components/Login';





const App = () => {
  return (
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Main />} />
      </Routes>
  );
};

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);
