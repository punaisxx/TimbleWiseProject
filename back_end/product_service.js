const app = require('express')();
const http = require('http').Server(app);

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://prmrkp999:CERkl4RvqEWWMbrb@product-data.jynchaz.mongodb.net/?retryWrites=true&w=majority&appName=product-data');

const User = require('./models/productModel');

// async function insert() {
//   await User.create({
//     id: '1',
//     name: 'Product 1',
//     description: 'Description of Product 1',
//     price: 10,
//     quantity: 8,
//     category: 'bedroom',
//     image: 'https://i.pinimg.com/564x/45/7d/f0/457df08493023582bff573790158c945.jpg'
//   });
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