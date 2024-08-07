
const Header = () => {

    return (
        <div className="w-screen px-5 bg-gradient-to-b from-black to-transparent h-20 flex items-center justify-between">
            <div  className="w-36">
              <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" className="w-full" />
            </div>
           
           <button className="bg-red-800 text-white h-16 w-20 rounded-md text-lg">Sign out</button>
        </div>
    )
}

export default Header 


//bg-gradient-to-b from-black to-transparent absolute ml-32 my-5 w-36