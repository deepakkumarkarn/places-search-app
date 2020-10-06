import React, { Fragment } from "react";
import { connect } from "react-redux";

import "../index.css";

import MapView from "./MapView";
import PlacesInput from "./PlacesInput";
import LocationInfo from "./VenueInfo";

const App = (props) => {
  //Todo: Add the graph Feature
  
  const { locationDetail } = props;

  const showLocationInfo = () => {
    //Todo: Make it work like toggle button for sidenav    
    const sideBar = (
        <Fragment>
        <div className={"d-flex h-100 venueContainer"}>
          <LocationInfo />
        </div></Fragment>
      );
    return sideBar;
  };

  return (
    <div className="App w-100 d-flex flex-row">
      <div
        className={
          "d-flex h-100 flex-column " +
          (Object.keys(locationDetail).length === 0 ? "w-100" : "mainConatiner")
        }
      >
        <div className="d-flex align-items-center w-100 justify-content-center p-2 h-75">
          <MapView />
        </div>
        <div className="d-flex align-items-center justify-content-center ">
          <PlacesInput />
        </div>
      </div>
      {showLocationInfo()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    locationDetail: state.location.locationDetail,
  };
};

export default connect(mapStateToProps)(App);
