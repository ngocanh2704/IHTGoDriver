import { SET_LOCATION } from "./types";
import axios from "../utilities/axios";
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import Geolocation from "@react-native-community/geolocation";

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
                dispatch({
                  type: SET_LOCATION,
                  lat,
                  lng
                });
              })
              .catch(err => {});
          }
        },
        error => {
          console.log(error.code, error.message);
          LocationServicesDialogBox.checkLocationServicesIsEnabled({
            message:
              "<h2>Vui lòng bật định vị !</h2>Phần mềm bắt buộc bật định vị để theo chính sách của công ty",
            ok: "YES",
            cancel: "NO",
            enableHighAccuracy: true,
            showDialog: true,
            openLocationServices: true,
            preventOutSideTouch: false,
            preventBackClick: false,
            providerListener: true
          })
            .then((success => {}).bind(this))
            .catch(error => {});
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }, 5000);
  };
};
