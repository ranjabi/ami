import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import { isGameOpen } from "./Pages/Game/data";
import { routes, competitionRoutes, petaRoutes, petaComponent, gamesRoutes, jelajahRoutes } from "./routes/routes";
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
      {isGameOpen && gamesRoutes.map((route) => (
        <AppRoute
          exact
          path={route.path}
          key={route.path}
          component={route.component}
        />
      ))}
      {petaRoutes.map((route, index) => (
        <AppRoute
          exact
          path={route.path}
          key={route.path}
          component={petaComponent}
          customProps={{pos: index+1}}
        />
      ))}
      {jelajahRoutes.map((route, index) => (
        <AppRoute
          exact
          path={route.path}
          key={route.path}
          component={route.component}
          customProps={{pos: index+1}}
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
