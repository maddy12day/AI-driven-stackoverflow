import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';

const ProtectedLayout = ({ children, authentication = true }) => {
  const authStatus = useSelector((store) => store.user.status);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedPath = sessionStorage.getItem('currentPath');
    if (storedPath && authStatus === authentication) {
      navigate(storedPath);
    } else if (!authentication && authStatus !== authentication) {
      navigate('/home');
    }
  }, [authStatus, authentication, navigate]);

  useEffect(() => {
    if (authStatus === authentication) {
      sessionStorage.setItem('currentPath', location.pathname);
    }
  }, [location.pathname, authStatus, authentication]);

  return <>{children}</>;
};

ProtectedLayout.propTypes = {
  children: PropTypes.node.isRequired,
  authentication: PropTypes.bool,
};

export default ProtectedLayout;
