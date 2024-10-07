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

            <aside className="flex justify-end border border-cyan-400">
                <img src="./src/assets/images/shopping-basket.png" className="h-20" />
            </aside>
        </div >

    )
};

// vertical carousel??
// <div className="carousel carousel-vertical rounded-box h-96">
//   <div className="carousel-item h-full">
//   <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" />
// </div>
// <div className="carousel-item h-full">
//   <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" />
// </div>
// <div className="carousel-item h-full">
//   <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" />
// </div>
// <div className="carousel-item h-full">
//   <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" />
// </div>
// <div className="carousel-item h-full">
//   <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" />
// </div>
// <div className="carousel-item h-full">
//   <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" />
// </div>
// <div className="carousel-item h-full">
//   <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" />
// </div>
// </div>
export default BasketPage;