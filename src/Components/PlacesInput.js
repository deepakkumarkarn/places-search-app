import React, { Component } from "react";
import { connect } from "react-redux";
import AlgoliaPlaces from "algolia-places-react";
import { bindActionCreators } from "redux";

import * as Actions from "./../actions";

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
            // console.log("Query", query);
            // console.log("Raw", rawAnswer);
            // console.log("Suggestion:", suggestion);
            // console.log("Index", suggestionIndex);
            this.props.updateLocation(suggestion);
            this.props.updateMap(suggestion.latlng);
            this.props.updateVenue(suggestion);
          }}
          onClear={() => {
            this.props.clearMap();
          }}
          onError={({ message }) =>
            console.log(
              "Algolia Places servers reaching your rate limit.",
              message
            )
          }
        />
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
