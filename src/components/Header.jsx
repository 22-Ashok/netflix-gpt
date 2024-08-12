import { netflix_logo } from "../utils/constatnt"
import { useDispatch } from "react-redux"
import { signoutInfo } from "../redux/slices/userSlice";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase"

const Header = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();

    const signOutFunction = () => {
        signOut(auth).then(() => {
          dispatch(signoutInfo());
          navigate("/");
        }).catch((error) => {
        });
    }

    return (
        <div className="flex justify-between absolute top-0 w-screen px-12 items-center bg-gradient-to-b from-black">
            <div>
                <img src={netflix_logo} alt="logo" className="h-20 w-36" />
            </div>

            <div>
                <button className="bg-red-800 text-white h-10 w-20 rounded-md" onClick={signOutFunction}>Sign out</button>
            </div>
        </div>
    )
}

export default Header