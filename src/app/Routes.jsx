import {createBrowserRouter} from "react-router";
import App from "./App.jsx";
import {Home} from "../pages/home/Index.jsx";

export const router = createBrowserRouter([
    {path:'/portfolio', element: <Home/>},
    {path:'/portfolio/home', element: <Home/>},
])