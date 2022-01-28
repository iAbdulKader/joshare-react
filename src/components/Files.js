import styles from "../styles/Files.module.css";
import File from "./File";

export default function Files() {
  return(
    <div className={styles.container}>
     <File />
     <File />
    </div>
    )
}