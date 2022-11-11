import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./signup.css"


function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const signupHandler = (e) => {
    e.preventDefault();


    const auth = getAuth();
    createUserWithEmailAndPassword(auth, name, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user", user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Firebase Signup error: ", error)
        // ..
      });

    // e.reset();
  }



  return (
    <div className="SignupMain" >This is Signup
      
      <div>
        <form className="signupForm" onSubmit={signupHandler} >
          <label>Name:</label>
          <input className="i1" type="name" name="name" autoComplete="on" placeholder="Enter your name" onChange={(e) => { setName(e.target.value) }}></input>
          <br />
          <label>Email Address:</label>
          <input className="i2" type="email" name="email" autoComplete="on" placeholder="Enter your email" onChange={(e) => { setEmail(e.target.value) }}></input>
          <br />
          <label>Password:</label>
          <input className="i3" type="password" name="new-password" autoComplete="new-password" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }} ></input>
          <br />
          <label>Confirm Password:</label>
          <input className="i4" type="password" name="new-password" autoComplete="new-password" placeholder="Confirm Password" ></input>
          <br />
          <button type="submit" >Signup</button>
        </form>
      </div>
    </div>
  )
}
export default Signup;