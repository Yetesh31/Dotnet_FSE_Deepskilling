// components/ProductForm.jsx — Controlled form with validation
import { useState, useEffect } from 'react';

const EMPTY_FORM = { name: '', category: 'Electronics', price: '', stock: '', description: '' };
const CATEGORIES = ['Electronics', 'Furniture', 'Clothing', 'Books', 'Sports'];

export default function ProductForm({ product, onSave, onCancel }) {
    const [form,   setForm]   = useState(EMPTY_FORM);
    const [errors, setErrors] = useState({});

    // Pre-populate when editing
    useEffect(() => {
        setForm(product ? { ...product } : EMPTY_FORM);
        setErrors({});
    }, [product]);

    const handleChange = ({ target: { name, value } }) => {
        setForm(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validate = () => {
        const errs = {};
        if (!form.name.trim())               errs.name        = 'Product name is required';
        if (form.price === '' || form.price < 0) errs.price   = 'Valid price is required';
        if (form.stock === '' || form.stock < 0) errs.stock   = 'Valid stock count is required';
        if (!form.description.trim())        errs.description = 'Description is required';
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        onSave({ ...form, price: Number(form.price), stock: Number(form.stock) });
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{product ? 'Edit Product' : 'Add Product'}</h2>
                    <button className="modal-close" onClick={onCancel}>x</button>
                </div>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="name">Product Name *</label>
                        <input
                            id="name" name="name" type="text"
                            value={form.name} onChange={handleChange}
                            className={errors.name ? 'error' : ''}
                            placeholder="Enter product name"
                        />
                        {errors.name && <span className="error-msg">{errors.name}</span>}
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select id="category" name="category" value={form.category} onChange={handleChange}>
                                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price (₹) *</label>
                            <input
                                id="price" name="price" type="number" min="0"
                                value={form.price} onChange={handleChange}
                                className={errors.price ? 'error' : ''}
                                placeholder="0"
                            />
                            {errors.price && <span className="error-msg">{errors.price}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="stock">Stock *</label>
                            <input
                                id="stock" name="stock" type="number" min="0"
                                value={form.stock} onChange={handleChange}
                                className={errors.stock ? 'error' : ''}
                                placeholder="0"
                            />
                            {errors.stock && <span className="error-msg">{errors.stock}</span>}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description *</label>
                        <textarea
                            id="description" name="description"
                            value={form.description} onChange={handleChange}
                            className={errors.description ? 'error' : ''}
                            rows={3} placeholder="Product description..."
                        />
                        {errors.description && <span className="error-msg">{errors.description}</span>}
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn btn-outline" onClick={onCancel}>Cancel</button>
                        <button type="submit" className="btn btn-primary">
                            {product ? 'Update' : 'Add'} Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
