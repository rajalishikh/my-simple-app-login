import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router";
import { auth } from "../../Firebase/Firebase";

const SignUp = () => {

    const [error,setError]=useState('')
    const [success,setSuccess]=useState(false)
    const [showPassword,setShowPassword]=useState(false)
   
    const handleSignUp=(e)=>{
        e.preventDefault()
        const email=e.target.email.value 
        const password=e.target.password.value
        const terms=e.target.terms.checked 
        const DisplayName=e.target.DisplayName.value
        const PhotoUrl=e.target.PhotoUrl.value
        console.log(password,terms)

        // update the profile 

        const profileUpdate={
         displayName: DisplayName,
         photoURL: PhotoUrl
        }

        

        setError("")
        setSuccess(false)
         if(terms === false){
          setError("Please accept our condition")
          return
         }

         if(/(?=.*\d)/.test(password)=== false){
          setError("Must be one digit")
          return;
         }else if(/(?=.{6,})/.test(password) === false){
          setError("Must be 6 character")
          return
        }
        else if (/(?=.*[a-z])/.test(password) === false){
          setError("Must be small latter ")
          return
         }
         else if (/(?=.*[A-Z])/.test(password) ===false){
          setError ("Must be one capital latter")
          return;
         }
        createUserWithEmailAndPassword(auth, email, password)
        
  .then((userCredential) => {
    // Signed up 
    console.log(userCredential)
    
    sendEmailVerification(auth.currentUser)
  .then(() => {
   setSuccess(true)
    });

  //  update profile 
  updateProfile(auth.currentUser, profileUpdate).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  console.log(error)
});
    
  
  })

  
  .catch((error) => {
    setError(error.message)
    
  });


    }
    return (
        <div className="mt-2">
            <h2 className='text-center'>Welcome to signup page </h2>
        <form onSubmit={handleSignUp}>
            <div className="flex justify-center">
        <div className="space-y-4">
          
          <input name="email" type="email" className="input" placeholder="Email" /><br />
          <div className="relative">
            <input name="password" type={showPassword ? "text" : "password" } className="input" placeholder="Password" />
            <button onClick={()=>setShowPassword(!showPassword)} className="absolute top-2 right-6">
              {
                showPassword?<IoEye />:<IoMdEyeOff />
              }
              
            </button>
            
            

          </div>
          <input className="input" type="text" name="DisplayName" placeholder="Please write your name"  />
            <input className="input" type="text" name="PhotoUrl"  placeholder="please give your photo link" /><br />
          <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
 
  <label className="label">
    <input type="checkbox" name="terms" className="checkbox" />
    Accept Our Condition 
  </label>
</fieldset>
          
          <button className="btn ">Forgot password</button>
          <div className="flex justify-center">
             <input className="btn btn-success " type="submit" value="SignIn" />
          </div>
          <p>You all ready have a account ?   <Link className="text-green-500" to={'/login'}>please Login</Link> </p>
        </div>
      </div>
        </form>
        {
            error&&<p className="text-red-600 text-center">{error}</p>
        }
        {
          success && <p className="text-green-500 text-center">SignUp successFully complete </p>
        }
            
            
        </div>
    );
};

export default SignUp;