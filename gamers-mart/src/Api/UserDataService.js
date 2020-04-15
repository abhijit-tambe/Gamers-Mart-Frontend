import axios from 'axios'


class UserDataService{

    getAllUsers(){
        return axios.get("http://localhost:8080/users");
    }

}

export default new UserDataService();