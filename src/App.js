
import './App.css';
import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar'

import About from './Components/About';
import PokeGame from './Components/PokeGame';


class App extends Component {
  render(){
    return (
      <div className="App">
 
      <NavBar/>
      <Routes>
        <Route path="/" element={<PokeGame/>} />
        <Route path="about" element={<About />} />
      </Routes>

      </div>
    );
  }

}

export default App;
