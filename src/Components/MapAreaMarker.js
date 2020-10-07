import React from "react";
import { connect } from "react-redux";

import { CircleMarker } from "react-leaflet";

import { MarkerPopup } from "./VenueMarkers";

const MapAreaMarker = (props) => {
  const { center, radius, message } = props;

  const drawCircle = (center, radius) => {
    if (center.length !== 0) {
      return (
        <React.Fragment>
          <CircleMarker center={center} color="red" radius={radius}>
            <MarkerPopup data={message} />
          </CircleMarker>
        </React.Fragment>
      );
    } else {
      return <React.Fragment></React.Fragment>;
    }
  };

  return drawCircle(center, radius);
};

const mapStateToProps = (state) => {
  return {
    center: state.area.midPoint,
    radius: state.area.radius,
    message: state.area.message,
  };
};

export default connect(mapStateToProps)(MapAreaMarker);
