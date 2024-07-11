import { useState } from 'react';
import Background from './Background';
import Input from '../../components/Input';
import useLogin from '../../hooks/useLogin';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {loginUser} = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Submit');
  };

  const handleButtonClick = async () => {
    loginUser(email,password)
  };

  return (
    <div className="flex h-screen">
      <Background/>
      <div className="w-1/2 flex items-center justify-center p-6 bg-gray-100">
        <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <Input
                name = 'Email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                classname="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <Input
                type="password"
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                classname="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-orange-700 text-white rounded-md hover:bg-orange-500"
              onClick={handleButtonClick}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
