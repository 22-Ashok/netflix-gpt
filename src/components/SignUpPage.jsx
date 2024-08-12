import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { bgImg } from "../utils/constatnt";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { signinInfo, errorPage } from "../redux/slices/userSlice";
import { validInput } from "../utils/inputValid"
import Header from "./Header";

const SignUp = () => {
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const error = useSelector((store) => store.userInfo.error);

    const signUpFunction = () => {

        const isValidInput = validInput(name.current.value, email.current.value, password.current.value);
        if(isValidInput){
            dispatch(errorPage(isValidInput));
            return
        }

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName:name.current.value
                }).then(() => {
                    const{email,displayName,uid,accessToken} = auth.currentUser;
                   dispatch(signinInfo({email,displayName,uid,accessToken}));
                   dispatch(errorPage(null));
                    navigate("/browse");
                }).catch((error) => {
                    dispatch(errorPage(error))
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                dispatch(errorPage(errorMessage));
                console.log(errorMessage);
            });
    }

    return (
        <>
            <img src={bgImg} alt="missing" className="h-screen  w-screen"></img>
            <Header />
            <div className="bg-black opacity-85 flex  text-white flex-col w-[25%] px-3 rounded-lg absolute top-1/4 left-1/3">
                <h1 className="text-xl font-bold pt-10 pb-5"> Sign In </h1>
                <input ref={name} type="name" placeholder="name" className="my-3 h-10 rounded-md px-2 text-black text-lg font-semibold cursor-pointer" />
                <input ref={email} type="email" placeholder="email" className="my-3 h-10 rounded-md px-2 text-black text-lg font-semibold cursor-pointer" />
                <input ref={password} type="password" placeholder="password" className="my-3 h-10 rounded-md px-2 text-black font-semibold text-lg cursor-pointer" />
                { error && <div className="text-red-800 text-lg font-semibold">{error}</div>}

                <button className="bg-red-800 text-white text-lg font-semibold h-10 rounded-md my-3 hover:bg-red-500 " onClick={signUpFunction}>Sign In</button>

                <div className="pt-5 pb-10 text-lg">Already Sign Up? <span className="cursor-pointer font-bold" onClick={() => navigate("/")}>Sign In </span> </div>

            </div>
        </>

    )
}



export default SignUp
