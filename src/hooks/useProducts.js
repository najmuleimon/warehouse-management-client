import React, { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://hidden-cliffs-98459.herokuapp.com/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return [products, setProducts]
};

export default UseProducts;