import { useBasket } from "../context/BasketContext"

export const BasketNavView = () => {
    const { basketItems } = useBasket();

    return (
        <div>
            <img src="./src/assets/images/shopping-basket.png" className="h-10" />
            <p className="items-end justify-center flex">
                {basketItems
                    .map(({ quantity }) => quantity)
                    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)}
            </p>
        </div>
    )
}
