import React, { Component, createRef } from "react";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import VenueMarkers from "./VenueMarkers";
import { connect } from "react-redux";

class MapView extends Component {

  constructor(props){
    super(props);
    this.mapRef = createRef();
  }


  handleClick = () => {
    const map = this.mapRef.current
    if (map != null) {
      map.leafletElement.locate();
    }
  }

  handleLocationFound = (e) => {
    console.log(e);
  }

  render() {
    const { currentLocation, zoom } = this.props;

    return (
      <Map 
      center={currentLocation} 
      onClick={this.handleClick}
      onLocationfound={this.handleLocationFound}
      ref={this.mapRef}
      zoom={zoom}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <VenueMarkers />
      </Map>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentLocation: state.location.currentLocation,
    zoom: state.location.zoom,
    venues: state.venue.venueDetail,
  };
};

export default connect(mapStateToProps)(MapView);
