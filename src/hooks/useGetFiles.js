import { useState, useEffect } from "react";
import serverReq from "../lib/serverReq";

export default function useGetFiles(pin) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  
  useEffect(() => {
      const getFiles = async () => {
      try {
        const data = await serverReq(`/api/files/${pin}`, "GET");
        setLoading(false);
        setUser(data);
      } catch (e) {
        setLoading(false)
        setError(e.message)
      }
    }
    getFiles()
  
  }, [pin])
  
  return {
    loading,
    user,
    error
  }
}