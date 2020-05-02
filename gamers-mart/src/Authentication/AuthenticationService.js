import DataService from "../Api/DataService";
import axios from "axios";
import { API_URI } from "../Api/DataService.js";
export const USER_NAME_SESSION_ATTRIBUTE_NAME = "AuthenticatedUser";
const AUTH_TOKEN_NAME = "Token";
let interceptorValue;

class AuthenticationService {
  // inititalizeDummyData() {
  //   axios.post(`${API_URI}/`);
  // }
  createUser(st) {
    console.log(st);
    return axios.post(`${API_URI}/create-account`, st);
  }

  authenticateUser(username, password) {
    // var isAuthenticated = false;
    return axios.post(`${API_URI}/authenticate`, { username, password });
    // .then((res) => {
    //   console.log("res" + res);

    //   isAuthenticated = true;
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
    // return isAuthenticated;
  }

  createUserSessionWithToken(username, token) {
    // sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    // // state.user = username;
    // this.setupAxiosInterceptors(this.createJwtAuthenticationTokenValue(token));

    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    sessionStorage.setItem(AUTH_TOKEN_NAME, token);
    // console.log(res.data.token);
    // this.setupAxiosInterceptors(this.createJwtAuthenticationTokenValue());
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

  createJwtAuthenticationTokenValue() {
    return "Bearer " + sessionStorage.getItem(AUTH_TOKEN_NAME);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return false;
    return true;
  }

  authenticatedUserToken() {
    if (this.isUserLoggedIn()) {
      this.setupAxiosInterceptors(this.createJwtAuthenticationTokenValue());
    }
  }

  userlogout() {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    sessionStorage.removeItem(AUTH_TOKEN_NAME);
    axios.interceptors.request.eject(interceptorValue);
    console.log("logged out");
  }

  getUserName() {
    if (this.isUserLoggedIn()) {
      let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
      return user;
    } else return null;
  }

  addUserItem(data) {
    axios.post(`${API_URI}/items/${this.getUserName()}/add`, data);
  }

  removeUserItem(id) {
    axios.delete(`${API_URI}/items/${this.getUserName()}/delete/${id}`);
  }
}

export default new AuthenticationService();
