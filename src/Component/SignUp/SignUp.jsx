import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../Firebase/Firebase";

const SignUp = () => {

    const [error,setError]=useState('')
    const handleSignUp=(e)=>{
        e.preventDefault()
        const email=e.target.email.value 
        const password=e.target.password.value
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    console.log(userCredential)
    // ...
  })
  .catch((error) => {
    setError(error.message)
    
  });


    }
    return (
        <div>
            <h2 className='text-center'>Welcome to signup page </h2>
        <form onSubmit={handleSignUp}>
            <div className="flex justify-center">
        <div className="space-y-4">
          
          <input name="email" type="email" className="input" placeholder="Email" /><br />
          <input name="password" type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <div className="flex justify-center">
             <input className="btn btn-success " type="submit" value="Submit" />
          </div>
        </div>
      </div>
        </form>
        {
            error&&<p className="text-red-600">{error}</p>
        }
            
            
        </div>
    );
};

export default SignUp;