import { ProductCard } from "../components/ProductCard";
import { useProducts } from "../context/ProductContext";
import { useCategories } from "../context/CategoryContext";

const HomePage = () => {
    const products = useProducts();
    const { selectedCategory } = useCategories();

    return (
        <div className="text-center text-slate-800 p-8 min-h-screen p-6 bg-slate-100">
            <h1 className="text-4xl text-center p-5 mb-10 font-bold" >Your Amazing e-shopping experience awaits!</h1>
            <h1 className="text-3xl font-bold text-center p-2 mb-10">All Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCategory === undefined
                    ? products
                        .map(product => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                image={product.image}
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