import { useAuth } from '@/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = () => {
  const { loggedIn, checkingStatus } = useAuth();

  if (checkingStatus) return <div>Loading...</div>;

  return loggedIn ? <Outlet /> : <Navigate to="/signin" />;
};

export default AuthRoute;
