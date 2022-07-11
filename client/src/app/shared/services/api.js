import axios from 'axios';

export default function apiCall(method, path, data = {}, _baseURL) {

  const BaseUrl = process.env.REACT_APP_API_URL
  // const BaseUrlWithPort = "https://api.nextlevel-t.net";

  axios.interceptors.request.use(req => {
    // console.log(`${req.method} ${req.url}`);
    // Important: request interceptors **must** return the request.
    return req;
  });

  axios.interceptors.response.use(res => {
    // console.log(res);
    // Important: response interceptors **must** return the response.
    return res.data? res.data : res;
  });


  return axios[method.toLowerCase()](_baseURL? _baseURL : BaseUrl + path, data)
    .then(res => {
      return Promise.resolve(res)
    })
    .catch((err) => {
      // console.log(err);
      return Promise.reject(err);
    });
}
