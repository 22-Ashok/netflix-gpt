import { useRef,useState } from "react"
import { useNavigate } from "react-router-dom";
import { bgImg } from "../utils/constatnt";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { signinInfo, errorPage } from "../redux/slices/userSlice";
import Header from "./Header";

const SignIn = () => {
     const email = useRef(null);
     const password = useRef(null);
     const navigate = useNavigate();
     const dispatch = useDispatch();

     const errorHandle = useSelector((store) => store.userInfo.error);

     const signinFunction = () => {

      if(!email.current.value || !password.current.value){
        alert("enter email & password");
        return 
       }

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then(() => {
        const{displayName,email,uid,accessToken} = auth.currentUser;
        dispatch(signinInfo({displayName,email,uid,accessToken}));
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
         if(errorMessage == "Firebase: Error (auth/invalid-email)."){
           dispatch(errorPage("invalid email or password"))
         }
      });
     }
    
    return (
      <>
       <img src={bgImg} alt="missing" className="h-screen  w-screen"></img> 
       <Header />
         <div className="bg-black opacity-85 flex  text-white flex-col w-[25%] px-3 rounded-lg absolute top-1/4 left-1/3">
            <h1 className="text-xl font-bold pt-10 pb-5"> Sign In </h1>
            <input ref={email} type="email" placeholder="email" className="my-3 h-10 rounded-md px-2 text-black text-lg font-semibold cursor-pointer" />
            <input ref={password} type="password" placeholder="password" className="my-3 h-10 rounded-md px-2 text-black text-lg cursor-pointer" />
            { errorHandle && <div className="text-red-800 text-lg font-semibold">{errorHandle}</div>}
            <button className="bg-red-800 text-white text-lg font-semibold h-10 rounded-md my-3  hover:bg-red-500" onClick={signinFunction}>Sign In</button>

            <div className="pt-5 pb-10 text-lg">New Here? <span className="cursor-pointer font-bold" 
            onClick={() => {
              dispatch(errorPage(null))
              navigate("/signUp")
            } }>
              Sign Up</span></div>
         </div>
      </>     
    ) 
}

export default SignIn 