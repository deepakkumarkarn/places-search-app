import {
  LOCATION_VENUES_CLEAR,
  LOCATION_VENUES_UPDATE,
  LATLNG_VENUES_UPDATE,
} from "../actions";

const INITIAL_STATE = {
  venueDetail: [
    // As per mock API example
    {
      type: "Feature",
      id: "tppoints.1",
      geometry: { type: "Point", coordinates: [21.1498, 79.0821] },
      geometry_name: "the_geom",
      properties: {
        subtype: "",
        sitename: "Nagpur City",
        name: "30",
        type: "City",
      },
    },
  ],
  geoObject: []
};

function updateVenue(state, venueDetails = []) {
  venueDetails.forEach((venue) => {
    if (venue && venue.geometry && venue.geometry.coordinates) {
      state.venueDetail.push(venue);
    }
  });
  return state;
}

function clearVenue(state) {
  state.venueDetail = [];
  return state;
}

function getVenuesForLocationetails(state) {
  fetch("https://5f7a1072e402340016f93709.mockapi.io/6simplex/poi")
    .then((res) => res.json())
    .then(
      (result) => {
        state.geoObject = result;
      },
      (error) => {
        console.log(error);
      }
    );

  return state;
}

export default function venueReducer(state = INITIAL_STATE, action) {
  getVenuesForLocationetails(state, {});
  switch (action.type) {
    case LOCATION_VENUES_UPDATE:
      const { venueDetails } = action.venueDetails;
      return updateVenue(state, venueDetails);
    case LOCATION_VENUES_CLEAR:
      return clearVenue(state);
    case LATLNG_VENUES_UPDATE:
      // const { locationetails } = action.locationetails;
      return getVenuesForLocationetails(state);
    default:
      return state;
  }
}
