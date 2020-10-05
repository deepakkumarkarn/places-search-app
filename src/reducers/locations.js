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


function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function updateLocation(state, locationDetail) {
  state.locationDetail = clone(locationDetail);
  return state;
}

function updateMap(state, latlng) {
  state.currentLocation = latlng;
  return state;
}

function clearMap(state) {
  state.currentLocation = { lat: 21.1498, lng: 79.082 };
  return state;
}

function removeLocation(state) {
  state.loacationDetails = {};
  state.currentLocation = { lat: 21.1498, lng: 79.082 };
  return state;
}

export default function locationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOCATION_UPDATE:
      const { locationDetails } = action;
      return updateLocation(clone(state), locationDetails);
    case LOCATION_REMOVE:
      return removeLocation(clone(state));
    case MAP_UPDATE:
      const { latlng } = action;
      return updateMap(clone(state), latlng);
    case MAP_CLEAR:
      return clearMap(clone(state));
    default:
      return clone(state);
  }
}
