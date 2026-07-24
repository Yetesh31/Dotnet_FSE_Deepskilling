// pages/NotFound.jsx
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div style={{ textAlign: 'center', padding: '80px 20px' }}>
            <h1 style={{ fontSize: '6rem', fontWeight: 800, color: 'var(--accent)' }}>404</h1>
            <h2>Page Not Found</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: 12 }}>
                The page you are looking for does not exist.
            </p>
            <Link to="/" style={{ display: 'inline-block', marginTop: 24 }} className="btn btn-primary">
                Go Home
            </Link>
        </div>
    );
}
