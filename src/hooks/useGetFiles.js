import { useState, useEffect } from "react";

export default function useGetFiles(pin) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  
  useEffect(() => {
      const getFiles = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/api/files/${pin}`);
        
        const data = await response.json()
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