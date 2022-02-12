import { useState } from "react";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useSignUp() {
  const navigate = useNavigate();
  const serverUrl = process.env.REACT_APP_SERVER;
  
  const [loading, setLoading] = useState(false);
  
  const signup = async () => {
    setLoading(true);
    if(cookie.get("token")){
      setLoading(false);
      navigate("/myfiles");
    } else {
      toast.loading("Creating User Space");
      
      const response = await fetch(`${serverUrl}/api/signup`, {
        method: "POST"
      })
      let data = await response.json();
      
      if(data.success === "true") {
        cookie.set("token", data.token, {
          expires: 1
        })
        
        toast.remove();
        toast.success("Created User Space")
        setLoading(false);
        navigate("/myfiles");
      } else {
        toast.error("Something Went Wrong")
      }
    }
  }
  
  return { loading, signup } ;
}