import { useState } from 'react';
import Breadcrumbs from "./components/Breadcrumbs";
import Container from "./components/Container";

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    address: '',
    phone_number: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault(); // Prevent default form submission
    
    fetch('http://localhost:3001/api/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        // Handle success
        console.log('User created successfully');
        window.location.href = 'http://localhost:3000/signin';
      } else {
        // Handle error
        console.error('Failed to create user:', response.statusText);
      }
    })
    .catch(error => {
      // Handle network error
      console.error('Error creating user:', error);
    });
  };
  
  

  return (
    <>
      <Breadcrumbs disabled />
      <Container>
        <div className="w-full flex flex-row justify-center items-center py-24">
          <div className="w-full lg:w-1/2 mx-auto flex flex-col items-center gap-5 bg-[#E1FAE2] border-2 border-green-700 rounded-lg p-10">
            <div className="text-3xl font-bold">Register</div>
              <form onSubmit={handleSignup} className="w-full flex flex-col items-center gap-5" method='POST'>
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  className="w-full lg:w-1/2 mx-auto p-2 border border-gray-300 rounded-lg"
                  value={formData.first_name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className="w-full lg:w-1/2 mx-auto p-2 border border-gray-300 rounded-lg"
                  value={formData.last_name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="w-full lg:w-1/2 mx-auto p-2 border border-gray-300 rounded-lg"
                  value={formData.username}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full lg:w-1/2 mx-auto p-2 border border-gray-300 rounded-lg"
                  value={formData.password}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="w-full lg:w-1/2 mx-auto p-2 border border-gray-300 rounded-lg"
                  value={formData.address}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="phone_number"
                  placeholder="Phone Number"
                  className="w-full lg:w-1/2 mx-auto p-2 border border-gray-300 rounded-lg"
                  value={formData.phone_number}
                  onChange={handleChange}
                />
                <button type="submit" className="px-10 py-2 bg-green-600 text-white rounded-lg">
                  Sign Up
                </button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;