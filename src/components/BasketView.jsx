import { useState, useEffect, useCallback } from "react";
import { Button } from "../components/Button";
import { ProductCard } from "./ProductCard.jsx";

//first we check if basket has items and then we get them
//if so we parse them , otherwise we do nothing
export const readBasketItemFromStorageById = id => {
    const itemStr = localStorage.getItem(id);

    if (itemStr) {
        return JSON.parse(itemStr)
    } else {
        return undefined
    }
}

//next we want to add item to local storage so 
//if item is already stored then we add +1 , otherwise we add 1 item
export const addBasketItemToStorage = item => {
    const alreadyStoredItem = readBasketItemFromStorageById(item.id);

    if (alreadyStoredItem) {
        localStorage.setItem(item.id, JSON.stringify({
            ...alreadyStoredItem,
            quantity: alreadyStoredItem.quantity + 1,
        }));
    } else {
        localStorage.setItem(item.id, JSON.stringify({
            ...item,
            quantity: 1,
        }));
    }
}

//then we want to remove items from local storage so we create this function
export const removeItemFromStorageById = id => localStorage.removeItem(id);

//here we create a function which "reads" (as in CRUD) all the keys from local storage
//as array of strings, and after this we iterate over each key and call 
//the function  readBasketItemFromStorageById which has already parsed the items.
export const readAllBasketItems = () => Object
    .keys(localStorage)
    .map(key => readBasketItemFromStorageById(key))

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