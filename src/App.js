import axios from "axios";
import GlobalStyles from "./components/GlobalStyles";
import "./App.css";
import react, { useEffect, useState, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import ReactMap from "./components/Maps/ReactMap";
import { v4 as uuid } from "uuid";
import ReactMapGL from "./components/Maps/ReactMapGL";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Faq from "./components/HomePage/Faq/Faq";
import HomePageBody from "./components/HomePage/HomePageBody/HomePageBody";
import Header from "./components/Nav/Header";
import BoroughSelector from "./components/Maps/BoroughSelector";
import SignUp from "./components/Credentials/SignUp/SignUp";
import SignIn from "./components/Credentials/SignIn/SignIn";
import apiUrl from "./components/API/apiConfig";
import AutoDismissAlert from "./components/AutoDismissAlert/Alert";

function App() {
  //! USESTATE

  //TODO:
  const [user, setStateUser] = useState(null);
  const [msgAlerts, setMsgAlerts] = useState([]);
  const [compostLocation, setCompostLocation] = useState(null);
  const [selectedBorough, setSelectedBorough] = useState("All");
  const [mapData, setMapData] = useState([]);
  const [viewport, setViewport] = useState({
    latitude: 40.7282,
    longitude: -73.7949,
    zoom: 9,
    width: "95vw",
    height: "60vh",
  });

  useEffect(() => {
    index(selectedBorough)
      .then((res) => setMapData(res.data.locations))
      .catch((err) => console.log(err));
  }, [selectedBorough]);

  //! FUNCTIONS

  const index = async (selectedBorough) => {
    return axios({
      method: "GET",
      url: apiUrl + "/locations/" + selectedBorough,
    });
  };

  return (
    <>
      <GlobalStyles />
      <header>
        <Header user={user} />
        {msgAlerts.map((msgAlert) => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
          />
        ))}
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <>
              <BoroughSelector
                setSelectedBorough={setSelectedBorough}
                setViewport={setViewport}
                viewport={viewport}
              />
              <ReactMapGL
                compostLocation={compostLocation}
                setCompostLocation={setCompostLocation}
                mapData={mapData}
                viewport={viewport}
                setViewport={setViewport}
                // user={user}
              />
              <HomePageBody />
              <Faq />
            </>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/sign-up">
            <SignUp
            // msgAlert={msgAlert} setUser={setUser}
            />
          </Route>
          <Route path="/sign-in">
            <SignIn
            // msgAlert={msgAlert} setUser={setUser}
            />
          </Route>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
