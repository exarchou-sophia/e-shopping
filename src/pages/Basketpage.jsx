import { useEffect, useState } from "react";
import { readAllBasketItems } from "../storage/basket";
import { ProductCardWithQuantity } from "../components/ProductCardWithQuantity";

const BasketPage = props => {
    // define the state of basket items like categories
    const [basketItems, setBasketItems] = useState([]);
    useEffect(() => {
        refreshBasketItem()
    }, []);

    const refreshBasketItem = () => {
        const storedBasketItems = readAllBasketItems();
        setBasketItems(storedBasketItems);
    }
    // load hte basket items [] with use effect like categories
    // readAllBasketItems

    // categories same like basket items

    if (props.products.length <= 0) return <p>no products available</p>

    return (
        <div>
            <h1>Your basket</h1>
            <div>
                {basketItems
                    .map(bItem => ({
                        ...bItem,
                        ...(props.products.find(({ id }) => id === bItem.id))
                    }))
                    .map(product => (
                        <ProductCardWithQuantity
                            key={product.id}
                            {...product}

                            basketQuantityChanged={refreshBasketItem}
                        />
                    ))}
            </div>
        </div>
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