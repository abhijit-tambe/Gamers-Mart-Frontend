


export const USER_NAME_SESSION_ATTRIBUTE_NAME='AuthenticatedUser';
class AuthenticationService {

    AuthenticateUser(username,password){
        var user = 'abhijit';
        var pass = 'tambe';
        if(username === user && password === pass){
          sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME,username);
        }
    }


    isUserLoggedIn(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if(user===null)return false;
     return true;
    }

    userlogout(){
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        console.log('logged out');
    }


    getUserName(){
        if(this.isUserLoggedIn()){
            let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
            return user;
        }else
        return null; 
    }

}

export default new AuthenticationService();