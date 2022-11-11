import React, { useEffect } from 'react';
import './App.css';
import Appx from './components/post/post';
import Navbar from './components/navbar/navbar';
import Left from './components/left/left';
import Right from './components/right/right';
import { useState } from "react"
import { Route, Routes, Link, Navigate } from "react-router-dom";
import Login from "./components/login/login"
import Signup from "./components/signup/signup"

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, query, onSnapshot, serverTimestamp, orderBy, deleteDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";





const firebaseConfig = {
  apiKey: "AIzaSyDW0pCTqP52-kL_74oZSJ_tAwTx05vJu6I",
  authDomain: "helloworldfire-d425e.firebaseapp.com",
  projectId: "helloworldfire-d425e",
  storageBucket: "helloworldfire-d425e.appspot.com",
  messagingSenderId: "60451485396",
  appId: "1:60451485396:web:06bc964b8102bd76742d41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);






function App() {
  const [isLit, setLit] = useState(true)

  const click = () => {
    setLit(!isLit)
  }

  const [isLogin, setisLogin] = useState(false);

  useEffect(() => {

    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("Auth Change :Login", user)
        setisLogin(true)
        // ...
      } else {
        // User is signed out
        console.log("Auth Change :Logout")
        setisLogin(false)

      }
    });

    return () => {
      console.log("Clean up function")
      unSubscribe();
    }

  }, [])





  return (
    <div className={`room ${(isLit) ? "lit" : "dark "}`}>

      {/* <button onClick={() => { setisLogin(!isLogin) }}>Toggle button</button> */}



      <div>
        <div className='tenvh' >
    
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
              <Route path="/" element={<div className='nintyvh'>   <Navbar click={click} />, <Left /> <Right /> <Appx /> </div>} />
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





