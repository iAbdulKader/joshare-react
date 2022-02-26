import { FileIcon, defaultStyles } from 'react-file-icon';
import styles from "../styles/File.module.css";

export default function FileInfo({name, size, ext}) {
  return(
    <div className={styles.fileInfoContainer}>
        <div className={`${styles.fileIcon} center`}>
          <FileIcon extension={ext} {...defaultStyles[ext || "docx"]} />
        </div>
        
        <div className={styles.textContainer}>
          <input type="text" value={name} readOnly />
          <p>{size}</p>
        </div>
    </div>
    );
}