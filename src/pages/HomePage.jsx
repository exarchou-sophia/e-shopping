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
        <div className="text-center text-slate-800 p-8 min-h-screen p-6 bg-slate-100">
            <h1 className="text-4xl text-center p-5 mb-10 font-bold" >Your Amazing e-shopping experience awaits!</h1>

            <h1>All Categories</h1>
            <div>
                <select
                    // defaultValue={selectedCategory === undefined ? "Pick a category" : selectedCategory}
                    defaultValue={selectedCategory ?? "Pick a category"}
                    onChange={({ target }) => setSelectedCategory(target.value)}
                    className="select w-full max-w-xs"
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

            <h1 className="text-3xl font-bold text-center p-2 mb-10">All Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6">
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
        </div>
    )
}

export default HomePage;