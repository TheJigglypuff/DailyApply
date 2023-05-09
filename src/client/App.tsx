import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/here' element={<Main />} />
      </Routes>
    </div>
  );
};

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);
