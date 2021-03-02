import React, { useState, useRef, useEffect } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { PositionOptions } from 'mapbox-gl';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default
//! Install "worker-loader" to deps if you using CRA and add the following to the start of your code
//! Just making it super concrete for future create-react-users that come across this, 
// a non-eject production build solution is to import mapboxgl like this:
//! // @ts-ignore
//! // eslint-disable-next-line import/no-webpack-loader-syntax
//! mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
function ReactMap() {
    const [viewport, setViewport] = useState({
        latitude: 40.7128,
        longitude: -74.0060,
        zoom: 1,
        width: "95vw",
        height: "45vh"
    })
    const [map, setMap] = useState(null)
    const mapContainer = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/taaseen71/ckleb8llf0zv817lk5y1asq7s",
                center: [viewport.longitude, viewport.latitude],
                zoom: viewport.zoom,
            })

            map.on("load", () => {
                setMap(map);
                map.resize();
            })

            const marker = new mapboxgl.Marker()
            .setLngLat([-75.6903, 45.4211])
            .setPopup(new mapboxgl.Popup()
            .setHTML("<h1>Hello</h1>"))
            .addTo(map)
        }

        if (!map) initializeMap({ setMap, mapContainer });
    }, [map])

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div ref={el => mapContainer.current = el} style={{ width: viewport.width, height: viewport.height }} >
                {/* <Marker latitude={viewport.latitude} longitude={viewport.longitude} /> */}
            </div>
        </div>
    )
}

export default ReactMap;






