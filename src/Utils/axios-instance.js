import axios from "axios";

//Global axios instance
const url = "https://backend-teamup.alenjojo.com/";
//const url = "http://localhost:2000/";
const instance = axios.create({
  baseURL: url,
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json;charset=utf-8",
  },
});
export default instance;

export function handleResponce(response) {
  if (response.status === 401) {
  }
  return response;
}
