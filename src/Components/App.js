import React, { Fragment } from "react";
import { connect } from "react-redux";

import LocationInfo from "./VenueInfo";
import PlacesInput from "./PlacesInput";

const App = () => {

  const showLocationInfo = () => {
    //Todo: Make it work like toggle button for sidenav
    const sideBar = (
      <Fragment>
        <div className={"d-flex venueContainer h-100"}>
          <LocationInfo />
        </div>
      </Fragment>
    );
    return sideBar;
  };

  const showGraphicCategorization = () => {
    //Todo: Make it work like toggle button for sidenav
    const sideBar = (
      <Fragment>
        <div className={"d-flex h-100 venueContainer"}>
          Add Graph
        </div>
      </Fragment>
    );
    return sideBar;
  };

  return (
    <div className="App">
      <div className="d-flex justify-content-center">
        <PlacesInput />
      </div>
      <div className="w-100 d-flex locationDetails">
        <div className="w-50">{showLocationInfo()}</div>
        <div className="w-50">{showGraphicCategorization()}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    locationDetail: state.location.locationDetail,
    center: state.location.center,
    zoom: state.location.zoom,
    showLayer: false,
    zIndex: 0,
  };
};

export default connect(mapStateToProps)(App);
