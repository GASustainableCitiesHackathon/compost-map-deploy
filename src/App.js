import ReactMap from "./components/Maps/ReactMap";
import GlobalStyles from "./components/GlobalStyles";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { index } from "./api/location";
import ReactMapGL from "./components/Maps/ReactMapGL";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import IndexLocations from "./components/Maps/IndexLocations";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import ChangePassword from "./components/Auth/ChangePassword";
import SignOut from "./components/Auth/SignOut";
import About from "./components/About/About";
import Story from "./components/Story";
import AuthenticatedRoute from "./components/AuthenticatedRoute.js/AuthenticatedRoute";
import AutoDismissAlert from "./components/AutoDismissAlert/AutoDismissAlert";
import BoroughSelector from "./components/Maps/BoroughSelector";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const alert = ({ heading, variant }) =>
    setAlerts([...alerts, { heading, variant }]);
  const [borough, setBrorough] = useState("All");
  const [pin, setPin] = useState(null);
  const [mapData, setMapData] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: 40.7282,
    longitude: -73.7949,
    zoom: 9,
    width: "95vw",
    height: "60vh",
  });

  useEffect(() => {
    index(borough)
      .then((res) => setMapData(res.data.locations))
      .catch((err) => console.log(err));
  }, [borough]);

  // Causes PopUp menu to close on KeyDown of escape button
  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") setPin(null);
    };
    window.addEventListener("keydown", listener);
    // CleanUp Function to remove escape from always making Popup null
    return () => window.removeEventListener("keydown", listener);
  }, []);

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
        <IndexLocations user={user} alert={alert} />
        {/* <BoroughSelector setBrorough={setBrorough} viewport={viewport} />
        <ReactMapGL
          pin={pin}
          setPin={setPin}
          mapData={mapData}
          setMapData={setMapData}
          viewport={viewport}
          setViewport={setViewport}
          borough={borough}
          user={user}
          alert={alert}
        /> */}
        <Switch>
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
          <Route exact path="/" render={() => <Story />} />
          <Route path="/about" render={() => <About />} />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default App;
