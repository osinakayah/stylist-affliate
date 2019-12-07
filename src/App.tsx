import React, { Suspense} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from './authRoutes'
import pRoutes from './protectedRoutes'
import CustomLoader from './commons/CustomLoader';


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
    const protectedRoutes = pRoutes.map((route, index) => {
        return (route.component) ? (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component} />
        ) : (null);
    });
    const appRoutes = [...authRoutes, ...protectedRoutes];
  return (
      <BrowserRouter>
          <div>
              <Suspense fallback={<CustomLoader/>}>
                  <Switch>
                      {appRoutes}
                  </Switch>
              </Suspense>
          </div>

      </BrowserRouter>
  );
}

export default App;


