import { useState, useEffect } from "react";
import { Watch } from "react-loader-spinner";
import styles from "../styles/Header.module.css";

export default function CountDown({expireDate}) {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [expired, setExpired] = useState(false);
  
  useEffect(() => {
    const expireTime = Date.parse(expireDate);
    
    function countDown(){
      const nowTime = new Date().getTime();
      let gap = expireTime - nowTime;
      
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
        
      let h = Math.floor(gap / hour);
      let m = Math.floor((gap % (hour)) / (minute));
      let s = Math.floor((gap % (minute)) / (second));
        
      var hr = h < 10 ? "0" + h : h;
      var mn = m < 10 ? "0" + m : m;
      var sc = s < 10 ? "0" + s : s;
        
      if (h < 0 || h == null){
         setExpired(true)
      } else {
         setHours(hr);
         setMinutes(mn);
         setSeconds(sc);
         setExpired(false);
      } 
    };
    
    countDown();
    const interval = setInterval(() => {
      countDown();
    }, 1000);
    
    return () => clearInterval(interval);
  }, [expireDate])
  
  return(
    <div className={styles.coundownContainer}>
     {!expireDate ? (
     <Watch 
        color="#ff5757"
        height={30}
        width={30}
        timeout={30000000}
      /> 
     ) : !expired ? (
     <h4>
     {hours}:{minutes}:{seconds}
     </h4>
     ) : (
     <h4>Expired</h4>
     )}
    </div>
    )
}