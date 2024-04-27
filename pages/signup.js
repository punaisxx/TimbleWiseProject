import { useState } from 'react';
import Breadcrumbs from "./components/Breadcrumbs";
import Container from "./components/Container";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
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

  const handleSignup = () => {
    console.log(formData);
  };

  return (
    <>
      <Breadcrumbs disabled />
      <Container>
        <div className="w-full flex flex-row justify-center items-center py-24">
          <div className="w-full lg:w-1/2 mx-auto flex flex-col items-center gap-5 bg-[#E1FAE2] border-2 border-green-700 rounded-lg p-10">
            <div className="text-3xl font-bold">Register</div>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="w-full lg:w-1/2 mx-auto p-2 border border-gray-300 rounded-lg"
              value={formData.firstname}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="w-full lg:w-1/2 mx-auto p-2 border border-gray-300 rounded-lg"
              value={formData.lastname}
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
            <button
              className="px-10 py-2 bg-green-600 text-white rounded-lg"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
