import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import { routes, competitionRoutes } from "./routes/routes";
import "./styles/base.scss";
import useGoogleAnalytics from "./shared/useAnalytics";

function Routes() {
  useGoogleAnalytics();
  return (
    <Switch>
      {routes.map((route) => (
        <AppRoute
          exact
          path={route.path}
          key={route.path}
          component={route.component}
        />
      ))}
      {competitionRoutes.map((route) => (
        <AppRoute
          exact
          path={route.path}
          key={route.path}
          component={route.component}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  );
}

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
