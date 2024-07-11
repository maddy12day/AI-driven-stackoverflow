import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const ProtectedLayout = ({ children, authentication = true }) => {
  const authStatus = useSelector((store) => store.user.status);
  const navigate = useNavigate();

  useEffect(() => {
    if (authentication) {
      if (authStatus !== true) {
        navigate('/', { replace: true });
      }
    } else {
      if (authStatus === true) {
        navigate('/home', { replace: true });
      }
    }
  }, [authStatus, authentication, navigate]);

  return <>{children}</>;
};

ProtectedLayout.propTypes = {
  children: PropTypes.node.isRequired,
  authentication: PropTypes.bool,
};

export default ProtectedLayout;
