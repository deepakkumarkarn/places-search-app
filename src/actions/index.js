export const LOCATION_REMOVE = "LOCATION_REMOVE";
export const LOCATION_UPDATE = "LOCATION_UPDATE";

export const LOCATION_VENUES_UPDATE = "LOCATION_VENUES_UPDATE";
export const LOCATION_VENUES_CLEAR = "LOCATION_VENUES_CLEAR";


export const LATLNG_VENUES_UPDATE = "LATLNG_VENUES_UPDATE";

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
