import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import react, { useEffect, useState, useRef } from "react";
import ReactMap from './components/ReactMap';
import ReactMapGL from './components/ReactMapGL';


function App() {


    // const [selectedBorough, setSelectedBorough] = useState("")
    const [compostLocation, setCompostLocation] = useState(null)
    const [mapData, setMapData] = useState([])
    const [viewport, setViewport] = useState({
        latitude: 40.7128,
        longitude: -74.0060,
        zoom: 9,
        width: "95vw",
        height: "45vh"
    })


    useEffect(() => {
        fetchData()
        console.log(mapData[0])
    }, [])

    const fetchData = async () => {
        const data = await axios('https://data.cityofnewyork.us/resource/if26-z6xq.json');
        setMapData(data.data);
    }



    return (
        <div className="App">
            <header>
                Header
            </header>
            <ReactMap />
            <ReactMapGL
                compostLocation={compostLocation}
                setCompostLocation={setCompostLocation}
                mapData={mapData}
                viewport={viewport}
                setViewport={setViewport}
            />
        </div>
    );
}

export default App;
