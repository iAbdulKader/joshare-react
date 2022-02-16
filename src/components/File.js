import styles from "../styles/File.module.css";
import FileInfo from "./FileInfo";
import { HiOutlineDownload } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";

export default function File({ data, auth=true }) {
  
  return(
    <div className={styles.container}>
      
      <FileInfo name={data.fileName} ext={data.extName} size={data.size} />
      
      <div className={styles.btnContainer}>
        {auth && <AiOutlineDelete className={styles.deleteBtn} />}
        <HiOutlineDownload className={styles.downloadBtn} />
      </div>
    </div>
    )
}