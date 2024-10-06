import { useEffect, useState } from "react";
import { getProducts, getCategories } from "../api/ProductApi"
import { ProductCard } from "../components/ProductCard";

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();

    useEffect(() => {
        getProducts().then(products => {
            console.log("products", products);
            setProducts(products)
        }).catch(error => {
            console.log("error loading products", error)
        });
    }, [])

    useEffect(() => {
        getCategories().then(categories => {
            console.log("categories", categories);
            setCategories(categories)
        });
    }, [])

    useEffect(() => {
        console.log("selection", selectedCategory);
    }, [selectedCategory])

    return (
        <div className="text-center p-8">
            <h1 className="text-4xl font-bold">Your ultimate e-shopping experience awaits!</h1>

            <h1>All Categories</h1>
            <div>
                <select onChange={({ target }) => {
                    console.log(`this was selected: ${target.value}`, target);
                    setSelectedCategory(target.value)

                }} className="select select-success w-full max-w-xs">
                    <option
                        disabled
                        selected={selectedCategory === undefined}
                    >
                        Pick a category
                    </option>

                    {categories.map(category => (
                        <option selected={selectedCategory === category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <h1>Products</h1>

            <ul>
                {selectedCategory === undefined
                    ? products
                        .map(product => (
                            <ProductCard
                                title={product.title}
                                price={product.price}
                                description={product.description}
                            />)
                        )
                    : products
                        .filter(({ category }) => category === selectedCategory)
                        .map(product => <ProductCard {...product} />)
                }
            </ul>
        </div >
    )
}

export default HomePage;