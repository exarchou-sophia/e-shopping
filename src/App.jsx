
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BasketPage from "./pages/BasketPage";
import { useState, useEffect } from "react";
import { getProducts } from "./api/ProductApi";
import { ProductContext } from "./context/useContext";

export const App = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(setProducts)
    }, [])

    return (
        <ProductContext.Provider value={{ products }}>
            <Router>
                <nav className="p-4 bg-gray-200">
                    <Link to="/" className="mr-4">Home</Link>
                    <Link to="/basket">Your Basket</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/basket" element={<BasketPage />} />

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </ProductContext.Provider>
    )
};