import cookie from "js-cookie";
import { useState, useContext } from "react";
import toast from "react-hot-toast";
import { GlobalContext } from "../contexts/GlobalContext";

export default function useAddTime() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { setAddTimeNum } = useContext(GlobalContext);

  const addTime = async (hour) => {
    const token = cookie.get("token");
    if(!token){
      toast.error("Uncaught Error")
      return null
    }
    
    try {
      setLoading(true)
      const response = await fetch(`${process.env.REACT_APP_SERVER}/api/user/addtime`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({hour})
      })
      
      const data = await response.json();
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