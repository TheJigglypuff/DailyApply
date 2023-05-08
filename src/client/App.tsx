import React from 'react';
import { render } from 'react-dom';
// import Board from './Components/Board';
const App = () => {
  return (
    <div>
      <h1 className='text-rose-600' >Tic Tac Toe</h1>
      {/* <Board /> */}
    </div>
  );
}

render(<App />, document.querySelector('#root'));