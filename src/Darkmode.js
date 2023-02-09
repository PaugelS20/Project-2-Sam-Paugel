import { useState, useEffect } from 'react';

export const Darkmode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  
    const toggleTheme = () => theme == 'light' ? setTheme('dark'):setTheme('light');    
    
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
        }, [theme]);
    return (
        <div className={`App ${theme}`}>
            <button className={`btn btn-outline-secondary ${theme}`} onClick={toggleTheme}>Toggle Dark Mode</button>
        </div>
  )
}

