import axios from 'axios';

import { store } from '../redux/store';

const api = axios.create({
  baseURL: 'https://abl-backend-dummy.vercel.app/api/',

  // baseURL: "http://localhost:8087/api",

  // baseURL: "http://192.168.0.231:3001/api",
  timeout: 6000,
});

api.interceptors.request.use(
  config => {
    const isFormData = config.data instanceof FormData;

    if (!isFormData) {
      config.headers['Content-Type'] = 'application/json';
    } else {
      config.headers['Content-Type'] = 'multipart/form-data';
    }
    

    const data = store?.getState();

    if (data) {
      if (data?.auth) {
        if (data?.auth?.token != null) {
          if (data?.auth?.token) {
            config.headers['Authorization'] = data?.auth?.token;
          }
        }
      }
    }
    

    return config;
  },

  error => {
    console.log(error, 'Error');
    return Promise.reject(error);
  },
);

export const jsonToFormdata = json => {
  var data = new FormData();

  const entries = Object.entries(json);

  entries.forEach(entry => {
    data.append(entry[0], entry[1]);
  });

  return data;
};

api.interceptors.response.use(
  response => {
  
    return response?.data;
  },

  error => {
    console.log('error', error);

    if (error?.response) {
      const { data } = error?.response || {};
      return Promise.reject(data);
    }
  },
);

export const dataToQueryParameter = data => {
  if (typeof data === 'object') {
    if (!Array.isArray(data)) {
      var params = '?';

      const dataArray = Object.entries(data);

      if (dataArray.length > 0) {
        dataArray.forEach((entry, index) => {
          var amp = index < dataArray.length - 1 ? '&' : '';

          params = `${params}${entry[0]}=${entry[1]}${amp}`;
        });

        return params;
      }
    }
  } else if (typeof data === 'string') {
    return data;
  }

  return '';
};

const get = (endpoint, params = {}) =>
  api.get(params ? `${endpoint}${dataToQueryParameter(params)}` : endpoint);

const post = (endpoint, data = {}, isFormData = false) =>
  api.post(endpoint, isFormData ? jsonToFormdata(data) : data);

const put = (endpoint, data = {}) => api.put(endpoint, data);

const patch = (endpoint, data = {}) => api.patch(endpoint, data);

const del = (endpoint, data = {}) => api.delete(endpoint, { data });

export { get, post, put, patch, del };
