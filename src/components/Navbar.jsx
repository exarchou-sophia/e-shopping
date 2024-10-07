import React from 'react';
import { Link } from 'react-router-dom';
import { useCategories } from '../context/CategoryContext';

export const NavBar = () => {
    const {
        categories,
        selectedCategory,
        setSelectedCategory
    } = useCategories();

    return (
        <nav className="py-1 bg-cyan-600 top-0 sticky relative inset-0 w-full h-full object-cover" alt="Logo">
            <div className="z-10 flex justify-between w-full  px-4 md:px-8 relative">
                <Link to="/" className="mr-4 hover:text-lime-300 text-lg text-white transition-colors duration-300">
                    <img src="/logo.png" className='h-12' />
                </Link>

                <div className="p-5 flex-1 flex justify-center">
                    <select
                        // defaultValue={selectedCategory === undefined ? "Pick a category" : selectedCategory}
                        defaultValue={selectedCategory ?? "Pick a category"}
                        onChange={({ target }) => setSelectedCategory(target.value)}
                        className="select rounded-md  lg:w-1/3  w-full max-w-xs"
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

                <Link to="/basket" className="hover:text-lime-300 text-lg text-white transition-colors duration-300">Your Basket</Link>
            </div>
            <div className='flex items-end justify-end px-4'>
                <img src="./src/assets/images/shopping-basket.png" className="h-10" >
                </img>
            </div>
        </nav>
    )
}