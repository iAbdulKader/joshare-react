import { useState } from "react";
import toast from "react-hot-toast";
import serverReq from "../lib/serverReq";

export default function useSupport() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  let desLimit = 15;
  
  const validation = (name, email, description) => {
      let isName = true, isEmail = true, isDescription = true;
      let characters = 0;
      
      if(!name || name.length < 4){
        isEmail = false;
        setError((previous) => {
          return {
            ...previous,
            name: "Provide a valid name. Must contain 3 or more characters."
          }
        })
      }
      
      if(!(/^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))){
        setError((previous) => {
          return {
            ...previous,
            email: "Invalid Email"
          }
        })
      }
      
      if(description){
        characters = description.split(" ").join("").length;
      }
      if(!description || characters < desLimit){
        isDescription = false;
        setError((previous) => {
          return {
            ...previous,
            description: `Minimum 15 characters. you have to provide at least ${desLimit - characters} or more characters.`
          }
        })
      }
      
      return {
        isName,
        isEmail,
        isDescription
      }
    }
  
  const submitSupport = async (name, email, description) => {
     
    let { isName, isEmail, isDescription } = validation(name, email, description)
    
     if(!isName || !isEmail || !isDescription) {
       return false;
     } else {
      setLoading(true);
      
      try {
        const data = await serverReq("/api/support", "POST", "", {
          name,
          email,
          description
        })
        if(data.success === true){
          setLoading(false);
          toast.success("Submitted Successfully.");
          return true;
        } else {
          setLoading(false);
          toast.error("Try Again")
        }
      } catch (e) {
        setLoading(false);
        toast.error("Try Again")
      }
    }
  }
  
  return {
    loading,
    submitSupport,
    error
  }
}
