import styles from "../styles/File.module.css";
import FileInfo from "./FileInfo";
import { HiOutlineDownload } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";

export default function File({auth=true}) {
  
  return(
    <div className={styles.container}>
      
      <FileInfo name="Some.png" ext="png" size="573" />
      
      <div className={styles.btnContainer}>
        {auth && <AiOutlineDelete className={styles.deleteBtn} />}
        <HiOutlineDownload className={styles.downloadBtn} />
      </div>
    </div>
    )
}