import react, { useEffect, useState, useRef } from "react";
import Geocoder from 'react-map-gl-geocoder'
import { v4 as uuidv4 } from "uuid"
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import MapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";
// import MarkerIcon from "./Marker-Icon.svg"
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
MapGL.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


function ReactMapGL({ compostLocation, setCompostLocation, mapData, viewport, setViewport }) {

    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setCompostLocation(null)
            }
        }
        window.addEventListener("keydown", listener)
    }, [])

    const mapRef = useRef()

    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
            <MapGL
                ref={mapRef}
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={(viewport) => { setViewport(viewport) }}
                mapStyle="mapbox://styles/taaseen71/ckleb8llf0zv817lk5y1asq7s"
            >
                {mapData.map(location => {
                    return (
                        <Marker
                            key={uuidv4()}
                            latitude={location.point.coordinates[1]}
                            longitude={location.point.coordinates[0]}
                        >
                            <button className="marker-btn"
                                onClick={e => {
                                    e.preventDefault();
                                    setCompostLocation(location);
                                }}>
                                <img src="/Marker-Icon.svg" alt="Location" />
                            </button>
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
                        closeButton={false}
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
                )}
            </MapGL>
        </div>
    )
}

export default ReactMapGL
