import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import {HomePage} from "./pages/home/Index.jsx";
import  {NotFoundPage} from "./pages/notFound/Index.jsx";
import {ProjectsPage} from "./pages/projects/Index.jsx";

const router = createBrowserRouter([
    {
        path: "/portfolio",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "projects",
                element: <ProjectsPage />
            }
        ]
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
]);
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
