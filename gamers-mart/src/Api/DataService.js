import axios from "axios";

export const API_URI = "http://localhost:8080";

class DataService {
  initialize() {
    axios.get(`${API_URI}/`);
  }

  getAllItemListings() {
    return axios.get(`${API_URI}/items/alllistings`);
  }

  getAllUserListings(username) {
    return axios.get(`${API_URI}/items/${username}/mylistings`);
  }

  getAllUsers() {
    return axios.get(`${API_URI}/user/allusers`);
  }
}

export default new DataService();
