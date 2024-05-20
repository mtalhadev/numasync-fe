// React Router
import { Navigate, Outlet, useLocation } from 'react-router-dom';

// Components
import DashboardLayout from 'src/components/layout/DashboardLayout/DashboardLayout';

// data
import { LINKS } from 'src/data/links';

// Redux
import { useSelector } from 'react-redux';

// Types
import { AuthTypes } from 'src/types/authTypes';

const PrivateRoute = () => {
  const user = useSelector((state: AuthTypes) => state.global.user);
  const location = useLocation();

  return (
    // <DashboardLayout>
    <Outlet />
    // </DashboardLayout>
  );

  return user ? (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  ) : (
    <Navigate to={LINKS.LOGIN} replace state={{ path: location.pathname }} />
  );
};

export default PrivateRoute;
