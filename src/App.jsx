
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BasketPage from "./pages/BasketPage";
import { useState, useEffect } from "react";
import { getProducts } from "./api/ProductApi";
import { ProductContext } from "./context/ProductContext";
import { CategoryContext } from "./context/CategoryContext";
import { readAllBasketItems } from "./storage/basket";
import { BasketContext } from "./context/BasketContext";
import { NavBar } from "../src/components/Navbar";
import { getCategories } from "./api/ProductApi";

export const App = () => {
    const [products, setProducts] = useState([])
    const [basketItems, setBasketItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState()

    useEffect(() => {
        getCategories().then(setCategories);
    }, [])

    useEffect(() => {
        refreshBasketItem()
    }, []);

    const refreshBasketItem = () => {
        const storedBasketItems = readAllBasketItems();
        console.log("refresh");

        setBasketItems(storedBasketItems);
    }

    useEffect(() => {
        getProducts().then(setProducts)
    }, [])

    return (
        <CategoryContext.Provider value={{
            categories,
            selectedCategory,
            setSelectedCategory
        }}>
            <ProductContext.Provider value={{ products }}>
                <BasketContext.Provider value={{ basketItems, refreshBasketItem }}>
                    <Router>
                        <NavBar />

                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/basket" element={<BasketPage />} />

                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </Router>
                </BasketContext.Provider>
            </ProductContext.Provider>
        </CategoryContext.Provider>
    )
};