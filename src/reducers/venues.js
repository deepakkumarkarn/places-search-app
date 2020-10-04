import {
    LOCATION_VENUES_CLEAR, LOCATION_VENUES_UPDATE
  } from "../actions";
  
  const INITIAL_STATE = {
      venueDetail: []
  };
  
  function updateVenue(state, name, latlng) {
    const { lat, lng } = latlng;
    const venue = {
      name: name,
      geometry: [lat, lng]
    }
    state.venueDetail.push(venue);
    return state;
  }
  
  function clearVenue(state) {
    state.venueDetail = [];
    return state;
  }
  
  
  export default function venueReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case LOCATION_VENUES_UPDATE:
        const { name, latlng } = action.venueDetails;
        return updateVenue(state, name, latlng);
      case LOCATION_VENUES_CLEAR:
        return clearVenue(state);
      default:
        return state;
    }
  }
  