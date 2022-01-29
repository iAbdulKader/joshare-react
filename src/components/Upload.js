import { useRef } from "react";
import styles from "../styles/Upload.module.css";
import FileIcon from "./FileIcon";
import ProgressBar from "./ProgressBar";

export default function Upload() {
  const fileRef = useRef();
  
  const triggerFile = () => {
    fileRef.current.click()
  }
  
  return (
    <div className={styles.main}>
      <div className={`${styles.uploadWrapper} horizontal_center`}>
        <div className={styles.uploadDotted}>
          <div onDrag={triggerFile} className={`${styles.container} center`}>
             <div className={styles.icons}>
               <FileIcon className={styles.right} />
               <FileIcon className={styles.left} />
               <FileIcon className={styles.center} />
             </div>
             <input ref={fileRef} type="file" />
             <div>
              <h4>Drag & Drop Your Files Or <span style={{color: "#0288d1"}} onClick={triggerFile}>Browse</span></h4>
             </div>
          </div>
        </div>
      </div>
      <ProgressBar />
    </div>
    )
}