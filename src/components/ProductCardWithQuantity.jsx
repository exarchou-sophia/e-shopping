import { Button } from "./Button";
import { addBasketItemToStorage, decrementBasketQuantity, removeItemFromStorageById } from "../storage/basket";

export const ProductCardWithQuantity = props => (
    <div>
        <h3>{props.title}</h3>
        <p>
            {`${props.price}€ x ${props.quantity} = ${props.price * props.quantity}€`}
        </p>
        <p>{props.description}</p>

        <Button
            title="Add"
            onClicked={() => {
                console.log("item added", props)
                addBasketItemToStorage({
                    id: props.id
                })
                props.basketQuantityChanged();
            }}
        />

        <Button
            title="Decrement"
            onClicked={() => {
                decrementBasketQuantity(props.id);
                props.basketQuantityChanged();
            }}
        />

        <Button
            title="Remove"
            onClicked={() => {
                console.log("item removed", props)
                removeItemFromStorageById(props.id);
                props.basketQuantityChanged();
            }}
        />

    </div>
);