import axios from "axios";
// GET-API call
export function get(url) {
  return axios.get(`${process.env.PUBLIC_URL}${url}`);
}

// POST-API call
export function post(url, data) {
  return axios.post(`${process.env.PUBLIC_URL}${url}`, data);
}
