import styles from "../styles/File.module.css";
import useDeleteFile from "../hooks/useDeleteFile";
import FileInfo from "./FileInfo";
import { HiOutlineDownload } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";

export default function File({ data, auth=true }) {
  
  const deleteFile = useDeleteFile();
  
  const downloadLinkViewer = (link) => {
    window.open(link, "_blank")
  }
  
  return(
    <div className={styles.container}>
      
      <FileInfo name={data.fileName} ext={data.extName} size={data.size} />
      
      <div className={styles.btnContainer}>
        {auth && <AiOutlineDelete onClick={() => deleteFile(data.id)} className={styles.deleteBtn} style={{verticalAlign: "middle"}} />}
          <HiOutlineDownload onClick={() => downloadLinkViewer(data.downloadUrl)} className={styles.downloadBtn} />
      </div>
    </div>
    )
}