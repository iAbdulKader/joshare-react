import { useState, useEffect } from "react";
import serverReq from "../lib/serverReq";

export default function useGetFiles(pin) {
  const [user, setUser] = useState({});
  
  useEffect(() => {
      const getFiles = async () => {
      try {
        const data = await serverReq(`/api/files/${pin}`, "GET");
        setUser(data);
      } catch (e) {
        console.log(e.message)
      }
    }
    getFiles()
  
  }, [pin])
  
  return {
    user,
  }
}