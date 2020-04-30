import DataService from "../Api/DataService";
import axios from "axios";
import { API_URI } from "../Api/DataService.js";
export const USER_NAME_SESSION_ATTRIBUTE_NAME = "AuthenticatedUser";
let interceptorValue;
class AuthenticationService {
  createUser(st) {
    console.log(st);
    return axios.post("http://localhost:8080//create-account", st);
  }

  authenticateUser(username, password) {
    return axios.post(`${API_URI}/authenticate`, { username, password });
  }

  createUserSessionWithToken(username, token) {
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    this.setupAxiosInterceptors(this.createJwtAuthenticationTokenValue(token));
  }

  setupAxiosInterceptors(authorizationToken) {
    interceptorValue = axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = authorizationToken;
      }
      return config;
    });
    console.log("interceptor" + interceptorValue);
  }

  createJwtAuthenticationTokenValue(token) {
    return "Bearer " + token;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return false;
    return true;
  }

  userlogout() {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    console.log("before eject" + interceptorValue);
    axios.interceptors.request.eject(interceptorValue);
    console.log("logged out");
  }

  getUserName() {
    if (this.isUserLoggedIn()) {
      let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
      return user;
    } else return null;
  }
}

export default new AuthenticationService();
