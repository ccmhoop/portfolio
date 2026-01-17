import './App.css'
import {Outlet} from "react-router";
import NavBar from "./component/Navbar.jsx";

function App() {
    return (
        <div className="layout">
            <NavBar />
            <main className="content">
                <Outlet/>
            </main>
        </div>
    )
}

export default App
