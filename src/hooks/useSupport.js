import { useState } from "react";
import toast from "react-hot-toast";
import serverReq from "../lib/serverReq";

export default function useSupport() {
  const [loading, setLoading] = useState(false);
  const [error] = useState("");
  
  const submitSupport = async (obj) => {
    setLoading(true);
    
    try {
      const data = await serverReq("/api/support", "POST", "", obj)
      if(data.success === true){
        setLoading(false);
        toast.success("Submitted Successfully.")
      } else {
        setLoading(false);
        toast.error("Try Again")
      }
    } catch (e) {
      setLoading(false);
      toast.error("Try Again")
    }
  }
  
  return {
    loading,
    submitSupport,
    error
  }
}