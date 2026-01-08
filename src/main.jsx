import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import {HomePage} from "./pages/home/Index.jsx";
import  {NotFoundPage} from "./pages/notFound/Index.jsx";

const router = createBrowserRouter([
    {index: '/portfolio/', element: <App/> ,
        children:[
            {path: '/portfolio/', element: <HomePage/>},
            {path: '/portfolio/projects', element: <HomePage/>},
        ]
    },
    {path: '*', element: <NotFoundPage/>}
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
