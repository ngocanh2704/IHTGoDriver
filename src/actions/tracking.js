import { SET_LOCATION } from "./types";
import axios from "../utilities/axios";
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import Geolocation from "@react-native-community/geolocation";
import toast from "../utilities/toast";

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
              .catch(err => {
                toast(err);
              });
          }
        },
        error => {
          toast("Không thể lấy vị trí, vui lòng bật định vị");
          LocationServicesDialogBox.checkLocationServicesIsEnabled({
            message:
              "<h2>Vui lòng bật định vị !</h2>Phần mềm bắt buộc bật định vị",
            ok: "Có",
            cancel: "Không",
            enableHighAccuracy: false,
            showDialog: true,
            openLocationServices: true,
            preventOutSideTouch: false,
            preventBackClick: false,
            providerListener: true
          })
            .then((success => {}).bind(this))
            .catch(error => {});
        },
        { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
      );
    }, 5000);
  };
};
