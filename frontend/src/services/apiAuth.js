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
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + response.data.access_token;
    localStorage.setItem("token", response.data.access_token);
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

export async function getCurrentUser() {
  try {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      throw new Error("No token found in local storage");
    }

    // Make a GET request to the backend endpoint
    const response = await axios.get(`${BASE_URL}/api/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Return the user data
  } catch (error) {
    // Handle errors, such as network errors or invalid tokens
    console.error("Error fetching current user:", error);
    throw error; // Propagate the error to the caller
  }
}
