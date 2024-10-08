import { Button } from "./Button";
import { addBasketItemToStorage, decrementBasketQuantity, removeItemFromStorageById } from "../storage/basket";

export const ProductCardWithQuantity = props => (
    <div className="relative bg-white shadow-md rounded-lg pt-1 pb-1 m-2 w-full max-w-lg flex items-center space-x-4 ">
        <Button
            style={{ background: "none", position: "absolute", right: -12, top: -12 }}
            title="❌"
            onClicked={() => {
                console.log("item removed", props)
                removeItemFromStorageById(props.id);
                props.basketQuantityChanged();
            }}
        />
        <div className="flex flex-col items-center space-y-2">
            <img
                src={props.image}
                alt="Product"
                className="w-32 h-32 object-contain rounded-md"
            />

        </div>
        <div className="bg-white shadow-md rounded-lg p-2 mb-6 w-full max-w-xs flex flex-col space-y-2">
            <h3 className="text-lg font-semibold ">{props.title}</h3>

            <p className="text-xs text-gray-600">{props.description}</p>
            <div className="flex items-center space-x-2">

                <Button
                    className="px-4 m-0"
                    title=" - "
                    onClicked={() => {
                        decrementBasketQuantity(props.id);
                        props.basketQuantityChanged();
                    }}
                />

                <div className="border border-gray-300 rounded px-4 py-2 text-center">
                    {props.quantity}
                </div>

                <Button
                    className="m-0 px-4"
                    title=" + "
                    onClicked={() => {
                        console.log("item added", props)
                        addBasketItemToStorage({
                            id: props.id
                        })
                        props.basketQuantityChanged();
                    }}
                />

                <div className="text-sm text-left">
                    <p className="font-md">
                        {props.price}€
                    </p>
                    <p className="text-lime-600 font-md whitespace-nowrap">
                        total: {props.price * props.quantity}€
                    </p>
                </div>
            </div>
        </div>
    </div>
);