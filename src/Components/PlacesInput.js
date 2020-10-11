import React, { Component } from "react";
import { connect } from "react-redux";
import AlgoliaPlaces from "algolia-places-react";
import { bindActionCreators } from "redux";

import * as Actions from "./../actions";
import MapComp from "./Map";

class PlacesInput extends Component {
  render() {
    return (
      <div className="w-75 p-2">
        <AlgoliaPlaces
          placeholder="Search City"
          options={{
            appId: "pl767B5GFBBV",
            apiKey: "bb4446065d873778f38dd17c00601749",
            language: "en",
            // Other options from https://community.algolia.com/places/documentation.html#options
          }}
          onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => {
            this.props.updateLocation(suggestion);
            this.props.updateVenue(suggestion);
          }}
          onClear={() => {
            this.props.removeLocation();
          }}
          onError={({ message }) =>
            console.log(
              "Algolia Places servers reaching your rate limit.",
              message
            )
          }
        />
        <MapComp />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locationDetail: state.location.locationDetail,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesInput);
