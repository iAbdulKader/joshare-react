import cookie from "js-cookie";
import jwtDecode from "jwt-decode";

export default function useAuth() {
  let user = {};
  let token = cookie.get("token");
  
  if(token){
    let decodedToken = jwtDecode(token);
    
    if(decodedToken.pin && decodedToken.expire){
       user.pin = decodedToken.pin;
       user.expire = decodedToken.expire
    }
  }
    
  return user;
}