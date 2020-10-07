import {
  MAP_MIDPOINT_REMOVE,
  MAP_RADIUS_UPDATE,
  MAP_MIDPOINT_UPDATE,
  MAP_AREA_MSG_UPDATE
} from "../actions";

const INITIAL_STATE = {
  midPoint: [],
  radius: 0,
  areaMessage: ""
};

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function updateMapMidpoint(state, lat, lng) {
  state.midPoint = [lat, lng];
  return state;
}

function removeMapMidpoint(state) {
  state.midPoint = [];
  return state;
}

function updateRadius(state, size) {
  state.radius = size;
  return state;
}

function updateSelectedAreaMessage(state, message) {
    state.areaMessage = message;
    return state;
}

export default function areaSelectorReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MAP_MIDPOINT_UPDATE:
      const { lat, lng } = action;
      return updateMapMidpoint(clone(state), lat, lng);

    case MAP_MIDPOINT_REMOVE:
      return removeMapMidpoint(clone(state));

    case MAP_RADIUS_UPDATE:
        const { size } = action;
        return updateRadius(clone(state), size);

    case MAP_AREA_MSG_UPDATE:
        const { message } = action.message;
        return updateSelectedAreaMessage(clone(state), message);

    default:
      return clone(state);
  }
}
