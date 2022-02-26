import { useState } from "react";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import serverReq from "../lib/serverReq";

export default function useSignUp() {
  const router = useRouter();
  
  const [loading, setLoading] = useState(false);
  
  const signup = async () => {
    setLoading(true);
    if(cookie.get("token")){
      setLoading(false);
      router.push("/myfiles");
    } else {
      toast.loading("Creating User Space");
      
      const data = await serverReq("/api/signup", "POST")
      
      if(data.success === "true") {
        cookie.set("token", data.token, {
          expires: 1
        })
        
        toast.remove();
        toast.success("Created User Space")
        setLoading(false);
        router.push("/myfiles");
      } else {
        toast.error("Something Went Wrong")
      }
    }
  }
  
  return { loading, signup }
}