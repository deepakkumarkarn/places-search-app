import React from "react";
import "../index.css";

import MapView from "./MapView";
import PlacesInput from "./PlacesInput";

const App = () => {
  return (
    <div className="App">
      <div className="map-block">
        <MapView />
      </div>
      <div className="search-box">
        <PlacesInput />
      </div>
    </div>
  );
};

export default App;
