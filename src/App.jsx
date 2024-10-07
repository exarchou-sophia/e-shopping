
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BasketPage from "./pages/BasketPage";
import { useState, useEffect } from "react";
import { getProducts } from "./api/ProductApi";
import { ProductContext } from "./context/ProductContext";
import { readAllBasketItems } from "./storage/basket";
import { BasketContext } from "./context/BasketContext";

export const App = () => {
    const [products, setProducts] = useState([])
    const [basketItems, setBasketItems] = useState([]);

    useEffect(() => {
        refreshBasketItem()
    }, []);

    const refreshBasketItem = () => {
        const storedBasketItems = readAllBasketItems();
        setBasketItems(storedBasketItems);
    }

    useEffect(() => {
        getProducts().then(setProducts)
    }, [])

    return (
        <ProductContext.Provider value={{ products }}>
            <BasketContext.Provider value={{ basketItems, refreshBasketItem }}>
                <Router>
                    <nav className="p-6 bg-cyan-600 top-0 sticky flex justify-between items-center">
                        <Link to="/" className="mr-4 ">Home</Link>
                        <Link to="/basket">Your Basket</Link>
                    </nav>

                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/basket" element={<BasketPage />} />

                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Router>
            </BasketContext.Provider>
        </ProductContext.Provider>
    )
};