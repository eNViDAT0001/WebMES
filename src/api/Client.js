import axios from "axios";
import { stringify } from "qs";

const baseURL = "http://localhost:8082/api/v1";

let authTokens = localStorage.getItem("AccessToken")
  ? localStorage.getItem("AccessToken")
  : null;

const axiosClient = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${authTokens}` },
});

axiosClient.interceptors.request.use(async (req) => {
  if (!authTokens) {
    authTokens = localStorage.getItem("AccessToken")
      ? localStorage.getItem("AccessToken")
      : null;
    req.headers.Authorization = `Bearer ${authTokens}`;
  }

  req.headers.Authorization = `Bearer ${localStorage.getItem("AccessToken")}`;
  return req;
});
axiosClient.interceptors.response.use((resp) => resp,async (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("AccessToken");
      await axios.post(`${baseURL}/token/refresh`, {refresh_token: localStorage.getItem("RefreshToken"),})
        .then((response) => {
          localStorage.setItem("AccessToken", response.data.data.access_token);
          localStorage.removeItem("RefreshToken");
          localStorage.setItem("RefreshToken",response.data.data.refresh_token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("AccessToken")}`;
          return axios(error.config);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return error;
  }
);

export default axiosClient;
