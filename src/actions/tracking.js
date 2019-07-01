import { SET_LOCATION } from "./types";

export const tracking = geolocation => {
  return async dispatch => {
    setInterval(function() {
      return geolocation.getCurrentPosition(
        position => {
          dispatch({
            type: SET_LOCATION,
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        error => {
          console.log(error);
        },
        { enableHighAccuracy: false, timeout: 20000 }
      );
    }, 1000);
  };
};
