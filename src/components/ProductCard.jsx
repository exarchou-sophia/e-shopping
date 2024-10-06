import { Button } from "./Button";
import { addBasketItemToStorage, decrementBasketQuantity, removeItemFromStorageById } from "../storage/basket";

export const ProductCard = props => (
    <div>
        <h2>{props.title}</h2>
        <span>{props.price}</span>
        <p>{props.description}</p>
        <Button title="Add" onClicked={() => {
            console.log("item added", props)
            addBasketItemToStorage({
                id: props.id
            })
        }} />
        <Button title="Remove" onClicked={() => {
            console.log("item removed", props)
            removeItemFromStorageById(props.id)
        }} />

        <Button title="decrement" onClicked={() => {
            console.log("item decremented", props)
            decrementBasketQuantity(props.id)
        }}
        />
    </div>
);