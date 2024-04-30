const express = require('express');
const app = express();
const http = require('http').Server(app);
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://prmrkp999:qGk321bHn87Cszr0@user-data.p7lir8s.mongodb.net/?retryWrites=true&w=majority&appName=user-data');

const User = require('./models/userModel');

async function insert(run) {
  if (!run) {return;}
  await User.create({
                "first_name": "Alice",
                "last_name": "Johnson",
                "address": "789 Elm St, Townsville, Country",
                "phone_number": "555-123-4567",
                "username": "alicej",
                "password": "pass123",
                "status": "general",
                "transactions": [],
                "cart": [{
                  "product_code":"prod0003",
                  "quantity":1
                },
                {
                  "product_code":"prod0005",
                  "quantity":2
                }]
        },
        {
                "first_name": "Bob",
                "last_name": "Smith",
                "address": "321 Maple Ave, Cityville, Country",
                "phone_number": "555-987-6543",
                "username": "bobsmith",
                "password": "bobpassword",
                "status": "general",
                "transactions": [],
                "cart": [{
                  "product_code":"prod0001",
                  "quantity":1
                },
                {
                  "product_code":"prod0004",
                  "quantity":2
                }]
        },
        {
                "first_name": "Eva",
                "last_name": "Chen",
                "address": "456 Pine St, Villagetown, Country",
                "phone_number": "555-222-3333",
                "username": "evachen",
                "password": "eva123",
                "status": "general",
                "transactions": [],
                "cart": [{
                  "product_code":"prod0002",
                  "quantity":1
                },
                {
                  "product_code":"prod0003",
                  "quantity":2
                },
                {
                  "product_code":"prod0005",
                  "quantity":2
                }]
        },
        {
                "first_name": "David",
                "last_name": "Brown",
                "address": "987 Cedar Dr, Countryville, Country",
                "phone_number": "555-444-5555",
                "username": "dbrown",
                "password": "davidpass",
                "status": "general",
                "transactions": [],
                "cart": []
        },
        {
                "first_name": "Sophia",
                "last_name": "Garcia",
                "address": "654 Oak Lane, Suburbia, Country",
                "phone_number": "555-777-8888",
                "username": "sophiag",
                "password": "sophia456",
                "status": "general",
                "transactions": [],
                "cart": [{
                  "product_code":"prod0001",
                  "quantity":1
                },
                {
                  "product_code":"prod0004",
                  "quantity":2
                },
                {
                  "product_code":"prod0005",
                  "quantity":3
                }]
        },
        {
                "first_name": "minnie",
                "last_name": "and friends",
                "address": "654 Oak Lane, Suburbia, Country",
                "phone_number": "555-777-8888",
                "username": "minnie999",
                "password": "minnie123",
                "status": "admin"
        });
}
insert(0);

async function createUser(user) {
  await User.create(user);
}

app.use(express.json());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Allow requests from http://localhost:3000
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Allow specific HTTP methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
  res.setHeader('Access-Control-Allow-Credentials', true); // Allow credentials (if required)
  next();
});

app.post('/api/createUser', async (req, res) => {
  try {
    var user = req.body
    if (await havedUser(user.username)){
      res.status(300).json({ message: 'Already have this username' });
      return;
    }
    user.status="general"
    await createUser(user);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const isValidCredentials = await LoginAble(username, password);
    if (isValidCredentials) {
      res.status(200).json({ 
        success: true,
        message: 'Login successful', 
        token: getBuildedToken((await getuserIfLoginAble(username, password)).username) 
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Invalid username or password'
      });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/loginByToken', authenticateToken, (req, res) => {
  try {
    res.status(201).json({ message: 'logined ByToken' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/editProfile', editProfile, (req, res) => {
  try {
    res.status(201).json({ message: 'edited profile' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/getUserData', getUserData, (req, res) => {
  try {
    res.status(201).json({ message: 'getedUser profile' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const run_port = 3001;
http.listen(run_port, function(){
  console.log(`Server is running at port ${run_port}`);
});

async function getAllUser() {
  return await User.find();
}

function getUserData(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  jwt.verify(token, 'your_secret_key_here', async (err, decoded) => {
    
    if (err) {
      return res.status(403).json({ message: 'Invalid token.' });
    }
    req.user = decoded;
    return res.status(200).json(await getAllUser());
    next();
  });
}

async function LoginAble(username,password) {
  return !!((await getAllUser()).find(user => user.username === username && user.password === password));
}

async function getuserIfLoginAble(username,password) {
  const user=(await getAllUser()).find(user => user.username === username && user.password === password);
  if (!user) {
    return "wrong data login user.";
  }
  return user;
}

function getBuildedToken(userId) {
  const token = jwt.sign({ userId: userId }, 'your_secret_key_here', { expiresIn: '1h' });
  return token;
}

function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  jwt.verify(token, 'your_secret_key_here', (err, decoded) => {
    
    if (err) {
      return res.status(403).json({ message: 'Invalid token.' });
    }
    req.user = decoded;
    return res.status(200).json({ username: req.user.userId });
    next();
  });
}

async function havedUser(username) {
  return (await getAllUser()).find(user => user.username === username)!=undefined;
}

function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, 'your_secret_key_here', (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
}

function editProfile(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  verifyToken(token)
    .then(decoded => {
      const username = decoded.userId;
      return User.findOneAndUpdate(
        { username: username }, // Filter: Find the user by their username
        req.body, // Update: Set the password to the new value
        { new: true } // Options: Return the modified document
      );
    })
    .then(updatedUser => {
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found.' });
      }
      // Optionally, you can send a response indicating success
      res.status(200).json({ message: 'Password updated successfully.', user: updatedUser });
    })
    .catch(err => {
      return res.status(500).json({ message: 'Internal server error.' });
    });
}
