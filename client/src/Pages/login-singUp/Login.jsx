import { useEffect, useState } from 'react';
import { URL } from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { addUserData } from '../../Store/userSlice';
import Background from './Background';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleButtonClick = async () => {
    const body = {
      email: email,
      password: password
    };
  
    try {
      const response = await fetch( URL + '/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
  
      const data = await response.json();
      dispatch(addUserData(data));
      sessionStorage.setItem('user', JSON.stringify(data));
      navigate('/browse')
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const userData = sessionStorage.getItem('user');
    if (userData) {
      dispatch(addUserData(JSON.parse(userData)));
    }
  }, [dispatch]);

  return (
    <div className="flex h-screen">
      <Background/>
      <div className="w-1/2 flex items-center justify-center p-6 bg-gray-100">
        <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md"
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
