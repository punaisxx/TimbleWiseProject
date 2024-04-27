const app = require('express')();
const http = require('http').Server(app);

const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://prmrkp999:qGk321bHn87Cszr0@user-data.p7lir8s.mongodb.net/?retryWrites=true&w=majority&appName=user-data');

const User = require('./models/userModel');

async function insert() {
  await User.create({
    // id: '1',
    // name: 'Product 1',
    // description: 'Description of Product 1',
    // price: 10,
    // quantity: 8,
    // category: 'bedroom',
    // image: 'https://i.pinimg.com/564x/45/7d/f0/457df08493023582bff573790158c945.jpg'
  });
}
insert();

const run_port = 3001;
http.listen(run_port, function(){
  console.log(`Server is running at port ${run_port}`);
});