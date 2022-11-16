import styles from "../styles/ThemeToggle.module.scss";
import { useState, useEffect } from "react";

export default function Theme() {
  const [activeTheme, setActiveTheme] = useState("");

    const toggle = () => {
        console.log("clicked");
        setActiveTheme(activeTheme === "dark" ? "light" : "dark")
    }

  
      useEffect(() => {

        if(window.localStorage.getItem("theme")) {
          setActiveTheme(window.localStorage.getItem("theme"))
        }

        if(activeTheme === "light") {
            document.body.dataset.theme = activeTheme;
            localStorage.theme = "light";
            setActiveTheme("light")
        } 
        
        if(activeTheme === "dark") {
            setActiveTheme("dark")
            localStorage.theme = "dark";
            document.body.dataset.theme = activeTheme;
        }

      }, [activeTheme]);

  
  return <input onChange={toggle} id="toggle" className={styles.toggle} type="checkbox" checked={activeTheme === "dark" ? true : false}  />
}