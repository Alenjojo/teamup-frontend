import axios from "axios";

//Global axios instance
const instance = axios.create({
  baseURL: "https://backend-teamup.alenjojo.com/",
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json;charset=utf-8",
  },
});
export default instance;
