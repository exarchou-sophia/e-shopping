export const getProducts = () =>
    fetch("https://fakestoreapi.com/products").then(res => res.json());

export const getCategories = () =>
    fetch("https://fakestoreapi.com/products/categories").then(res => res.json());