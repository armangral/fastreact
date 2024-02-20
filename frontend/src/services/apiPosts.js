import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export async function createpost(data) {
  try {
    console.log("Request payload:", data);
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      throw new Error("No token found in local storage");
    }

    const response = await axios.post(`${BASE_URL}/create`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(error.response.data.detail || "Failed to create post");
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error("No response received from server");
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error("Error setting up the request");
    }
  }
}

export async function getposts() {
  try {
    // console.log("Request payload:", data);
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      throw new Error("No token found in local storage");
    }

    const response = await axios.get(`${BASE_URL}/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw new Error(error.response.data.detail || "Failed to fetch posts");
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error("No response received from server");
    } else {
      // Something happened in setting up the request that triggered an Error
      throw new Error("Error setting up the request");
    }
  }
}
