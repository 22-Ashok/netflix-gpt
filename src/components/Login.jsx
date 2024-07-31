import { useRef } from 'react'
import Header from './Header'
import {Validation} from '../utils/Validation';

const Login = () => {

    const email = useRef();
    const password = useRef();

    function handleBtnClick(){
     const isValid =    Validation(email,password)
     console.log(isValid);
    }
     
    return (
        <div>
            <Header />
            <div>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
            </div>

            <form onSubmit={ (e)=> e.preventDefault() } className="bg-black text-white absolute top-[15%] mx-auto right-0 left-0 flex flex-col justify-center items-center w-1/4 rounded-lg px-10 bg-opacity-90 ">
                <h1 className="text-2xl font-bold pt-4 pb-3">Sign In</h1>
                <input ref={email} type="text" placeholder="email" className="my-1 w-full h-10 px-2 rounded-sm bg-gray-800 bg-opacity-90" /> <br />
                <input ref={password} type="password" placeholder="password" className="my-1 w-full h-10 px-2 rounded-sm bg-gray-800 bg-opacity-80"/> <br/>
                <button className="my-1 bg-red-800 w-full h-10 rounded-sm" onClick={handleBtnClick} >Sign In</button>
             </form>
            
        </div>
    )
}

export default Login 