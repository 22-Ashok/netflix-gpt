import { useRef, useState } from 'react'
import FrontPage from './FrontPage';
import { Validation } from '../utils/Validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import  { signInUser } from '../redux/slices/userSlice'


const Login = () => {

    const[isSignIn , setIssignIn] = useState(true);
    const[isError, setIsError] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const userName = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    function handleBtnClick(){

      if(!isSignIn){
        const valid_Detail = Validation(userName.current.value, email.current.value, password.current.value)

        if(valid_Detail){
          setIsError(valid_Detail);
          return;
        }

        createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential)=>{
          const user = userCredential.user;
          // update profile
          updateProfile(user, {
            displayName:userName.current.value
          })
          .then(()=>{
            const{ displayName, email } = auth.currentUser;
            dispatch(signInUser({displayName,email}))
            //console.log(`name:${displayName} and email:${email}`);
            navigate("/browse");
          })
          .catch((error)=> {
            console.log(error);
            setIsError(error);
          })
        })

        .catch((error) => {
          console.log(error);
          setIsError(error);
        })

      }

      else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
           navigate('/browse')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if( "Error (auth/invalid-credential)"){
             setIsError("user not found.")
          }      
        });
      }
    }
     
    return (
        <div>
            <FrontPage />
            <div>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
            </div>

            <form onSubmit={ (e)=> e.preventDefault() } className="bg-black  text-white absolute top-[15%] mx-auto right-0 left-0 flex flex-col  w-1/4 rounded-lg px-10 bg-opacity-90 ">
                { isSignIn ? <h1 className="text-2xl font-bold pt-4 pb-3">Sign In</h1> : <h1 className="text-2xl font-bold pt-4 pb-3">Sign Up</h1>}
                
                { !isSignIn && <input ref={userName} type="text" placeholder='name' className="my-3 w-full h-10 px-2 rounded-sm bg-gray-800 bg-opacity-90" /> } 
                <input ref={email} type="text" placeholder="email" className="my-3 w-full h-10 px-2 rounded-sm bg-gray-800 bg-opacity-90" /> 
                <input ref={password} type="password" placeholder="password" className="my-3 w-full h-10 px-2 rounded-sm bg-gray-800 bg-opacity-80"/> 
                 
                 {/* error throw */}
                <div className="text-red-800 font-semibold">{isError}</div>

                <button className="my-4 bg-red-800 w-full h-10 rounded-sm" onClick={handleBtnClick} >{isSignIn ? 'Sign In' : 'Sign Up'}</button>
                
                  

                <div className="mt-4 mx-auto right-0 left-0 ">OR</div>
                <div className="pb-8 pt-3 mx-auto right-0 left-0 ">
                    <span> New to NetFlix? </span>
                    <span className="cursor-pointer font-semibold" onClick={ ()=> {
                      setIssignIn(!isSignIn)
                      setIsError(null);
                    } }> {isSignIn ? 'Sign up' : 'Sign In'} </span>
                </div>
             </form>
            
        </div>
    )
}

export default Login 