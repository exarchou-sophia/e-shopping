import { Button } from "./Button";
import { addBasketItemToStorage, decrementBasketQuantity, removeItemFromStorageById } from "../storage/basket";

export const ProductCardWithQuantity = props => (
    <div className="bg-white shadow-md rounded-lg p-6 m-12 w-full max-w-lg flex items-center  space-x-4 ">
        <div className="flex flex-col items-center space-y-2">
            <img
                src={props.image}
                alt="Product"
                className="w-32 h-32 object-contain rounded-md"
            />
            <Button
                className="px-3 "
                title=" ❌ "
                onClicked={() => {
                    console.log("item removed", props)
                    removeItemFromStorageById(props.id);
                    props.basketQuantityChanged();
                }}
            />
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 mb-6 w-full max-w-xs flex flex-col items-center space-y-4">
            <h3 className="text-lg font-semibold ">{props.title}</h3>

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

                <div className="text-sm ">
                    <p className="font-md">{props.price}€</p>

                    <p className="ml-2 text-lime-600 font-md whitespace-nowrap">total:{props.price * props.quantity}€</p>
                </div>
                {/* <p className="text-sm">
                    {`${props.price}€ x ${props.quantity} = ${props.price * props.quantity}€`}
                </p> */}
                {/* <p className="text-gray-500"> qty: {props.quantity}</p> */}
            </div>
        </div>
    </div>
);