import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/ayth/auth-selector';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? children : <Navigate to="/phonebook" />;
};
