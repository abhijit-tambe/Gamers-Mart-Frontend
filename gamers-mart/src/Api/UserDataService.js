import axios from "axios";


class UserDataService{

    getAllUsers(){
        return axios.get("http://localhost:8080/alllistings");
    }

}

export default new UserDataService();