import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { map } from "lodash";

import routes from "./routes";

import Loading from "../screens/components/Loading/Loading.jsx";

export default function Navigation() {
  return (
    <Router>
      {/* ===== RUTAS APP ===== */}
      <Switch>
        <Redirect exact from="/" to="/index" />
        {map(routes, (route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <React.Suspense fallback={<Loading />}>
                <route.component {...props} />
              </React.Suspense>
            )}
          ></Route>
        ))}
      </Switch>
    </Router>
  );
}
