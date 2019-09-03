import {
  SET_LOCATION,
  SET_LOCATION_ERROR,
  BLOCK_LOCATION,
  UNBLOCK_LOCATION
} from "./types";
import axios from "../utilities/axios";
import Geolocation from "@react-native-community/geolocation";
import toast from "../utilities/toast";
import RNAndroidLocationEnabler from "react-native-android-location-enabler";

export const tracking = () => {
  return async (dispatch, getState) => {
    setInterval(function() {
      Geolocation.getCurrentPosition(
        position => {
          dispatch({
            type: UNBLOCK_LOCATION
          });
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
                dispatch({
                  type: SET_LOCATION,
                  lat,
                  lng
                });
              })
              .catch(err => {
                toast(err);
              });
          }
        },
        error => {
          dispatch({
            type: SET_LOCATION_ERROR,
            error: error.message
          });
        },
        { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
      );
      RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
        interval: 10000,
        fastInterval: 5000
      })
        .then(data => {})
        .catch(err => {});
    }, 5000);
  };
};
