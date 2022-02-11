import styles from "../styles/File.module.css";
import { FileIcon, defaultStyles } from 'react-file-icon';
import { HiOutlineDownload } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";

export default function File({auth=true}) {
  let icon = "jpg";
  
  return(
    <div className={styles.container}>
      
      <div className={styles.fileInfoContainer}>
        <div className={`${styles.fileIcon} center`}>
          <FileIcon extension="jpg" {...defaultStyles[icon]} />
        </div>
        
        <div className={styles.textContainer}>
          <input type="text" value="Some File.jpg" readOnly />
          <p>3.1MB</p>
        </div>
      </div>
      
      <div className={styles.btnContainer}>
        {auth && <AiOutlineDelete className={styles.deleteBtn} />}
        <HiOutlineDownload className={styles.downloadBtn} />
      </div>
    </div>
    )
}