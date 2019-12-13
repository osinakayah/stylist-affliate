import React, { Suspense} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from './routes/authRoutes'
import pRoutes from './routes/protectedRoutes'
import unRoutes from './routes/unprotectedRoutes';
import CustomLoader from './components/commons/CustomLoader';
import PrivateRoute from './routes/PrivateRoute'


const App: React.FC = () => {
    const authRoutes = routes.map((route, index) => {
        return (route.component) ? (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component} />
        ) : (null);
    });
    const unprotectedRoutes = unRoutes.map((route, index) => {
        return (route.component) ? (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component} />
        ) : (null);
    });
    const protectedRoutes = pRoutes.map((route, index) => {
        return (route.component) ? (
            <PrivateRoute
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                component={route.component}
            />
        ) : (null);
    });

  return (
      <BrowserRouter>
          <div>
              <Suspense fallback={<CustomLoader/>}>
                  <Switch>
                      {authRoutes.concat(protectedRoutes, unprotectedRoutes)}
                  </Switch>
              </Suspense>
          </div>
      </BrowserRouter>
  );
}

export default App;


