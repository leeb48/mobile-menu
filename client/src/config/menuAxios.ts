import axios from "axios";

const menuAxios = axios.create({
  baseURL: "/api",
});

menuAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `JWT ${token}`;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

menuAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      console.log(originalRequest);

      return axios
        .post("api/auth/token/refresh", {
          refresh: localStorage.getItem("refreshToken"),
        })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("accessToken", res.data.access);
            localStorage.setItem("refreshToken", res.data.refresh);

            originalRequest.headers[
              "Authorization"
            ] = `JWT ${localStorage.getItem("accessToken")}`;

            return axios(originalRequest);
          }
        });
    }

    // Clear tokens
    localStorage.setItem("accessToken", "");
    localStorage.setItem("refreshToken", "");
    return Promise.reject(error);
  }
);

export default menuAxios;
