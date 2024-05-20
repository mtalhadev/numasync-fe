import { Route } from 'react-router-dom';
import { RouteTypes } from 'src/types/commonTypes';

export const buildRoutes = (routes: RouteTypes[]) => {
  return routes.map(route => {
    return (
      <Route key={route.path} path={route.path} element={route.page}>
        {route.children ? buildRoutes(route.children) : null}
      </Route>
    );
  });
};
