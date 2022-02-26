import cookie from "js-cookie";
import { useState, useContext } from "react";
import toast from "react-hot-toast";
import { GlobalContext } from "../contexts/GlobalContext";
import serverReq from "../lib/serverReq";

export default function useAddTime() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { setAddTimeNum } = useContext(GlobalContext);

  const addTime = async (hour) => {
    const token = cookie.get("token");
    if(!token){
      toast.error("Uncaught Error");
      setError("Unauthorised")
      return null
    }
    
    try {
      setLoading(true)
      const data = await serverReq("/api/user/addtime", "POST", token, {hour});

      if(data.success === false){
        setLoading(false);
        setError(data.msg);
        toast.error(data.msg);
      } else {
        setLoading(false);
        setAddTimeNum(true);
        toast.success(`${hour} hours added successfully.`);
        cookie.set("token", data.token, {
          expires: new Date(data.expire)
        });
      }
      return data.expire;
    } catch (e) {
      setLoading(false);
      setError(e.message)
    }
  }
  
  return {
    loading,
    addTime,
    error
  }
}