import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import getConfig from "./config";

const environment = process.env.NEXT_PUBLIC_APP_NODE_ENV || "development";
const config = getConfig(environment);

export const apiInstance = axios.create({
  baseURL: config.APP_BASE_URL,
  // timeout: 10000,
  headers: {
    Accept: "Application/json",
    "Access-Control-Max-Age": 0,
  },
});

apiInstance.interceptors.request.use(
  function (config) {
    const { store } = require("../store/store");
    const { startLoading } = require("@/services/common/commonSlice");
    store.dispatch(startLoading());
    const userDataFromCookie = Cookies?.get("userData");
    const userObject = JSON?.parse(userDataFromCookie);
    const token = userObject?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  function (response) {
    const { store } = require("../store/store");
    const { stopLoading } = require("@/services/common/commonSlice");
    store.dispatch(stopLoading());
    return response;
  },
  function (error) {
    const { store } = require("../store/store");
    const { stopLoading } = require("@/services/common/commonSlice");
    store.dispatch(stopLoading());
    const { data, status } = error.response;
    if (status === 401 && data.message === "Unauthenticated.") {
      toast("Your token has expired. Please login again to use the app");
      // Perform additional actions like logging out the user
    }
    return { data, status };
    // return Promise.reject(error);
  }
);

export const apiNoLoaderInstance = axios.create({
  baseURL: config.APP_BASE_URL,
  timeout: 10000,
  headers: {
    Accept: "Application/json",
  },
});

apiNoLoaderInstance.interceptors.request.use(
  function (config) {
    const userDataFromCookie = Cookies?.get("userData");
    const userObject = JSON?.parse(userDataFromCookie);
    const token = userObject?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

apiNoLoaderInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const { data, status } = error.response;
    if (status === 401 && data.message.includes("Unauthenticated.")) {
      // Perform additional actions like logging out the user
    }
    return Promise.reject(error);
  }
);
