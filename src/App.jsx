import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import Browse from './components/Browse'

function App() {

  const routes = createBrowserRouter([{
    path:'/',
    element:<Login />
  },{
    path:'/browse',
    element: <Browse />
  }])

 
  return (
      <RouterProvider router={routes} />
  )
}

export default App