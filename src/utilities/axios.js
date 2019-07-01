import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/ecredit_api/api/",
  timeout: 10000,
  headers: {
    "X-Custom-Header": "nad"
  }
});
