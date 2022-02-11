import { useRef } from "react";
import styles from "../styles/Upload.module.css";
import FileIcon from "./FileIcon";
import ProgressBars from "./ProgressBars";

export default function Upload() {
  const fileRef = useRef();
  const fileArr = [];
  
  const triggerFile = () => {
    fileRef.current.click()
  }
  
  const startUpload = e => {
    
    for(let file of e.target.files){
      fileArr.push(file)
    }
    console.log(fileArr)
  }
  
  return (
    <div className={styles.main}>
      <div className={`${styles.uploadWrapper} horizontal_center`}>
        <div className={styles.uploadDotted}>
          <div onDrag={triggerFile} className={styles.container}>
             <div className={styles.icons}>
               <FileIcon className={styles.right} />
               <FileIcon className={styles.left} />
               <FileIcon className={styles.center} />
             </div>
             <input 
               ref={fileRef} 
               type="file" 
               onChange={startUpload}
               multiple
             />
             <div className={styles.textContainer}>
              <h4>Drag & Drop Your Files Or <span style={{color: "#0288d1"}} onClick={triggerFile}>Browse</span></h4>
              <p>Max file size 30MB<span className="highlight">.</span></p>
             </div>
          </div>
        </div>
      </div>
      <ProgressBars />
    </div>
    )
}