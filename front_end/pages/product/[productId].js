import { useState } from 'react';
import Header from '../components/Header';

export default function ProductDetailPage({ product,token,userData,username }) {
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

    const addToCart = (productId) => {
        const user_editing_index = userData.findIndex(user => user.username === username);
        userData[user_editing_index].cart.push(
            {
                "product_code":productId,
                "quantity":quantities[productId]
            }
        );
        fetch('http://localhost:3001/api/editProfile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'authorization': token
          },
          body: JSON.stringify({cart: userData[user_editing_index].cart}),
        })
        .then(response => {
          if (response.ok) {
            // Handle success
            console.log('User edit successfully');
          } else {
            // Handle error
            console.error('Failed to edit user:', response.statusText);
          }
        })
        .catch(error => {
          // Handle network error
          console.error('Error edit user:', error);
        });
    };

    const sendcomment = (productId,comment) => {
        console.log(productId,comment);
        console.log(product.comment);
        console.log({
            product_id: productId,
            comment: product.comment
        });
        product.comment.push(
            {
                "comment_string":comment,
                "username":username
            }
        );
        fetch('http://localhost:3002/api/editProfile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            product_id: productId,
            comment: product.comment
        }),
        })
        .then(response => {
          if (response.ok) {
            // Handle success
            console.log('product edit successfully');
          } else {
            // Handle error
            console.error('Failed to edit product:', response.statusText);
          }
        })
        .catch(error => {
          // Handle network error
          console.error('Error edit user:', error);
        });
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
                        <button className='add-to-cart' onClick={() => addToCart(product.id)}>Add to cart</button>
                        <span></span>
                        <a href="#" className="buy">Buy</a>
                    </div>
                </div>
        </div>
        <div className='ml-[100px]'>
            <input placeholder="Comment here" type='text' name='comment'/>
            <button className='bg-green-500 rounded-md text-white w-[200px] h-10 ml-5' onClick={() => sendcomment(product.id, document.getElementsByName('comment')[0].value)}>Send comment to admin</button>
        </div>
        </main>
        
    );
}

export async function getServerSideProps({ params,req }) {
    const productId = params.productId;
    try {
        var response = await fetch('http://localhost:3002/api/getAllProduct');
        if (!response.ok) {
            throw new Error('Failed to fetch product data');
        }
        
        const product = (await response.json()).find((p) => p.id == productId);

        const token = req.cookies.token;

        response = await fetch('http://localhost:3001/api/getUserData', {
            headers: {
              'authorization': token // Pass token in the Authorization header
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch product data');
        }
        
        const userData = await response.json();

        var response = await fetch('http://localhost:3001/api/loginByToken', {
          headers: {
            'authorization': token // Pass token in the Authorization header
          }
        });
          
        const username = (await response.json()).username;

        return {
            props: {
                product,
                token,
                userData,
                username,
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
