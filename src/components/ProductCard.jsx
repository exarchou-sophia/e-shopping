import { Button } from "./Button";
import { addBasketItemToStorage, decrementBasketQuantity, removeItemFromStorageById } from "../storage/basket";

export const ProductCard = props => (
    <div className="card w-full rounded-lg lg:w-96 bg-base-100 h-full flex flex-col shadow-xl">
        <img src={props.image} alt={props.name} className="h-48 w-full object-contain" />

        <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <span className="text-lg font-semibold p-2 text-cyan-600">{`${props.price}€`}</span>
            <p>{props.description}</p>

            <div className="card-actions justify-end">
                <Button
                    className="px-4"
                    title=" + "
                    onClicked={() => {
                        console.log("item added", props)
                        addBasketItemToStorage({
                            id: props.id
                        })
                    }}
                />

                <Button
                    className="px-4"
                    title=" - "
                    onClicked={() => {
                        console.log("item decremented", props)
                        decrementBasketQuantity(props.id)
                    }}
                />
            </div>
        </div>
    </div>
);