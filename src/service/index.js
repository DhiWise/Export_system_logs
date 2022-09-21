import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {
    Authorization:
      "Bearer d2cb4904aa104c0ca50310530d9a08e87efee3dee7114553a60fda07f528261c",
    "content-type": "application/json",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export function apiClient(method, url, options = {}) {
  const { data = {}, headers = {}, params = {}, ...rest } = options;
  return defaultAxios({
    url,
    data,
    method,
    params,
    headers,
    ...rest,
  });
}

export const apis = {
  get: (url, args) => apiClient("get", url, args),
  post: (url, args) => apiClient("post", url, args),
  put: (url, args) => apiClient("put", url, args),
  patch: (url, args) => apiClient("patch", url, args),
  delete: (url, args) => apiClient("delete", url, args),
};
