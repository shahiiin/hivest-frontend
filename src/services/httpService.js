import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  // TODO: setup interceptor here
});

export default {
  post: axios.post,
  get: axios.get,
  put: axios.put, // put / patch
  delete: axios.delete,
};
