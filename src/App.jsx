
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
                    <nav className="p-6 bg-cyan-600 top-0 sticky relative inset-0 w-full h-full object-cover" alt="Logo">
                        <img src="./src/assets/default-monochrome.png" />
                        <div className="z-10 flex justify-between w-full  px-4 md:px-8 relative">
                            <Link to="/" className="mr-4 hover:text-lime-300 transition-colors duration-300">Home</Link>
                            <Link to="/basket" className="hover:text-lime-300 transition-colors duration-300">Your Basket</Link>
                        </div>
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