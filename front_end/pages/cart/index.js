import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Order = ({ username,userData,token,productData }) => {
  const [cartItems, setCartItems] = React.useState([]);
  const user = userData.find(user => user.username === username);

  React.useEffect(() => {
    if (user) {
      setCartItems(user.cart);
    }
  }, [username, user]);

  const deleteFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.product_code !== productId);
    setCartItems(updatedCartItems);
    const user_editing_index = userData.findIndex(user => user.username === username);
    const product_editing_index = userData[user_editing_index].cart.findIndex(product => product.product_code===productId);
    userData[user_editing_index].cart=deleteByIndex(userData[user_editing_index].cart,product_editing_index);
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

  const increaseQuantity = (productId) => {
    var item_quantity=0;
    const updatedCartItems = cartItems.map(item => {
      if (item.product_code === productId) {
        item_quantity=item.quantity+1
        return { ...item, quantity: item_quantity};
        
      }
      return item;
    });
    setCartItems(updatedCartItems);
    const user_editing_index = userData.findIndex(user => user.username === username);
    const product_editing_index = userData[user_editing_index].cart.findIndex(product => product.product_code===productId);
    userData[user_editing_index].cart[product_editing_index].quantity=item_quantity;
    console.log(userData);
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

  const decreaseQuantity = (productId) => {
    var item_quantity=0;
    const updatedCartItems = cartItems.map(item => {
      if (item.product_code === productId) {
        item_quantity=item.quantity-1
        return { ...item, quantity: item_quantity};
        
      }
      return item;
    });
    setCartItems(updatedCartItems);
    const user_editing_index = userData.findIndex(user => user.username === username);
    const product_editing_index = userData[user_editing_index].cart.findIndex(product => product.product_code===productId);
    userData[user_editing_index].cart[product_editing_index].quantity=item_quantity;
    console.log(userData);
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
  const submitButton = () => {
    const user_editing_index = userData.findIndex(user => user.username === username);
    userData[user_editing_index].transactions.push(userData[user_editing_index].cart);
    userData[user_editing_index].cart=[];
    console.log(userData);
    fetch('http://localhost:3001/api/editProfile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token
      },
      body: JSON.stringify({
        cart: userData[user_editing_index].cart,
        transactions: userData[user_editing_index].transactions
      }),
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
    window.location.href = '/cart/payment';
  }
  console.log(productData);
  return (
    <><div className="mt-5 bg-gray-200 font-bold py-2 px-4 rounded">
      Cart
    </div>
    <div className="py-4">
      <div className="w-full flex flex-col lg:flex-row border border-[#103E13] gap-10 rounded-xl p-6 pb-16">
      <div className='order-summary-container'>
          {cartItems.map(cartItem => {
            const product = productData.find(product => product.id === cartItem.product_code);
            return (
              <div key={cartItem.product_code} className='order-item flex mt-5'>
                <div className="ml-5 order-item">
                  <img src={product.image} alt="Product" className="w-24 h-24 object-cover" />
                </div>
                <div className='ml-5 order-item'>Product: {product.name}</div>
                <div className='ml-5 order-item'>Price: ${product.price}</div>
                <div className="ml-5 quantity-controls h-[30px]">
                  <button onClick={() => decreaseQuantity(cartItem.product_code)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button onClick={() => increaseQuantity(cartItem.product_code)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <div>
                  <button className='trash-icon' onClick={() => deleteFromCart(cartItem.product_code)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>  
      </div>
      
      <div className='ml-[calc(100vw/2-150px)]'>
          <button onClick={() => submitButton()} className="w-[300px] mt-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Order
          </button>
        </div>
    </div></>
  );
};

export default Order;

export async function getServerSideProps({req}) {
  try {
    const token = req.cookies.token; // Retrieve token from request cookies
    var response = await fetch('http://localhost:3001/api/loginByToken', {
      headers: {
        'authorization': token // Pass token in the Authorization header
      }
    });
      
      const username = (await response.json()).username;
      
    response = await fetch('http://localhost:3001/api/getUserData', {
      headers: {
        'authorization': token // Pass token in the Authorization header
      }
    });
      
      const userData=await response.json();
    
      response = await fetch('http://localhost:3002/api/getAllProduct');
      
      const productData=await response.json();
      return {
        props: {
          username,
          userData,
          token,
          productData,
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

function deleteByIndex(arr, index) {
  if (index < 0 || index >= arr.length) {
    return arr; // Return the original array if index is out of range
  }
  return [...arr.slice(0, index), ...arr.slice(index + 1)]; // Return a new array without the element at the specified index
}