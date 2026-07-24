// pages/ProductDetail.jsx — Product detail page using useParams
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
            <button onClick={() => navigate(-1)} className="btn btn-outline" style={{ marginBottom: '24px', flex: 'none' }}>
                Back
            </button>
            <div className="product-card" style={{ cursor: 'default' }}>
                <h2>Product Detail: #{id}</h2>
                <p style={{ color: 'var(--text-secondary)' }}>
                    In a real app, this would fetch data from the API using the product ID from the URL.
                </p>
                <pre style={{ background: 'var(--bg-primary)', padding: '16px', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--accent)' }}>
{`// React Router useParams hook:
const { id } = useParams(); // id = "${id}"

// Fetch from API:
const { data } = useFetch(\`/api/products/\${id}\`);`}
                </pre>
            </div>
        </div>
    );
}
