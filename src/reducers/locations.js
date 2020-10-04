import {
  LOCATION_REMOVE,
  LOCATION_UPDATE,
  MAP_CLEAR,
  MAP_UPDATE,
} from "../actions";

const INITIAL_STATE = {
  locationDetail: {},
  currentLocation: { lat: 21.1498, lng: 79.082 },
  zoom: 12,
};

function updateLocation(state, locationDetail) {
  state.locationDetail = locationDetail;
  return state;
}

function updateMap(state, latlng) {
  state.currentLocation = latlng;
  return state;
}

function clearMap(state) {
  state.currentLocation = { lat: 28.6448, lng: 77.216721 };
  return state;
}

function removeLocation(state) {
  state.loacationDetails = {};
  state.currentLocation = { lat: 28.6448, lng: 77.216721 };
  return state;
}

export default function locationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOCATION_UPDATE:
      const { locationDetails } = action;
      return updateLocation(state, locationDetails);
    case LOCATION_REMOVE:
      return removeLocation(state);
    case MAP_UPDATE:
      const { latlng } = action;
      return updateMap(state, latlng);
    case MAP_CLEAR:
      return clearMap(state);
    default:
      return state;
  }
}
