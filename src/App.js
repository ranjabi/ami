import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import { routes, competitionRoutes } from "./routes/routes";
import "./styles/base.scss";

class _ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}
const ScrollToTop = withRouter(_ScrollToTop);

function App() {
  return (
    <Router>
      <ScrollToTop>
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
      </ScrollToTop>
    </Router>
  );
}

export default App;
