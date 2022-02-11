import ProgressBar from "./ProgressBar";
import styles from "../styles/ProgressBar.module.css";

export default function ProgressBars () {
  return(
    <div className={styles.container}>
      <ProgressBar />
    </div>
    )
}