import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

const API_URL = "https://ihtgo.com.vn/api/";

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common.Accept = "application/x-www-form-urlencoded";

axios.interceptors.request.use(async function(config) {
  config.headers.Authorization = await AsyncStorage.getItem("@token");
  return config;
});

axios.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

export default axios;
