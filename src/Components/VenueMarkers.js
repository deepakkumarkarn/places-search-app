import React, { Fragment } from "react";
import { Marker, Popup } from "react-leaflet";
import { VenueLocationIcon } from "./VenueLocationIcon";

import { connect } from "react-redux";

export const MarkerPopup = (props) => {
  const data = props.data;
  return (
    <Popup>
      <div className="poup-text">
        {data || "-"}
      </div>
    </Popup>
  );
};

const VenueMarkers = (props) => {
  const { venues } = props;

  const markers = venues.map((venue, index) => (
        <Marker
          key={index}
          position={venue.geometry.coordinates}
          icon={VenueLocationIcon}
        >
          <MarkerPopup
            data={
              venue.properties.sitename   
            }
          />
        </Marker>
      )
  );

  return (
    <Fragment>
      {
        markers
      }
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    currentLocation: state.location.currentLocation,
    venues: state.venue.venueDetail,
  };
};

export default connect(mapStateToProps)(VenueMarkers);