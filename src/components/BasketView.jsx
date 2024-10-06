import { useState, useEffect, useCallback } from "react";
import { Button } from "../components/Button";
import { ProductCard } from "./ProductCard.jsx";
import { readAllBasketItems, removeItemFromStorageById, addBasketItemToStorage } from "../storage";

//here we start with an empty array as initial value and we update the basketItems
export const BasketView = () => {
    const [basketItems, setBasketItems] = useState([])

    // we get the basketItems from local storage & we make sure this runs only once 
    //we call the function readAllBasketItems which 
    //retrieves, parses and returns items as array
    useEffect(() => {
        const storedBasketItems = readAllBasketItems();
        setBasketItems(storedBasketItems);
    }, []);

    // adding and remove items functions using Callback
    const addItemToBasket = useCallback(item => {
        setBasketItems([...basketItems, item]);
        addBasketItemToStorage(item);
    }, [basketItems])

    const removeItemFromBasketById = useCallback(id => {
        setBasketItems(basketItems.filter(item => item.id !== id));
        removeItemFromStorageById(id);
    }, [basketItems])

    return (
        <div>
            <Button
                title="add random item"
                onClicked={() => {
                    addItemToBasket({
                        id: Date.now(),
                        title: "max",
                    })
                }}
            />

            <h1>All Items</h1>

            <div>
                {basketItems.map(item => (
                    <ProductCard
                        key={item.id} {...item}
                        onClicked={() => removeItemFromBasketById(item.id)}
                    />)
                )}
            </div>
        </div>
    );
}