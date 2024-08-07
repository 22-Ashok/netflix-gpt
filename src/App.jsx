import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import Browse from './components/Browse'
import { Provider } from 'react-redux'
import appStore from './redux/Appstore'


function App() {

  const routes = createBrowserRouter([{
    path:'/',
    element:<Login />
  },{
    path:'/browse',
    element: <Browse />
  }])
 
  return (
       <Provider store={appStore} >
         <RouterProvider router={routes} />
       </Provider>
  )
}

export default App
