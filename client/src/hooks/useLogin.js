import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addUserData } from '../Store/userSlice';
import { URL } from '../utils/constant';

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = async (email, password) => {
    const body = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(URL + '/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      dispatch(addUserData(data.status));
      sessionStorage.setItem('auth', JSON.stringify(data.status));
      navigate('/home');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const storedAuth = sessionStorage.getItem('auth');
    if (storedAuth) {
      const authData = JSON.parse(storedAuth);
      dispatch(addUserData(authData));
      navigate('/home');
    }
  }, [dispatch, navigate]);

  return { loginUser };
};

export default useLogin;
