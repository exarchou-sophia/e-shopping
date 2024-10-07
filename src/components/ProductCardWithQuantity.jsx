import { Button } from "./Button";
import { addBasketItemToStorage, decrementBasketQuantity, removeItemFromStorageById } from "../storage/basket";

export const ProductCardWithQuantity = props => (

    <div className="bg-white shadow-md rounded-lg p-4 m-6 w-full max-w-lg flex space-x-4 items-center">

        <img
            src="./src/assets/default.png"
            alt="Product"
            className="w-32 h-32 object-cover rounded-md"
        />

        <div className="bg-white shadow-md rounded-lg p-4 mb-6 w-full max-w-xs flex flex-col items-center space-y-4">
            <h3 className="text-lg font-semibold ">{props.title}</h3>
            <p className="text-sm">
                {`${props.price}€ x ${props.quantity} = ${props.price * props.quantity}€`}
            </p>
            <p className="text-xs text-gray-600">{props.description}</p>
            <div className="flex items-center justify-center space-x-4">
                <Button
                    className="px-4"
                    title=" + "
                    onClicked={() => {
                        console.log("item added", props)
                        addBasketItemToStorage({
                            id: props.id
                        })
                        props.basketQuantityChanged();
                    }}
                />

                <div className="border border-gray-300 rounded px-4 py-2 text-center">
                    {props.quantity}
                </div>

                <Button
                    className="px-4"
                    title=" - "
                    onClicked={() => {
                        decrementBasketQuantity(props.id);
                        props.basketQuantityChanged();
                    }}
                />

                <Button
                    title=" ❌ "
                    onClicked={() => {
                        console.log("item removed", props)
                        removeItemFromStorageById(props.id);
                        props.basketQuantityChanged();
                    }}
                />
            </div>
        </div>
    </div>

);