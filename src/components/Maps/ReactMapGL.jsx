import react, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";
import Geocoder from 'react-map-gl-geocoder'
import { v4 as uuidv4 } from "uuid"
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import MapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";
// import MarkerIcon from "./Marker-Icon.svg"
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
MapGL.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


function ReactMapGL({
    compostLocation,
    setCompostLocation,
    mapData,
    viewport,
    setViewport,
    //TODO: user,
    //TODO: msgAlert
}) {

    //! STATES

    const [randomNumber, setRandomNumber] = useState([])
    const [randomImage, setRandomImage] = useState("")


    //! EFFECTS

    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setCompostLocation(null)
            }
        }
        window.addEventListener("keydown", listener)
    }, [])

    useEffect(() => {
        getRandomInt();
        getRandomImage();
    }, [])

    //! FUNCTIONS

    const getRandomInt = () => {
        const num1 = Math.floor(Math.random() * 999)
        const num2 = Math.floor(Math.random() * 9999)
        return setRandomNumber([num1, num2])
    }

    const getRandomImage = () => {
        return setRandomImage(Math.floor(Math.random() * 9))
    }

    const mapRef = useRef()

    //?Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nobis magni corporis asperiores
    //TODO: UNUSED FUNCTIONS Uncomment slowly 
    // useEffect(() => {
    //     index(selectedBorough)
    //         .then((res) => setData(res.data.locations))
    //         .catch((err) => console.log(err));
    // }, [selectedBorough]);

    //?Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nobis magni corporis asperiores


    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
            {/* //TODO: NAVIGATION
                <Nav
                setSelectedBorough={setSelectedBorough}
                setViewport={setViewport}
                viewport={viewport}
            /> */}
            <MapDiv>
                <MapGL
                    ref={mapRef}
                    {...viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    onViewportChange={(viewport) => { setViewport(viewport) }}
                    mapStyle="mapbox://styles/taaseen71/ckleb8llf0zv817lk5y1asq7s"
                >
                    {mapData.map(location => {
                        return (
                                <Marker key={location._id} latitude={location.latitude} longitude={location.longitude} >
                                <div>
                                    <DroppedPin
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setCompostLocation(location);
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
                    {compostLocation && (
                        <Popup
                            latitude={compostLocation.point.coordinates[1]}
                            longitude={compostLocation.point.coordinates[0]}
                            // onClose={() => { setCompostLocation(null) }}
                            // closeButton={false}
                            onClose={() => setCompostLocation(null)}
                        >
                            <div>
                                <h3>{compostLocation.food_scrap_drop_off_site}</h3>
                                <p><span>Borough: </span>{compostLocation.borough}</p>
                                <p><span>Hours From: </span>{compostLocation.hours_from}</p>
                                <p><span>Hours To: </span>{compostLocation.hours_to}</p>
                                <p><span>Latitude: </span>{compostLocation.latitude}</p>
                                <p><span>Longitude: </span>{compostLocation.longitude}</p>
                                <p><span>Location: </span>{compostLocation.location}</p>
                                <p><span>Operation: </span>{compostLocation.operation_day}</p>
                                <p><span>Open Months: </span>{compostLocation.open_months}</p>
                                <p><span>Zip Code: </span>{compostLocation.zip_code}</p>
                                {compostLocation.website && (
                                    <p><span>Website: </span><a href={compostLocation.website}>{compostLocation.website}</a></p>
                                )}
                            </div>
                        </Popup>
                        //     <Popup
                        //     user={user}
                        //     closeOnClick={false}
                        //     closeButton={true}
                        //     onClick={() => { getRandomInt() }}
                        //     latitude={location.latitude}
                        //     longitude={location.longitude}
                        //     onClose={() => setLocation(null)}
                        // >
                        //     <LocationCard
                        //         user={user}
                        //         msgAlert={msgAlert}
                        //         location={location}
                        //         randomNumber={randomNumber}
                        //         randomImage={randomImage} />
                        // </Popup>
                    )}
                </MapGL>
            </MapDiv>
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

const MapDiv = styled.div`
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
