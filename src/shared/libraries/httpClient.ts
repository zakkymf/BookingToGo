import axios from 'axios';

import {Alert} from 'react-native';

const httpClient = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
    'X-Parse-Application-Id': 'Rr9ZKgR2t2f49g5ueLWriacIrvKy8Hwv7P87FSw3',
    'X-Parse-REST-API-Key': '4C6gLjrbNGoym5m9j9mFQiDzXO5eETLxjUjY9Fzy',
  },
  data: {},
  timeout: 10000,
});

httpClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },

  async function (error) {
    if (error.message === 'Network Error') {
      Alert.alert(
        'Perhatian',
        'Tidak ada koneksi internet. Cek ulang koneksi Anda dan coba lagi.',
      );
    }
    return Promise.reject(error?.message);
  },
);

httpClient.interceptors.request.use(
  async config => {
    const newConfig = config;
    return newConfig;
  },
  error => {
    return Promise.reject(error);
  },
);

export {httpClient};
