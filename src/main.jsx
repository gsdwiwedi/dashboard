import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Product from './pages/Product.jsx'
import Weather from './pages/Weather.jsx'

const paths  =  createBrowserRouter([
        {
             path:"/",
             element:<App></App>,
             children: [
                 {
                     path:"/product",
                     element:<Product/>
                 },
                 {
                  path:"/weather",
                  element:<Weather></Weather>
                 },

                 {
                  path:"/*",
                  element:<div>  Page Not Found</div>
                 }
             ]
        }
]) 

createRoot(document.getElementById('root')).render(
      <RouterProvider  router={paths}></RouterProvider>
)
