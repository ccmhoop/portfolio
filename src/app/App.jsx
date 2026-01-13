import {useState, useEffect} from 'react'
import './App.css'
import {Outlet} from "react-router";
import NavBar from "./component/Navbar.jsx";

function App() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'system';
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'system') {
            root.removeAttribute('data-theme');
        } else {
            root.setAttribute('data-theme', theme);
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => {
            if (prev === 'light') return 'dark';
            if (prev === 'dark') return 'light';
            
            // If currently system, we need to know what system is to toggle to the opposite
            const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return isSystemDark ? 'light' : 'dark';
        });
    };

    return (
        <div className="layout">
            <NavBar theme={theme} toggleTheme={toggleTheme} />

            <main className="content">
                <Outlet/>
            </main>
        </div>
    )
}

export default App
