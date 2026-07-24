// components/ProductCard.jsx — Card with edit/delete actions
import { Link } from 'react-router-dom';

export default function ProductCard({ product, onEdit, onDelete }) {
    const { id, name, category, price, stock, description } = product;

    const stockStatus = stock === 0 ? 'out-of-stock'
        : stock < 10 ? 'low-stock' : 'in-stock';

    const stockLabel = stock === 0 ? 'Out of Stock'
        : stock < 10 ? `Low Stock (${stock})` : `In Stock (${stock})`;

    return (
        <div className="product-card">
            <div className="product-card-header">
                <span className="category-badge">{category}</span>
                <span className={`stock-badge ${stockStatus}`}>{stockLabel}</span>
            </div>
            <div className="product-card-body">
                <h3 className="product-name">
                    <Link to={`/products/${id}`}>{name}</Link>
                </h3>
                <p className="product-description">{description}</p>
                <div className="product-price">
                    ₹{price.toLocaleString('en-IN')}
                </div>
            </div>
            <div className="product-card-footer">
                <button className="btn btn-outline" onClick={() => onEdit(product)}>
                    Edit
                </button>
                <button className="btn btn-danger" onClick={() => onDelete(id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}
