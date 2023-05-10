import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Login from './components/Login';

const App = () => {
  const [needLogin, setLogin] = useState(true)

  useEffect(()=>{
    // fetch("/checkCookies")
    // .then((res)=> res.json())
    // .then((res) => setLogin(res))
  }, [])

  return (
    <div>
      {needLogin ? <Login /> : <Main />}
    </div>
  );
};
export default App;

