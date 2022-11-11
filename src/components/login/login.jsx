import { useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";




function Login() {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const LoginHandler = (e) => {
      e.preventDefault();


        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("login succesfull", user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Firebase login error: ",errorCode,errorMessage)

          });
        // e.reset();
    }



    return (
        <div>This is Login

            <form onSubmit={LoginHandler} >

                <label>Email Address:</label>
                <input type="email" name="email" autoComplete="on" placeholder="Enter your email" onChange={(e) => { setEmail(e.target.value) }}></input>
                <br />
                <label>Password:</label>
                <input type="password" name="current-password" autoComplete="current-password" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }} ></input>
                <br />
                <button type="submit" >Login</button>
            </form>
        </div>
    )
}
export default Login;