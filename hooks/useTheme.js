import { useState, useEffect } from "react";

export default function useTheme(){
  const [activeTheme, setActiveTheme] = useState("light");
  
  const toggleTheme = () => {
    setActiveTheme(activeTheme === "dark" ? "light" : "dark")
  }
  
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    savedTheme && setActiveTheme(savedTheme);
  }, []);
  
  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);
  
  return {
    activeTheme,
    toggleTheme
  }
  
}