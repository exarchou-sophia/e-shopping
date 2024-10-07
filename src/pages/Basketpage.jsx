import { ProductCardWithQuantity } from "../components/ProductCardWithQuantity";
import { useProducts } from "../context/ProductContext";
import { useBasket } from "../context/BasketContext";
import { useEffect } from "react";
import { BasketNavView } from "../components/BasketNavView";

const BasketPage = () => {
    const products = useProducts();
    const { basketItems, refreshBasketItem } = useBasket();

    useEffect(() => {
        refreshBasketItem();
    }, [])

    if (products.length <= 0) return <p>no products available</p>

    return (
        <div>
            <h1 className="text-xl border-2 p-2 border-b-lime-500 bg-slate-100 ">Your basket</h1>
            <div>
                {basketItems
                    .map(bItem => ({
                        ...bItem,
                        ...(products.find(({ id }) => id === bItem.id))
                    }))
                    .map(product => (
                        <ProductCardWithQuantity
                            key={product.id}
                            {...product}

                            basketQuantityChanged={refreshBasketItem}
                        />
                    ))}
            </div>

            <aside className="flex justify-end items-center border-4 border-cyan-500
                            h-36 w-36 fixed top-[66%] right-0 transform -translate-y-1/2">
                <img src="./src/assets/images/shopping-basket.png" className="h-25 m-8" />
                {/* <p> Total: {BasketNavView}€ </p> */}
                <p className="items-center justify-center flex">
                    Total:
                    {basketItems
                        .map(bItem => ({
                            ...bItem,
                            ...(products.find(({ id }) => id === bItem.id))
                        }))
                        .map(({ price, quantity }) => price * quantity)
                        .reduce((accumulator, currentValue) => (accumulator + currentValue), 0)
                        .toFixed(2)
                    }
                </p>
            </aside>
        </div >

    )
};

export default BasketPage;