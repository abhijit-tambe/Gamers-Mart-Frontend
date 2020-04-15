import UserDataService from '../Api/UserDataService.js'


export const USER_NAME_SESSION_ATTRIBUTE_NAME='AuthenticatedUser';
class AuthenticationService {

    AuthenticateUser(username,password){
        var user = 'abhijit';
        var pass = 'tambe';
        //  UserDataService.getAllUsers()
        // .then(res=>{
        //     res.data.filter(x=>{
        //       if(x.userName=== username && x.password===password){
        //         console.log(x.password);
        //         sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username);
        //         }
        //       })})
        if(username === user && password === pass){
          sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username);
        }
    }


    isUserLoggedIn(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if(user===null)return false
     return true
    }

    userlogout(){
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        console.log('logged out')
       
    }

}

export default new AuthenticationService();