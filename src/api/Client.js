import axios from "axios";

const baseURL = "http://localhost:8082/api/v1";

let authTokens =
  localStorage.getItem("AccessToken") !== "undefined"
    ? localStorage.getItem("AccessToken")
    : null;

const axiosClient = axios.create({
  baseURL,

});

axiosClient.interceptors.request.use(
  async config => {
    config.headers = { 
      'Authorization': `Bearer ${authTokens}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    return config;
  },
  error => {
    Promise.reject(error)
});
axiosClient.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await axios
        .post(`${baseURL}/token/refresh`, {
          refresh_token: localStorage.getItem("RefreshToken"),
        })
        .then((response) => {
          localStorage.removeItem("AccessToken");
          localStorage.setItem("AccessToken", response.data.data.access_token);
          localStorage.removeItem("RefreshToken");
          localStorage.setItem(
            "RefreshToken",
            response.data.data.refresh_token
          );
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${localStorage.getItem("AccessToken")}`;
          return axios(originalRequest);
        });
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
