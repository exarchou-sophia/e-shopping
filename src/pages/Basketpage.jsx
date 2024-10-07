import { ProductCardWithQuantity } from "../components/ProductCardWithQuantity";
import { useProducts } from "../context/ProductContext";
import { useBasket } from "../context/BasketContext";
import { useEffect } from "react";

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

            <aside className="flex justify-end border border-cyan-400">
                <img src="./src/assets/images/shopping-basket.png" className="h-20" />
            </aside>
        </div >

    )
};

export default BasketPage;