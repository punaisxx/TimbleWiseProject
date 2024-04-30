const app = require('express')();
const express = require('express');
const http = require('http').Server(app);
const cors = require('cors');


app.use(cors());

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://prmrkp999:CERkl4RvqEWWMbrb@product-data.jynchaz.mongodb.net/?retryWrites=true&w=majority&appName=product-data');

const User = require('./models/productModel');


app.use(express.json());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Allow requests from http://localhost:3000
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Allow specific HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
  res.setHeader('Access-Control-Allow-Credentials', true); // Allow credentials (if required)
  next();
});
async function insert(run) {
  if (!run) {return;}
  await User.create({
    "id": 'prod0001',
    "name": "Product 1",
    "description": "Description of Product 1",
    "price": 10,
    "quantity": 8,
    "category": "bedroom",
    "image": "https://i.pinimg.com/564x/45/7d/f0/457df08493023582bff573790158c945.jpg",
    "comment":[
      {
        "comment_string":"ดี",
        "username":"alicej"
      }
    ]
},
{
    "id": 'prod0002',
    "name": "Product 2",
    "description": "Description of Product 2",
    "price": 20,
    "quantity": 2,
    "category": "livingroom",
    "image": "https://i.pinimg.com/564x/45/7d/f0/457df08493023582bff573790158c945.jpg",
    "comment":[
      {
        "comment_string":"ดี",
        "username":"bobsmith"
      }
    ]
},
{
    "id": 'prod0003',
    "name": "Product 3",
    "description": "Description of Product 3",
    "price": 20,
    "quantity": 18,
    "category": "restroom",
    "image": "https://i.pinimg.com/564x/45/7d/f0/457df08493023582bff573790158c945.jpg",
    "comment":[
      {
        "comment_string":"ดี",
        "username":"evachen"
      }
    ]
},
{
    "id": 'prod0004',
    "name": "Product 4",
    "description": "Description of Product 4",
    "price": 20,
    "quantity": 6,
    "category": "other",
    "image": "https://i.pinimg.com/564x/45/7d/f0/457df08493023582bff573790158c945.jpg",
    "comment":[
      {
        "comment_string":"ดี",
        "username":"evachen"
      }
    ]
},
{
    "id": 'prod0005',
    "name": "Product 5",
    "description": "Description of Product 5",
    "price": 40,
    "quantity": 6,
    "category": "bedroom",
    "image": "https://i.pinimg.com/564x/45/7d/f0/457df08493023582bff573790158c945.jpg",
    "comment":[
      {
        "comment_string":"ดี",
        "username":"evachen"
      }
    ]
},
{
    "id": 'prod0006',
    "name": "Product 6",
    "description": "Description of Product 6",
    "price": 20,
    "quantity": 9,
    "category": "livingroom",
    "image": "https://i.pinimg.com/564x/45/7d/f0/457df08493023582bff573790158c945.jpg",
    "comment":[
      {
        "comment_string":"ดี",
        "username":"sophiag"
      },
      {
        "comment_string":"ไม่ดี",
        "username":"dbrown"
      },
      {
        "comment_string":"เยียม",
        "username":"evachen"
      }
    ]
});
}
insert(0);

app.post('/api/editProfile', editProfile, async (req, res) => {
  try {
    res.status(201).json({ message: 'edited profile' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

async function editProfile(req, res, next) {
  console.log(req.body);
  try {
    const updatedUser = await User.findOneAndUpdate(
      { id: req.body.product_id }, // Filter: Find the user by their username
      { comment: req.body.comment }, // Update: Set the comment to the new value
      { new: true } // Options: Return the modified document
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // If you have additional logic to execute after updating the user, you can put it here

    next();
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}



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