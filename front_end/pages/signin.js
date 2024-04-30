import { useState } from 'react';
import Breadcrumbs from "./components/Breadcrumbs";
import Container from "./components/Container";

const Signin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(formData);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(async (response) => { // Make the callback async
      if (response.ok) {
        // Handle success
        console.log('User login successfully');
        const responseData = await response.json(); // Parse JSON once
        console.log(responseData.token);
        // Set the token as a cookie
        document.cookie = `token=${encodeURIComponent(responseData.token)}; path=/`;
        // localStorage.setItem('token', responseData.token);
        if (formData.username==="minnie999") {
          window.location.href = 'http://localhost:3000/admin/dashboard';
          return;
        }
        window.location.href = 'http://localhost:3000/home';
      } else {
        // Handle error
        console.error('Failed to login user:', response.statusText);
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
          <div className="w-full lg:w-1/2 mx-auto flex flex-col items-center gap-10 bg-[#E1FAE2] border-2 border-green-700 rounded-lg p-16">
            <div className="text-3xl font-bold">LOGIN</div>
            <form onSubmit={handleLogin} className="w-full flex flex-col items-center gap-5" method='POST'>
              <input
                type="text"
                name='username'
                placeholder="Username"
                className="w-full lg:w-1/2 mx-auto p-2 border border-gray-300 rounded-lg"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                type="password"
                name='password'
                placeholder="Password"
                className="w-full lg:w-1/2 mx-auto p-2 border border-gray-300 rounded-lg"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                className="px-10 py-2 bg-green-600 text-white rounded-lg"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signin;
