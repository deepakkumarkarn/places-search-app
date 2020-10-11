import { LOCATION_REMOVE, LOCATION_UPDATE } from "../actions";

const INITIAL_STATE = {
  locationDetail: {
    name: "Nagpur",
    administrative: "Maharashtra",
    type: "city",
    country: "India",
    countryCode: "in",
    latlng: { lat: 21.1498, lng: 79.082 },
    postcode: "440001",
    tags: ["country/in", "city", "place/city", "source/geonames"],
    population: 2405700,
  },
  center: [79.082, 21.1498], //[lng, lat]
  zoom: 12,
};

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function updateLocation(state, locationDetail) {
  const detail = {
    name: locationDetail.name,
    administrative: locationDetail.administrative,
    type: locationDetail.type,
    city: locationDetail.city,
    country: locationDetail.country,
    countryCode: locationDetail.countryCode,
    latlng: locationDetail.latlng,
    postcode: locationDetail.postcode,
    tags: locationDetail.hit._tags,
    population: locationDetail.hit.population,
  };
  state.locationDetail = clone(detail);

  state.center = [detail.latlng.lng, detail.latlng.lat];
  state.zoom = 18;

  return state;
}

function removeLocation(state) {
  const defaultdetails = {
    name: "Nagpur",
    administrative: "Maharashtra",
    type: "city",
    country: "India",
    countryCode: "in",
    latlng: { lat: 21.1498, lng: 79.082 },
    postcode: "440001",
    tags: ["country/in", "city", "place/city", "source/geonames"],
    population: 2405700,
  };
  state.locationDetail = clone(defaultdetails);
  state.center = [79.082, 21.1498];
  state.zoom = 12;
  return state;
}

export default function locationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOCATION_UPDATE:
      const { locationDetail } = action;
      return updateLocation(clone(state), locationDetail);

    case LOCATION_REMOVE:
      return removeLocation(clone(state));

    default:
      return clone(state);
  }
}
