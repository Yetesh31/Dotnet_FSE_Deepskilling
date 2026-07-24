// src/App.jsx — Main React Application
// Product Manager App with Router, Context, and Hooks

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <div className="app">
                    <Navbar />
                    <main className="main-content">
                        <Routes>
                            <Route path="/"           element={<ProductList />} />
                            <Route path="/products"   element={<ProductList />} />
                            <Route path="/products/:id" element={<ProductDetail />} />
                            <Route path="*"           element={<NotFound />} />
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
