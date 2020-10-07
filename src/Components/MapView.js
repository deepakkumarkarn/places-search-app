import React, { Component, createRef } from "react";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import VenueMarkers from "./VenueMarkers";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MapAreaMarker from "./MapAreaMarker";
import * as Actions from "./../actions";

class MapView extends Component {
  constructor(props) {
    super(props);
    this.mapRef = createRef();
    this.state = {
      areaSelected: false,
    };
  }

  distanceBetween = (latlng1, latlng2) => { 

    const lat1 = latlng1[0];
    const lng1 = latlng1[1];

    const lat2 = latlng2[0];
    const lng2 = latlng2[1];

    if (lat1 === lat2 && lng1 === lng2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lng1 - lng2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;

      return dist;
    }
  };

  handleClick = () => {
    const map = this.mapRef.current;
    if (map != null) {
      map.leafletElement.locate();
    }
  };

  handleLocationFound = (e) => {
    const { lat, lng } = e.latlng;

    if (this.state.areaSelected) {
      const size = this.distanceBetween(
        [this.props.currentLocation.lat, this.props.currentLocation.lng],
        [lat, lng]
      );
      this.props.updateMapRaius(size * 1.609);

    } else {
      this.setState({
        areaSelected: true,
      });
      this.props.updateMapMidpoint(lat, lng);
    }
  };

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
        <MapAreaMarker />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MapView);
