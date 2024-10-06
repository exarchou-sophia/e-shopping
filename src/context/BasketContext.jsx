import { createContext, useContext } from "react";

export const BasketContext = createContext();

export const useBasket = () => useContext(BasketContext);