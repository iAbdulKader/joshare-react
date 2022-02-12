import cookie from "js-cookie";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const navigate = useNavigate();
  
  let user = {};
  let token = cookie.get("token");
  let decodedToken = jwtDecode(token);
  
  if(token && decodedToken.pin && decodedToken.expire){
    user = {
      ...user,
      pin: decodedToken.pin,
      expire: decodedToken.expire
    }
  } else {
    setTimeout(function() {
      navigate("/")
    }, 800);
  }
  
  
  return user;
}