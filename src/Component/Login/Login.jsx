import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { auth } from "../../Firebase/Firebase";


const Login = () => {
    const [error,setError]=useState('')
    const [success,setSuccess]=useState(false)
    const emailRef=useRef()
    
     const handleLogin=(e)=>{
        e.preventDefault()
        console.log("Login  successful")
        const email=e.target.email.value 
        const password=e.target.password.value 
        setError('')
        
        
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log(userCredential.user.emailVerified)
    if(!userCredential.user.emailVerified){
      alert("Please verified your email")
    }
    else{
      setSuccess(true)

    }
    
    
    // ...
  })
  .catch((error) => {
    console.log(error)
    setError("Invalid password and email")
    
  });
        

       }

       const handleForgot=()=>{
        
        const email= emailRef.current.value
        sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    setError(error)
  });

        
        }
 
    return (
     <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" ref={emailRef} />
          <label  className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <div onClick={handleForgot}><a className="link link-hover">Forgot password?</a></div>
          <button  className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
      <p>{error}</p>
      <p>{success?"Login is Success":"Please Login with your email"}</p>
    </div>
  

    );
};

export default Login;