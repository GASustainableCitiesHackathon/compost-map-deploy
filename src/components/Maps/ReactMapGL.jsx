import React, { useEffect, useState, useRef } from "react";
import { index } from "../../api/location"
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";
import Geocoder from 'react-map-gl-geocoder'
import LocationCard from './LocationCard'
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import MapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";
// import MarkerIcon from "./Marker-Icon.svg"
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
MapGL.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const ReactMapGL = ({
    pin,
    setPin,
    mapData,
    setMapData,
    borough,
    viewport,
    setViewport,
    user,
    msgAlert
}) => {

    const [randomNumber, setRandomNumber] = useState([])
    const [randomImage, setRandomImage] = useState("")

    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setPin(null)
            }
        }
        window.addEventListener("keydown", listener)
    }, [])

    useEffect(() => {
        getRandomInt();
        getRandomImage();
    }, [])

    const getRandomInt = () => {
        const num1 = Math.floor(Math.random() * 999)
        const num2 = Math.floor(Math.random() * 9999)
        return setRandomNumber([num1, num2])
    }

    const getRandomImage = () => {
        return setRandomImage(Math.floor(Math.random() * 9))
    }

    const mapRef = useRef()

    useEffect(() => {
        index(borough)
            .then((res) => setMapData(res.data.locations))
            .catch((err) => console.log(err));
    }, [borough]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                {/* <Nav
                selectedBorough={selectedBorough}
                setViewport={setViewport}
                viewport={viewport}
            /> */}
            <MapBox>
                <MapGL
                    ref={mapRef}
                    {...viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    onViewportChange={(viewport) => { setViewport(viewport) }}
                    mapStyle="mapbox://styles/taaseen71/ckleb8llf0zv817lk5y1asq7s"
                >
                    {mapData.map((pin, i) => {
                        return (
                            <Marker key={pin._id} latitude={pin.latitude} longitude={pin.longitude} >
                                <div>
                                    <DroppedPin
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setPin(pin);
                                            getRandomInt()
                                            getRandomImage()
                                        }}>
                                        <DroppedPinImage src="./icons/map-icon.svg" alt="Marker Icon" />
                                    </DroppedPin>
                                </div>
                            </Marker>
                        )
                    })}
                    <Geocoder position="top-left" mapRef={mapRef} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} />
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
						onClick={() => { getRandomInt() }}
						latitude={pin.latitude}
						longitude={pin.longitude}
						onClose={() => setPin(null)}
					>
						<LocationCard
							user={user}
							alert={alert}
							pin={pin}
							randomNumber={randomNumber}
							randomImage={randomImage} />
					</Popup>
				)}
                </MapGL>
            </MapBox>
        </div>
    )
}

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
    `

const DroppedPin = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`
const DroppedPinImage = styled.img`
    width: 20px;
    height: 20px;
`


export default ReactMapGL
