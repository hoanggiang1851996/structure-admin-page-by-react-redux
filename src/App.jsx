import React from 'react';
import './App.css';
import _ from 'lodash';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import PrivateLayout from './Layouts/PrivateLayout';
import PublicLayout from './Layouts/PublicLayout';
import fakeAuth from "./Utils/Auth/Auth";
import PageNotFound from "./Pages/NotFoundPage/PageNotFound";
import config from './Store/configureStore';

import { Provider } from 'react-redux';

const store = config();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>

          {_.map(PrivateRoute, (route) => {
            const {component, path} = route;
            return (
              <Route
                exact
                key
                path={path}
                render={(route) =>
                  fakeAuth.getToken() !== 'ok' ? (<Redirect to={'/auth/login'}/>) :
                    (<PrivateLayout component={component} route={route}/>)}
              />
            );
          })}

          {_.map(PublicRoute, (route) => {
            const {component, path} = route;
            return (
              <Route
                exact
                key
                path={path}
                render={(route) =>
                  fakeAuth.getToken() === 'ok' ? (<Redirect to={'/'}/>) :
                    (<PublicLayout component={component} route={route}/>)}
              />
            );
          })}

          <Route component={PageNotFound}/>

        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
