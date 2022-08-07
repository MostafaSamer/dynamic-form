import axios from 'axios';

export default function apiCall(method, path, data = {}, _baseURL) {

  const BaseUrl = process.env.REACT_APP_API_URL

  axios.interceptors.request.use(req => {
    return req;
  });

  axios.interceptors.response.use(res => {
    return res.data? res.data : res;
  });


  return axios[method.toLowerCase()](_baseURL? _baseURL : BaseUrl + path, data)
    .then(res => {
      return Promise.resolve(res)
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}
