import styles from "../styles/File.module.css";
import { HiOutlineDownload } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";

export default function File() {
  return(
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <input type="text" value="Some File.jpg" readOnly />
        <p>3.1MB</p>
      </div>
      
      <div className={styles.btnContainer}>
        <AiOutlineDelete className={styles.deleteBtn} />
        <HiOutlineDownload className={styles.downloadBtn} />
      </div>
    </div>
    )
}