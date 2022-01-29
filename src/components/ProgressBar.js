import styles from "../styles/ProgressBar.module.css";

export default function ProgressBar({percent = 0}) {
  
  const barStyle = {
    transform: `scaleX(${percent/100})`
  }
  return(
    <div
      style={{display: `${percent===0?"none":"block"}`}}
      className={styles.container}
    >
      <div className={styles.wrapper}>
        <div
          style={barStyle}
          className={styles.progressBar}
        >
        </div>
        
        <div className={styles.infoText}>
          <p>Uploading..</p>
          <h6>{percent} %</h6>
          <div 
            style={barStyle}
            className={styles.progressLine}
          ></div>
        </div>
        
      </div>
    </div>
    )
}