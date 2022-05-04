import React, { useEffect, useState } from 'react';

const useProduct = productId => {
    const [product, setProduct] = useState({});

    useEffect( () =>{
        const url = `https://hidden-cliffs-98459.herokuapp.com/${productId}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));

    }, [productId]);
    return [product, setProduct]
};

export default useProduct;