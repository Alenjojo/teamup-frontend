import axios, { handleResponce } from "../Utils/axios-instance";

export async function loginUser(payload) {
  return handleResponce(await axios.post(`user/login`, payload));
}
