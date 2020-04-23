import DataService from "../Api/DataService";
import axios from "axios";
export const USER_NAME_SESSION_ATTRIBUTE_NAME = "AuthenticatedUser";
class AuthenticationService {
  createUser(st) {
    console.log(st);
    return axios.post("http://localhost:8080//create-account", st);
  }

  AuthenticateUser(username, password) {
    // var user = "abhijit";
    // var pass = "tambe";
    // var ser = false;
    // ser = DataService.getAllUsers().then((res) => {
    //   res.data.filter((element) => {
    //     // console.log(element.userName);
    //     if(element.userName == username && element.password == password)
    //     return true;else
    //     return false;
    //   });
    // });

    return DataService.getAllUsers().then((res) => {
      res.data.filter((element) => {
        if (element.userName === username && element.password === password) {
          console.log(element);
          sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
          //   return true;
        }
        // console.log(element);
      });
    });

    // console.log("el" + el.);

    // if (user == username && pass == password) {
    //   sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    //   return true;
    // } else return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return false;
    return true;
  }

  userlogout() {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
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
