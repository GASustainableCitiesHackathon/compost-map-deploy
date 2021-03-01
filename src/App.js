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

//TODO: import About from "./components/About/About";
//TODO: import AuthenticatedRoute from "./components/AuthenticatedRoute/AuthenticatedRoute";
//TODO: import AutoDismissAlert from "./components/AutoDismissAlert/AutoDismissAlert";
//TODO: import Header from "./components/Header/Header";
//TODO: import SignUp from "./components/SignUp/SignUp";
//TODO: import SignIn from "./components/SignIn/SignIn";
//TODO: import SignOut from "./components/SignOut/SignOut";
//TODO: import ChangePassword from "./components/ChangePassword/ChangePassword";
//TODO: import Faq from "./components/Faq/Faq";
//TODO: import Footer from "./components/Footer/Footer";

function App() {
  //! USESTATE

  //TODO:
  const [user, setStateUser] = useState(null);
  // const [msgAlerts, setMsgAlerts] = useState([])
  // TODO: const [selectedBorough, setSelectedBorough] = useState("")
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

  //! USEEFFECTS
  // useEffect(() => {
  //     fetchData()
  //     console.log(mapData[0])
  // }, [])

  useEffect(() => {
    index(selectedBorough)
      .then((res) => setMapData(res.data.locations))
      .catch((err) => console.log(err));
  }, [selectedBorough]);

  //! FUNCTIONS
  const fetchData = async () => {
    const data = await axios(
      "https://data.cityofnewyork.us/resource/if26-z6xq.json"
    );
    setMapData(data.data);
  };

  const index = async (selectedBorough) => {
    return axios({
      method: "GET",
      url: apiUrl + "/locations/" + selectedBorough,
    });
  };

  //? BackEnd:
  //TODO: const setUser = (user) => setStateUser({ user });
  //TODO: const clearUser = () => setStateUser({ user: null });

  //TODO: const deleteAlert = (id) => {
  //TODO:         return { msgAlerts: msgAlerts.filter((msg) => msg.id !== id) };
  //TODO: };

  //TODO: const msgAlert = ({ heading, message, variant }) => {
  //TODO:     const id = uuid();
  //TODO:     return {setMsgAlerts([...msgAlerts, { heading, message, variant, id }],)};
  //TODO:     };

  return (
    <>
      <GlobalStyles />
      <nav>
        <Header user={user} />
      </nav>
      <header>
        {/* //! HEADER 
            <Header user={user} />
                {msgAlerts.map((msgAlert) => (
                    <AutoDismissAlert
                        key={msgAlert.id}
                        heading={msgAlert.heading}
                        variant={msgAlert.variant}
                        message={msgAlert.message}
                        id={msgAlert.id}
                        deleteAlert={this.deleteAlert}
                    />
                ))} */}
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
