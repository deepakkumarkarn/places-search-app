import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./VenueMarkers";
import { connect } from "react-redux"; 

class MapView extends Component {
  render() {    
    const { currentLocation, zoom } = this.props;

    return (
      <Map center={currentLocation} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <Markers />
      </Map>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentLocation: state.location.currentLocation,
    zoom: state.location.zoom,
  };
};

export default connect(mapStateToProps)(MapView);
