import { useState, useEffect, useContext } from "react";
import styles from "../styles/ProgressBar.module.css";
import FileInfo from "./FileInfo";
import { GlobalContext } from "../contexts/GlobalContext";

export default function ProgressBar({ data }) {
  const [percent, setPercent] = useState(0);
  const { status } = useContext(GlobalContext)
  
  useEffect(() => {
    if(status.length > 0) {
      setPercent(status.filter(stat=> stat.id ===data.id)[0].progress);
    }
  }, [status, data.id])
  
  const barStyle = {
    transform: `scaleX(${percent/100})`
  }
  
  return(
      <div className={styles.wrapper}>
          <div
            style={barStyle}
            className={styles.progressBar}
          >
          </div>
          
          <div className={styles.upperSection}>
            <FileInfo name={data.name} size={data.size} ext={data.ext[1]} />
            <div>
              <h6>{percent} ℅</h6>
            </div>
          </div>
          
          <div 
            style={barStyle}
            className={styles.progressLine}
          >
          </div>
          
      </div>
    )
}