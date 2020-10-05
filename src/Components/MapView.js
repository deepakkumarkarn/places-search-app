import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import VenueMarkers from "./VenueMarkers";
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

        <VenueMarkers venues={this.props.venues} />
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
