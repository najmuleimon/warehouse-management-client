import React, { useEffect, useState } from 'react';

const useAllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch("https://hidden-cliffs-98459.herokuapp.com/all-products")
        .then(res => res.json())
        .then(data => setAllProducts(data))
    }, [])
    return [allProducts, setAllProducts]
};

export default useAllProducts;