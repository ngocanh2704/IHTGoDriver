import { SET_LOCATION } from "./types";
import Geolocation from "react-native-geolocation-service";
import axios from "../utilities/axios";

export const tracking = () => {
  return async (dispatch, getState) => {
    setInterval(function() {
      Geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          if (
            lat !== getState().location.lat ||
            lng !== getState().location.lng
          ) {
            axios
              .post("driver/tracking", {
                lat,
                lng
              })
              .then(res => {
                console.log(res);
                dispatch({
                  type: SET_LOCATION,
                  lat,
                  lng
                });
              })
              .catch(err => {
                console.log(err);
              });
          }
        },
        error => {
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }, 5000);
  };
};
