import ReactMap from "./ReactMap";
import React, { useState, useEffect } from "react";
import { index } from "../../api/location";
import ReactMapGL from "./ReactMapGL";
import BoroughSelector from "./BoroughSelector";
import Story from "../Story";

const IndexLocations = ({ user, alert }) => {
  const [borough, setBrorough] = useState("Manhattan");
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
      <BoroughSelector setBrorough={setBrorough} viewport={viewport} />
      <ReactMapGL
        borough={borough}
        pin={pin}
        setPin={setPin}
        mapData={mapData}
        setMapData={setMapData}
        viewport={viewport}
        setViewport={setViewport}
        user={user}
        alert={alert}
      />
      <Story />
    </>
  );
};

export default IndexLocations;
