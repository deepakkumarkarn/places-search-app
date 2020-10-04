import React from "react";
import "./App.css";
import MapView from "./Components/Map/MapView";
import PlacesInput from './Components/PlacesSearch/PlacesInput';


const App = () => {
  return (
    <div className="App">
      <div className="map-block">
        <MapView />
      </div>
      <div className="search-box">
        <PlacesInput />
      </div>
    </div>)
};

export default App;