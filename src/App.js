import GlobalStyles from "./components/GlobalStyles";
import "./App.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import IndexLocations from "./components/IndexLocations/IndexLocations.js";

import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import ChangePassword from "./components/Auth/ChangePassword";
import SignOut from "./components/Auth/SignOut";
import About from "./components/About/About";

//TODO: import About from "./components/About/About";
import AuthenticatedRoute from "./components/AuthenticatedRoute/AuthenticatedRoute";
import AutoDismissAlert from "./components/AutoDismissAlert/AutoDismissAlert";

// import About from "./components/About/About";

const App = () => {
  const [user, setUser] = useState(null);
  const [alerts, setAlerts] = useState([]);
  alert = ({ heading, variant }) => {
    setAlerts([...alerts, { heading, variant }]);
  };

  return (
    <>
      <GlobalStyles />
      <Header user={user} />
      {alerts.map((alert, i) => (
        <AutoDismissAlert
          key={i}
          heading={alert.heading}
          variant={alert.variant}
        />
      ))}
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <IndexLocations user={user} alert={alert} />}
          />
          <Route exact path="/about" render={() => <About />} />
          <Route
            path="/sign-up"
            render={() => <SignUp alert={alert} setUser={setUser} />}
          />
          <Route
            path="/sign-in"
            render={() => <SignIn alert={alert} setUser={setUser} />}
          />
          <AuthenticatedRoute
            user={user}
            path="/sign-out"
            render={() => (
              <SignOut alert={alert} setUser={setUser} user={user} />
            )}
          />
          <AuthenticatedRoute
            user={user}
            path="/change-password"
            render={() => <ChangePassword alert={alert} user={user} />}
          />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default App;
