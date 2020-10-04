export const LOCATION_REMOVE = "LOCATION_REMOVE";
export const LOCATION_UPDATE = "LOCATION_UPDATE";

export const MAP_UPDATE = "MAP_UPDATE";
export const MAP_CLEAR = "MAP_CLEAR";


export const LOCATION_VENUES_UPDATE = "LOCATION_VENUES_UPDATE";
export const LOCATION_VENUES_CLEAR = "LOCATION_VENUES_CLEAR";

export function removeLocation() {
  return {type: LOCATION_REMOVE};
}

export function updateLocation(locationDetails) {
  return {type: LOCATION_UPDATE, locationDetails};
}

export function updateMap(latlng) {
  return {type: MAP_UPDATE, latlng};
}

export function clearMap() {
  return {type: LOCATION_UPDATE};
}

export function updateVenue(venueDetails){
  return {type: LOCATION_VENUES_UPDATE, venueDetails};
}

export function clearVenue(){
  return { type: LOCATION_VENUES_CLEAR};
}