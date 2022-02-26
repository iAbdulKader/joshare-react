import { useEffect, useState } from "react";

export default function useImage(imgId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  
  useEffect(() => {
    const fetchImg = async () => {
      try {
        const response = await import(`../assets/${imgId}.jpg`)
        setLoading(false);
        setImage(response.default);
      } catch (e) {
        setLoading(false);
        setError(true)
      }
    }
    
    fetchImg();
  }, [imgId])

  return {
    loading,
    error,
    image
  }
}