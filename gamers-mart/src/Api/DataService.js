import axios from "axios";

class DataService {
  getAllItemListings() {
    return axios.get("http://localhost:8080/alllistings");
  }

  getAllUserListings(username) {
    return axios.get(`http://localhost:8080/users/${username}/mylistings`);
  }

  getAllUsers() {
    return axios.get("http://localhost:8080/users");
  }
}

export default new DataService();
