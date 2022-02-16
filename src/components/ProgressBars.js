import { useContext } from "react";
import ProgressBar from "./ProgressBar";
import styles from "../styles/ProgressBar.module.css";
import { GlobalContext } from "../contexts/GlobalContext";

export default function ProgressBars () {
  const { status } = useContext(GlobalContext);
  
  
  return(
    <div className={styles.container}>
     {status.map(fileInfo => <ProgressBar data={fileInfo} key={fileInfo.id} />)}
    </div>
    )
}