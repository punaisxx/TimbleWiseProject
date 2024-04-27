const app = require('express')();
const http = require('http').Server(app);

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://prmrkp999:CERkl4RvqEWWMbrb@product-data.jynchaz.mongodb.net/?retryWrites=true&w=majority&appName=product-data');

const User = require('./models/productModel');

// async function insert() {
//   await User.create({
//     "id": 1,
//     "name": "Product 1",
//     "description": "Description of Product 1",
//     "price": 10,
//     "quantity": 8,
//     "category": "bedroom",
//     "image": "https://i.pinimg.com/564x/45/7d/f0/457df08493023582bff573790158c945.jpg"
// },
// {
//     "id": 2,
//     "name": "Product 2",
//     "description": "Description of Product 2",
//     "price": 20,
//     "quantity": 2,
//     "category": "livingroom",
//     "image": "https://i.pinimg.com/564x/45/7d/f0/457df08493023582bff573790158c945.jpg"
// },
// {
//     "id": 3,
//     "name": "Product 3",
//     "description": "Description of Product 3",
//     "price": 20,
//     "quantity": 18,
//     "category": "restroom",
//     "image": "https://i.pinimg.com/564x/45/7d/f0/457df08493023582bff573790158c945.jpg"
// },
// {
//     "id": 4,
//     "name": "Product 4",
//     "description": "Description of Product 4",
//     "price": 20,
//     "quantity": 6,
//     "category": "other",
//     "image": "https://i.pinimg.com/564x/45/7d/f0/457df08493023582bff573790158c945.jpg"
// },
// {
//     "id": 5,
//     "name": "Product 5",
//     "description": "Description of Product 5",
//     "price": 40,
//     "quantity": 6,
//     "category": "bedroom",
//     "image": "https://i.pinimg.com/564x/45/7d/f0/457df08493023582bff573790158c945.jpg"
// },
// {
//     "id": 6,
//     "name": "Product 6",
//     "description": "Description of Product 6",
//     "price": 20,
//     "quantity": 9,
//     "category": "livingroom",
//     "image": "https://i.pinimg.com/564x/45/7d/f0/457df08493023582bff573790158c945.jpg"
// });
// }
// insert();

async function get() {
  try {
    const products = await User.find();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

app.get('/api/getAllProduct', async (req, res) => {
  try {
    const products = await get();
    res.json(products);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const run_port = 3002;
http.listen(run_port, function(){
  console.log(`Server is running at port ${run_port}`);
});