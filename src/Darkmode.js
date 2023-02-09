import React from 'react'
import { useState, useEffect } from 'react';

export const Darkmode = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
        setTheme('dark');
        } else {
        setTheme('light');
        }
    }
    useEffect(() => {
        document.body.className = theme;
        }, [theme]);
    return (
        <div className={`App ${theme}`}>
            <button onClick={toggleTheme}>Toggle Dark Mode</button>
        </div>
  )
}

