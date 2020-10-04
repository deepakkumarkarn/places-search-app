import React, { Fragment } from 'react'
import { Marker, Popup } from 'react-leaflet';
import {VenueLocationIcon} from './VenueLocationIcon';

import { connect } from "react-redux";

const MarkerPopup = (props) => {
  const { name } = props.data;
  console.log(props);
  return (
    <Popup>
      <div className="poup-text">{name}</div>
    </Popup>
  );
};

const VenueMarkers = (props) => {
  const { venues } = props;
  const markers = venues.map((venue, index) => (
    <Marker key={index} position={venue.geometry} icon={VenueLocationIcon} >
      <MarkerPopup data={venue}/>
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>
};



const mapStateToProps = (state) => {
  return {
    currentLocation: state.location.currentLocation,
    venues: state.venue.venueDetail
  };
};

export default connect(mapStateToProps)(VenueMarkers);

