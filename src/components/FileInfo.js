import { FileIcon, defaultStyles } from 'react-file-icon';
import styles from "../styles/File.module.css";

export default function FileInfo({icon}) {
  return(
    <div className={styles.fileInfoContainer}>
        <div className={`${styles.fileIcon} center`}>
          <FileIcon extension={icon} {...defaultStyles[icon]} />
        </div>
        
        <div className={styles.textContainer}>
          <input type="text" value="Some File.jpg" readOnly />
          <p>3.1MB</p>
        </div>
    </div>
    );
}