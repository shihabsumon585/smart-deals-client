import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    console.log(products)
    useEffect(() => {
        fetch("http://localhost:3000/products")
        .then(res => res.json()
        .then(data => setProducts(data)))
        .catch(err => {
            console.log("products fetching error!")
        })
        
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;