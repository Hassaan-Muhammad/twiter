import React from 'react';
import './App.css';
import Appx from './components/post/post';
import Navbar from './components/navbar/navbar';
import Left from './components/left/left';
// import Right from './components/right/right';
import { useState } from "react"



function App() {
  const [isLit, setLit] = useState(true)

  const  click = () =>{
      setLit( !isLit )
  }

  return (
    <div className={`room ${(isLit) ? "lit" : "dark " }`}>
       
        <Navbar click={click}/> 
       <Left/> 
       {/* <Right/> */}
      <Appx /> 
    </div>
  );
}

export default App;
