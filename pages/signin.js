import { useState } from 'react';
import Breadcrumbs from "./components/Breadcrumbs";
import Container from "./components/Container";

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <>
      <Breadcrumbs disabled />
      <Container>
        <div className="w-full flex flex-row justify-center items-center py-24">
          <div className="w-full lg:w-1/2 mx-auto flex flex-col items-center gap-10 bg-[#E1FAE2] border-2 border-green-700 rounded-lg p-16">
            <div className="text-3xl font-bold">LOGIN</div>
            <input
              type="text"
              placeholder="Username"
              className="w-full lg:w-1/2 mx-auto p-2 border border-gray-300 rounded-lg"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full lg:w-1/2 mx-auto p-2 border border-gray-300 rounded-lg"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              className="px-10 py-2 bg-green-600 text-white rounded-lg"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signin;
