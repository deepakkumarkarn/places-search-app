export const LOCATION_REMOVE = "LOCATION_REMOVE";
export const LOCATION_UPDATE = "LOCATION_UPDATE";

export const LOCATION_VENUES_UPDATE = "LOCATION_VENUES_UPDATE";
export const LOCATION_VENUES_CLEAR = "LOCATION_VENUES_CLEAR";


export const LATLNG_VENUES_UPDATE = "LATLNG_VENUES_UPDATE";

export const MAP_MIDPOINT_UPDATE = "MAP_MIDPOINT_UPDATE";
export const MAP_MIDPOINT_REMOVE = "MAP_MIDPOINT_REMOVE";
export const MAP_RADIUS_UPDATE = "MAP_RADIUS_UPDATE";
export const MAP_AREA_MSG_UPDATE = "MAP_AREA_MSG_UPDATE";

export function removeLocation() {
  return {type: LOCATION_REMOVE};
}

export function updateLocation(locationDetail) {
  return {type: LOCATION_UPDATE, locationDetail};
}

export function updateVenue(venueDetails){
  return {type: LOCATION_VENUES_UPDATE, venueDetails};
}

export function clearVenue(){
  return { type: LOCATION_VENUES_CLEAR};
}

export function updateVenuesForLocationDetails(locationDetails) {
  return {type: LATLNG_VENUES_UPDATE, locationDetails};
}

export function updateMapMidpoint(lat, lng){
  return {type: MAP_MIDPOINT_UPDATE, lat, lng};
}

export function removeMapMidpoint(){
  return {type: MAP_MIDPOINT_REMOVE};
}

export function updateMapRaius(size){
  return {type: MAP_RADIUS_UPDATE, size};
}

export function updateAreaMessage(message) {
  return {type: message};
}