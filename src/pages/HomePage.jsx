import { useEffect, useState } from "react";
import { getCategories } from "../api/ProductApi"
import { ProductCard } from "../components/ProductCard";
import { useProducts } from "../context/ProductContext";

const HomePage = () => {
    const products = useProducts();
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();

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
                <select
                    // defaultValue={selectedCategory === undefined ? "Pick a category" : selectedCategory}
                    defaultValue={selectedCategory ?? "Pick a category"}
                    onChange={({ target }) => setSelectedCategory(target.value)}
                    className="select select-success w-full max-w-xs"
                >
                    <option
                        disabled
                        key="default-option"
                    >
                        Pick a category
                    </option>

                    {categories.map(category => (
                        <option key={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <h1>Products</h1>

            <div>
                {selectedCategory === undefined
                    ? products
                        .map(product => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                            />
                        ))
                    : products
                        .filter(({ category }) => category === selectedCategory)
                        .map(product => <ProductCard key={product.id} {...product} />)
                }
            </div>
        </div >
    )
}

export default HomePage;