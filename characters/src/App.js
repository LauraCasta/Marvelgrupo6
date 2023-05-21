import React from 'react';
import './App.css';
import Nav from './components/Nav/nav';
import Banner from './components/Banner/banner'
import Personaje from './components/personaje/personaje';

function App() {  
  return (
    <>
    <div className="App">
      <div><Nav /></div>
      <div><Banner/></div>
        <div className="App_titulo">
          <h1>CHARACTERS</h1>
        </div>
          <div><Personaje/></div>
    </div>
    </>
  );
}

export default App;
