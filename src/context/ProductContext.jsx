import { createContext, useContext } from "react";

export const ProductContext = createContext();

export const useProducts = () => {
    const { products } = useContext(ProductContext);
    return products
}
