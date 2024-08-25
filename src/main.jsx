import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Hero from './Component/Hero/Hero.jsx'
import Form from './Component/Form/Form.jsx'
import About from './Component/About/About.jsx'
const router = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"",
      element:<Hero/>
    },
    {
      path:"form",
      element:<Form/>
    },
    {
      path:"about",
      element:<About/>
    }
  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
