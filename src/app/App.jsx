import {useState} from 'react'
import './App.css'
import {Link, Outlet} from "react-router";
import NavBar from "./component/Navbar.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
           <NavBar />
            <div className="content">
                <Outlet/>
            </div>
        </>

    )
}

export default App
