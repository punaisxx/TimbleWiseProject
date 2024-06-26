import { useState } from 'react';
// import fs from 'fs';
import productsData from '../product/product_list';
import Header from '../components/Header';
import CommentContainer from '../components/CommentContainer';
import Container from '../components/Container';

export default function ProductDetailPage({ product }) {
    const [quantities, setQuantities] = useState({});

    const [comments, setComments] = useState([
        {
            name: "Red",
            description: "โต๊ะสวยมากกกกกกก"
        },
        {
            name: "Black",
            description: "โต๊ะสวยมากกกกกกก"
        },
        {
            name: "White",
            description: "โต๊ะสวยมากกกกกกก"
        },
    ])

    const handleComment = (newComment) => {
        setComments([...comments, newComment]);
    };

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

            <Container>
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

                <CommentContainer 
                    items={comments}
                    handleComment={handleComment}
                />
            </Container>

        </main>
        
    );
}

export async function getServerSideProps({ params }) {
    const productId = params.productId;
    // Fetch product data based on productId
    const product = productsData.find((p) => p.id === parseInt(productId));
    return {
        props: {
            product,
        },
    };
}
