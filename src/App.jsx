import SignIn from './components/SignInPage'
import Browse from './components/Browse'
import SignUp from './components/SignUpPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
    path:"/",
    element: <SignIn />
},

{
   path:'/signUp',
   element:<SignUp />
},

{
    path:"/browse",
    element:<Browse />
}

])

const App = () => {

    return (
      <RouterProvider router={router} />
    )
}

export default App
