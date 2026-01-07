import {useState} from 'react'
import leafsVertical from '../assets/leafsVertical.jpg'
import viteLogo from '/vite.svg'
import {ImLinkedin} from "react-icons/im";
import './App.css'
import {Link, Outlet} from "react-router";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="layout">

            <div className="content">
                <div className="name-bar">
                    <p>
                        CONNER
                    </p>
                </div>
                <div className="social-bar">
                    <li>
                        <Link to="/portfolio">
                            <ImLinkedin size={25} color="#000000"/>
                        </Link>
                    </li>
                </div>
                <div className="outlet-background">
                    <div className="outlet-content">
                        <Outlet/>
                    </div>
                </div>
            </div>
            <div className="image-bar">
                <img src={leafsVertical} alt="React Logo"/>
            </div>
        </div>

)
}

export default App
