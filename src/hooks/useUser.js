import cookie from "js-cookie";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const navigate = useNavigate();
  
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