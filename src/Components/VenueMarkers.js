import React, { Fragment } from "react";
import { Marker, Popup } from "react-leaflet";
import { VenueLocationIcon } from "./VenueLocationIcon";

import { connect } from "react-redux";

const MarkerPopup = (props) => {
  const venuedetail = props.venueDetail;
  return (
    <Popup>
      <div className="poup-text">
        {venuedetail || "Unknown"}
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
            venueDetail={
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

// const MarkerPopup = (props) => {
//   const venuedetail = props.data;
//   console.log(props);

//   return  (
//   <Popup>
//     <div className='poup-text'>{'ABC' || venuedetail.properties.sitename }</div>
//   </Popup>
//   );
// };

// const VenueMarkers = (props) => {
//   const { venues } = props;

//   const markers = venues.map((venue, index) => (
//     <Marker position={venue.geometry.coordinates} icon={VenueLocationIcon} >
//       <MarkerPopup data={venue}/>
//     </Marker>
//   ));

//   return <Fragment>{markers}</Fragment>
// };

// export default VenueMarkers;
