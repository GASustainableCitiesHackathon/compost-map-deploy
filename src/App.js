import GlobalStyles from "./components/GlobalStyles";
import React, { useState, useEffect, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import { index } from "./api/location";
import ReactMapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";
import styled from "styled-components";
import Geocoder from "react-map-gl-geocoder";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
// import IndexLocations from "./components/IndexLocations/IndexLocations.js";

import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import ChangePassword from "./components/Auth/ChangePassword";
import SignOut from "./components/Auth/SignOut";
import About from "./components/About/About";
import Story from "./components/Story";
import LocationCard from "./components/Maps/LocationCard";

import AuthenticatedRoute from "./components/AuthenticatedRoute/AuthenticatedRoute";
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
  const [image, setImage] = useState(Math.floor(Math.random() * 9));
  const [phone, setPhone] = useState([
    Math.floor(Math.random() * 999),
    Math.floor(Math.random() * 9999),
  ]);
  const [viewport, setViewport] = useState({
    latitude: 40.7282,
    longitude: -73.7949,
    zoom: 9,
    width: "95vw",
    height: "60vh",
  });
  const mapRef = useRef();

  // Causes PopUp menu to close on KeyDown of escape button
  const randomize = () => {
    setImage(Math.floor(Math.random() * 9));
    setPhone([
      Math.floor(Math.random() * 999),
      Math.floor(Math.random() * 9999),
    ]);
  };

  useEffect(() => {
    randomize();
    const listener = (e) => {
      if (e.key === "Escape") setPin(null);
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  useEffect(() => {
    index(borough)
      .then((res) => setMapData(res.data.locations))
      .catch((err) => console.log(err));
  }, [borough]);

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
        <BoroughSelector setBrorough={setBrorough} viewport={viewport} />
        <div
          style={{ display: "flex", justifyContent: "center", padding: "10px" }}
        >
          {/* <Nav
            selectedBorough={selectedBorough}
            setViewport={setViewport}
            viewport={viewport}
          /> */}
          <MapBox>
            <ReactMapGL
              ref={mapRef}
              {...viewport}
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              onViewportChange={(viewport) => {
                setViewport(viewport);
              }}
              mapStyle="mapbox://styles/taaseen71/ckleb8llf0zv817lk5y1asq7s"
            >
              {mapData.map((pin, i) => {
                return (
                  <Marker
                    key={pin._id}
                    latitude={pin.latitude}
                    longitude={pin.longitude}
                  >
                    <div>
                      <DroppedPin
                        onClick={(e) => {
                          e.preventDefault();
                          setPin(pin);
                          randomize();
                        }}
                      >
                        <DroppedPinImage
                          src="./icons/map-icon.svg"
                          alt="Marker Icon"
                        />
                      </DroppedPin>
                    </div>
                  </Marker>
                );
              })}
              <Geocoder
                position="top-left"
                mapRef={mapRef}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              />
              <GeolocateControl
                style={{ right: 10, top: 10, zoom: 1 }}
                positionOptions={{ enableHighAccuracy: true }}
                trackUserLocation={true}
                fitBoundsOptions={{ maxZoom: 12 }}
                showAccuracyCircle={true}
              />
              {pin && (
                <Popup
                  user={user}
                  closeOnClick={false}
                  closeButton={true}
                  onClick={() => {
                    randomize();
                  }}
                  latitude={pin.latitude}
                  longitude={pin.longitude}
                  onClose={() => setPin(null)}
                >
                  <LocationCard
                    user={user}
                    alert={alert}
                    pin={pin}
                    phone={phone}
                    image={image}
                  />
                </Popup>
              )}
            </ReactMapGL>
          </MapBox>
        </div>
        <Switch>
          <Route exact path="/" render={() => <Story />} />
          <Route path="/about" render={() => <About />} />
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

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  /* margin-bottom: 5rem; */
`;

const MapBox = styled.div`
  display: flex;
  justify-content: center;
  /* padding-top: 5vh;  */
`;

const DroppedPin = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
const DroppedPinImage = styled.img`
  width: 20px;
  height: 20px;
`;

export default App;
