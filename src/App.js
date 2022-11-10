import React from 'react';
import './App.css';
import Appx from './components/post/post';
import Navbar from './components/navbar/navbar';
import Left from './components/left/left';
import Right from './components/right/right';
import { useState } from "react"
import { Route, Routes, Link, Navigate } from "react-router-dom";

import Login from "./components/login"
import Signup from "./components/signup"





function App() {
  const [isLit, setLit] = useState(true)

  const click = () => {
    setLit(!isLit)
  }

  const [isLogin, setisLogin] = useState(false);

  return (
    <div className={`room ${(isLit) ? "lit" : "dark "}`}>

      <button onClick={() => { setisLogin(!isLogin) }}>Toggle button</button>

      {/* {(isLogin)
        ?
        <Link to={'/'} >  </Link>
        // <ul>
        //   <li> <Link to={'/'} > navbar </Link> </li>
        // </ul>
        :
        <ul>
          <li> <Link to={'/'} >Login</Link> </li>
          <li> <Link to={'/signup'} >Signup</Link> </li>
        </ul>
      }

      {(isLogin) ?
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
        :
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      } */}



      
      <div>
        <div className='tenvh' >
          {/* //     <Navbar click={click} /> */}
          {(isLogin)
            ?
            <Link to={'/'} >  </Link>
            // <ul>
            //   <li> <Link to={'/'} > navbar </Link> </li>
            // </ul>
            :
            <ul>
              <li> <Link to={'/'} >Login</Link> </li>
              <li> <Link to={'/signup'} >Signup</Link> </li>
            </ul>
          }

          {(isLogin) ?
            <Routes>
              <Route path="/" element={<div className='nintyvh'>   <Navbar />, <Left /> <Right /> <Appx /> </div>} />
              <Route path="*" element={<Navigate to="/" replace={true} />} />
            </Routes>
            :
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/" replace={true} />} />
            </Routes>
          }
        </div>

        {/* <div className='nintyvh'>
          <Left />
          <Right />
          <Appx />


        </div> */}
      </div>

    </div>
  );
}

export default App;





