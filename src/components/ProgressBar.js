import styles from "../styles/ProgressBar.module.css";
import FileInfo from "./FileInfo";

export default function ProgressBar({ percent = 66 }) {
  let icon = "docx";
  
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
            <FileInfo icon={icon} />
            <div>
              <h6>{percent} %</h6>
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