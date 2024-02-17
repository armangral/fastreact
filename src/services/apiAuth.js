import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export async function login(data) {
  const { username, password } = data;
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);

  try {
    console.log("Request payload:", data);
    const response = await axios.post(`${BASE_URL}/login`, formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(error.response.data.detail || "Failed to log in");
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error("No response received from server");
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error("Error setting up the request");
    }
  }
}
