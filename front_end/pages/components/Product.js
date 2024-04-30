import React, { useState, useEffect } from 'react';

export default function Product() {
        const [productsData, setProductsData] = useState([]);

        useEffect(() => {
                // Fetch product data from the API endpoint
                fetch('http://localhost:3002/api/getAllProduct')
                .then(response => response.json())
                .then(data => setProductsData(data))
                .catch(error => console.error('Error fetching product data:', error));
        }, []);

        return (
                <div className="product-container">
                        {productsData.map((product) => (
                                <div className="product-wrapped" key={product.id}>
                                        <div className="product-image">
                                                <img src={product.image} alt={product.name} style={{ borderRadius: '8px' }}/>
                                        </div>
                                        <div className='product-name-price' style={{ backgroundColor: '#F5F7FA', borderRadius: '8px', padding: '8px' }}>
                                                <h2 style={{ backgroundColor: '#F5F7FA'}}>{product.name}</h2>
                                                <h3 style={{ backgroundColor: '#F5F7FA'}}>${product.price}</h3>
                                                <a href={`/product/${product.id}`} className='next-button'>More</a>
                                        </div>
                                </div>
                        ))}                       
                </div>
        )
}