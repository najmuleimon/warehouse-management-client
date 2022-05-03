import React, { useEffect, useState } from 'react';

const useAllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-products")
        .then(res => res.json())
        .then(data => setAllProducts(data))
    }, [])
    return [allProducts, setAllProducts]
};

export default useAllProducts;