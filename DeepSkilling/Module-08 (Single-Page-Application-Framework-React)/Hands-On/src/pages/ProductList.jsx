// pages/ProductList.jsx — Product listing with search, filter, and CRUD
import { useState, useCallback, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import ProductForm from '../components/ProductForm';
import SearchBar from '../components/SearchBar';

const INITIAL_PRODUCTS = [
    { id: 1, name: 'Laptop Pro 15',    category: 'Electronics', price: 75000, stock: 10, description: 'High-performance laptop for professionals' },
    { id: 2, name: 'Wireless Mouse',   category: 'Electronics', price: 1500,  stock: 50, description: 'Ergonomic wireless mouse' },
    { id: 3, name: 'Standing Desk',    category: 'Furniture',   price: 18000, stock: 5,  description: 'Adjustable height standing desk' },
    { id: 4, name: 'Monitor 27"',      category: 'Electronics', price: 22000, stock: 15, description: '4K UHD monitor' },
    { id: 5, name: 'Office Chair',     category: 'Furniture',   price: 12000, stock: 8,  description: 'Ergonomic office chair' },
    { id: 6, name: 'USB-C Hub',        category: 'Electronics', price: 3500,  stock: 30, description: '7-in-1 USB-C hub' },
];

export default function ProductList() {
    const [products,        setProducts]        = useState(INITIAL_PRODUCTS);
    const [searchTerm,      setSearchTerm]      = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showForm,        setShowForm]        = useState(false);
    const [editingProduct,  setEditingProduct]  = useState(null);

    // Memoized filtered list
    const filteredProducts = useMemo(() => {
        return products.filter(p => {
            const matchSearch   = p.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
            return matchSearch && matchCategory;
        });
    }, [products, searchTerm, selectedCategory]);

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const handleSave = useCallback((product) => {
        if (product.id) {
            setProducts(prev => prev.map(p => p.id === product.id ? product : p));
        } else {
            setProducts(prev => [...prev, { ...product, id: Date.now() }]);
        }
        setShowForm(false);
        setEditingProduct(null);
    }, []);

    const handleDelete = useCallback((id) => {
        if (window.confirm('Delete this product?')) {
            setProducts(prev => prev.filter(p => p.id !== id));
        }
    }, []);

    const handleEdit = useCallback((product) => {
        setEditingProduct(product);
        setShowForm(true);
    }, []);

    return (
        <div className="product-list-page">
            <div className="page-header">
                <h1>Product Manager</h1>
                <button className="btn btn-primary" onClick={() => { setEditingProduct(null); setShowForm(true); }}>
                    + Add Product
                </button>
            </div>

            <div className="filters">
                <SearchBar value={searchTerm} onChange={setSearchTerm} />
                <div className="category-filter">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="stats-bar">
                <span>Showing {filteredProducts.length} of {products.length} products</span>
            </div>

            {filteredProducts.length === 0 ? (
                <div className="empty-state">
                    <p>No products found matching your criteria.</p>
                </div>
            ) : (
                <div className="products-grid">
                    {filteredProducts.map(p => (
                        <ProductCard
                            key={p.id}
                            product={p}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            )}

            {showForm && (
                <ProductForm
                    product={editingProduct}
                    onSave={handleSave}
                    onCancel={() => { setShowForm(false); setEditingProduct(null); }}
                />
            )}
        </div>
    );
}
