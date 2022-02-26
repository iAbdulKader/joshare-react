import cookie from "js-cookie";
import { useState, useContext } from "react";
import toast from "react-hot-toast";
import { GlobalContext } from "../contexts/GlobalContext";
import serverReq from "../lib/serverReq";

export default function useSendEmail() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { emailSendNum, setEmailSendNum } = useContext(GlobalContext);
  
  
  const sendEmail = async (from, to, setFrom, setTo) => {
    const token = cookie.get("token");
    
    if(!token){
      toast.error("Uncaught Error");
      setError("Unauthorised")
      return null
    }
    
    if(emailSendNum === 0) {
      toast.error("Email Sending Limit Exceeded.")
      return;
    }
    if(!(/^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(to.trim()))){
      toast.error("Invalid Email.")
      return;
    }
    
    try {
      setLoading(true);
      let data = await serverReq("/api/user/email", "POST", token, {
        from: from.trim(),
        to: to.trim()
      })
      
      if(data.success === true) {
        setLoading(false);
        setEmailSendNum(true);
        setFrom("");
        setTo("");
        toast.success("Email Sent Successfully.");
      } else {
        setLoading(false);
        setError(data.msg);
        toast.error(data.msg);
      }
      
      return data.emailSendNum;
      
    } catch (e) {
      toast.error("Uncaught Erorr")
      console.log(e.message)
    }
  }
  
  return {
    loading,
    sendEmail,
    error
  }
}