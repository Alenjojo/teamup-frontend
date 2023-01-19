import axios, { handleResponce } from "../Utils/axios-instance";

export async function loginUser(path, body, navigate) {
  try {
    const response = await axios.post(path, body);
    localStorage.setItem("user-data", JSON.stringify(response.data));
    navigate("/home");
  } catch (error) {
    //throw error;
  }
}

export const getData = async (path, body, navigate) => {
  try {
    const response = await axios.get(path, body);
    return response;
  } catch (error) {
    handleResponce(error.response, navigate);
    //throw error;
  }
};

export const postData = async (path, body, navigate) => {
  try {
    const response = await axios.post(path, body);
    return response;
  } catch (error) {
    handleResponce(error.response, navigate);
    //throw error;
  }
};
