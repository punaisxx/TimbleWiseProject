import { useState } from 'react';
// import fs from 'fs';
// import productsData from '../product/product_list';
import Header from '../components/Header';

export default function ProductDetailPage({ product }) {
    const [quantities, setQuantities] = useState({});

    const maxQuantity = product.quantity;

    const increaseQuantity = (productId) => {
        if ((quantities[productId] || 0) < maxQuantity) {
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [productId]: (prevQuantities[productId] || 0) + 1
            }));
        } 
    };

    const decreaseQuantity = (productId) => {
        if (quantities[productId] && quantities[productId] > 0) {
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [productId]: prevQuantities[productId] - 1
            }));
        }
    };

    return (
        <main>
            <Header />
            <div className="nvg" style={{ marginTop: '70px' }}>Web Application Name {'>'} Category {'>'} Product</div>
            <div className='detail-page'>
                <div className='product-image-detail-page'>
                    <img src={product.image} alt={product.name} />
                </div>
                <div className='description'>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <div className="quantity-controls">
                        <button onClick={() => decreaseQuantity(product.id)}>-</button>
                        <span>{quantities[product.id] || 0}</span>
                        <button onClick={() => increaseQuantity(product.id)}>+</button>
                    </div>
                    <div className="cart-buy-button">
                        <button className='add-to-cart'>Add to cart</button>
                        <span></span>
                        <a href="#" className="buy">Buy</a>

                    </div>
                </div>
        </div>

        </main>
        
    );
}

export async function getServerSideProps({ params }) {
    const productId = params.productId;
    try {
        const response = await fetch('http://localhost:3002/api/getAllProduct');
        if (!response.ok) {
            throw new Error('Failed to fetch product data');
        }
        
        const product = (await response.json()).find((p) => p.id == parseInt(productId));
        console.log();
        return {
            props: {
                product,
            },
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            props: {
                error: 'Error fetching product data',
            },
        };
    }
}
