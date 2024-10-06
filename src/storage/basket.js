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
        const alreadyStoredItemWithIncreasedQuantity = {
            ...alreadyStoredItem,
            quantity: alreadyStoredItem.quantity + 1,
        }

        localStorage.setItem(
            item.id,
            JSON.stringify(alreadyStoredItemWithIncreasedQuantity)
        );
    } else {
        const newItemToStore = {
            ...item,
            quantity: 1,
        }

        localStorage.setItem(
            item.id,
            JSON.stringify(newItemToStore)
        );
    }
}

export const decrementBasketQuantity = id => {
    const alreadyStoredItem = readBasketItemFromStorageById(id);
    if (!alreadyStoredItem) return

    if (alreadyStoredItem.quantity <= 1) {
        removeItemFromStorageById(id);
    } else {
        const alreadyStoredItemWithDecreasedQuantity = {
            ...alreadyStoredItem,
            quantity: alreadyStoredItem.quantity - 1,
        }
        localStorage.setItem(
            id,
            JSON.stringify(alreadyStoredItemWithDecreasedQuantity)
        );
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
