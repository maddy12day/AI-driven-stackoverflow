import { Navigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addUserData } from '../Store/userSlice';


const PublicRoute = () => {
  const dispatch = useDispatch();
  const userCred = useSelector((store) => store.user.userData);

  useEffect(() => {
    if (!userCred) {
      const userData = sessionStorage.getItem('user');
      if (userData) {
        dispatch(addUserData(JSON.parse(userData)));
      }
    }
  }, [dispatch, userCred]);

  return userCred ? <Navigate to="/browse" /> : <Outlet />;
};

export default PublicRoute;
