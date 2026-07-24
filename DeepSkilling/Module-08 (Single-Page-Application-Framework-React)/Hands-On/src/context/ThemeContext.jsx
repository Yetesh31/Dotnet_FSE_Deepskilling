// context/ThemeContext.jsx — Global Theme using Context API
import { createContext, useContext, useState, useCallback } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = useCallback(() => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`theme-${theme}`} data-theme={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}

// Custom hook to use theme
export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
    return ctx;
}
