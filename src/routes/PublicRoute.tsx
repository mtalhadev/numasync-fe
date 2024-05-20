// React Router
import { Navigate, Outlet, useLocation } from 'react-router-dom';

// data
import { LINKS } from 'src/data/links';

// Redux
import { useSelector } from 'react-redux';

// Types
import { AuthTypes } from 'src/types/authTypes';

const PublicRoute = () => {
  const user = useSelector((state: AuthTypes) => state.global.user);
  const location = useLocation();

  return <Outlet />;

  return user ? (
    <Navigate
      to={LINKS.DASHBOARD}
      replace
      state={{ path: location.pathname }}
    />
  ) : (
    <Outlet />
  );
};

export default PublicRoute;
