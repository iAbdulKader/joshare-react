import { customAlphabet } from "nanoid";
import pLimit from 'p-limit';
import { useRef, useContext } from "react";
import calculateSize from "../lib/calculateSize";
import styles from "../styles/Upload.module.css";
import FileIcon from "./FileIcon";
import ProgressBars from "./ProgressBars";
import { GlobalContext } from "../contexts/GlobalContext";
import useUploadFile from "../hooks/useUploadFile";

export default function Upload() {
  let promises = [];
  const limit = pLimit(3);
  
  const fileRef = useRef();
  const { addStatus } = useContext(GlobalContext);
  const { uploadFile } = useUploadFile();
  
  const triggerFile = () => {
    fileRef.current.click()
  }
  
  
  const handleChange = async e => {
    
    for(let file of e.target.files){
      const ext = /(?:\.([^.]+))?$/.exec(file.name);
      const size = calculateSize(file.size);
      const id = customAlphabet("0123456789abcdefghijklmnopqrstuvwx", 5)();
      
      addStatus({
        id,
        ext,
        name: file.name,
        size,
        status: "none",
        progress: 0
      })
      
      const fileObj = {
        file,
        ext,
        id, 
        size,
      }
      promises.push(limit(() => uploadFile(fileObj)));
    }
    console.log("uploading")
    await Promise.all(promises)
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
               onChange={handleChange}
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