// React Router
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

// Routes
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { OtherRoutes, PrivateRoutes, PublicRoutes } from './RoutesPaths';

// Animate Presence
import { AnimatePresence } from 'framer-motion';
import { buildRoutes } from 'src/utils/routeBuilder';
import DashboardLayout from 'src/components/layout/DashboardLayout/DashboardLayout';

const RoutesComponent = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route element={<PublicRoute />}>{buildRoutes(PublicRoutes)}</Route>

        <Route element={<PrivateRoute />}>{buildRoutes(PrivateRoutes)}</Route>

        {OtherRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.page} />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <DashboardLayout>
          <RoutesComponent />
        </DashboardLayout>
      </BrowserRouter>
    </>
  );
};

export default Routing;
