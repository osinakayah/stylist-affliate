import React, { Suspense} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './authRoutes'
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

  return (
      <BrowserRouter>
          <div>
              <Suspense fallback={<CustomLoader/>}>
                  <Switch>
                      {authRoutes}
                  </Switch>
              </Suspense>
          </div>
      </BrowserRouter>
  );
}

export default App;


