// components/Navbar.jsx — Navigation with theme toggle
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">ProductHub</Link>
            </div>
            <div className="navbar-links">
                <Link to="/">Products</Link>
            </div>
            <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
            >
                {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
        </nav>
    );
}
