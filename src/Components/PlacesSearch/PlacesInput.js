import React, { Component } from "react";
import { connect } from "react-redux";
import AlgoliaPlaces from "algolia-places-react";

import { updateLocation, updateMap, updateVenue } from "../../actions";

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
          // onSuggestions={({ rawAnswer, query, suggestions }) =>
          //   console.log(
          //     "Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed."
          //   )
          // }

          // onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) =>
          //   console.log(
          //     "Fired when arrows keys are used to navigate suggestions."
          //   )
          // }

          onClear={() => console.log("Fired when the input is cleared.")}
          // onLimit={({ message }) =>
          //   console.log("Fired when you reached your current rate limit.")
          // }

          onError={({ message }) =>
            console.log(
              "Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit."
            )
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("PlaceInput State: ", state);
  return {
    locationDetail: state.location.locationDetail,
  };
};

export default connect(mapStateToProps, {
  updateLocation,
  updateMap,
  updateVenue,
})(PlacesInput);
