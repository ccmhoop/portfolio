import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext(undefined);

export const AppProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
    });

    useEffect(() => {
        const root = document.documentElement;
        

        root.classList.add('no-transition');
        
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        const timeout = setTimeout(() => {
            root.classList.remove('no-transition');
        }, 50);
        
        return () => clearTimeout(timeout);
    }, [theme]);

    const toggleTheme = () => {
        const root = document.documentElement;
        root.classList.add('theme-transitioning');
        
        setTheme(prev => {
            if (prev === 'light') return 'dark';
            if (prev === 'dark') return 'light';

            const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return isSystemDark ? 'dark' : 'light';
        });

        setTimeout(() => {
            root.classList.remove('theme-transitioning');
        }, 450);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <AppContext.Provider value={{ isMobile, theme, toggleTheme }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
