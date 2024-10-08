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

            <aside
                className="flex justify-end items-center border-4 rounded-md bg-cyan-500 border-cyan-500
                            h-36 w-36 fixed top-[66%] right-1 transform -translate-y-1/2"
                style={{

                    borderRadius: 16,
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(5px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
            >
                <img src="./src/assets/images/shopping-basket.png" className="h-25 m-0" />
                {/* <p> Total: {BasketNavView}€ </p> */}
                <div className="flex justify-between items-start w-full">
                    <p className="m-0 p-0 " style={{ width: "70px" }}>
                        Total: </p>
                    <p className="m-0 px-1 no-wrap">
                        {basketItems
                            .map(bItem => ({
                                ...bItem,
                                ...(products.find(({ id }) => id === bItem.id))
                            }))
                            .map(({ price, quantity }) => price * quantity)
                            .reduce((accumulator, currentValue) => (accumulator + currentValue), 0)
                            .toFixed(2)
                        }€
                    </p>
                </div >
            </aside >
        </div >
    )
};

export default BasketPage;