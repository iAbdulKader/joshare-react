import styles from "../styles/File.module.css";
import useDeleteFile from "../hooks/useDeleteFile";
import FileInfo from "./FileInfo";
import { HiOutlineDownload } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-hot-toast";
import Slide from 'react-reveal/Slide';

export default function File({ data, auth=true }) {
  
  const deleteFile = useDeleteFile();
  
  const deleteHandler = (id) => {
    toast.promise(
      deleteFile(id),
       {
         loading: 'Deleting...',
         success: "Deleted Successfully!",
         error: "Could Not Delete.",
       }
     );
  }
  
  const downloadLinkViewer = (link) => {
    window.open(link, "_blank")
  }
  
  return(
    <Slide bottom>
      <div className={styles.container}>
        
        <FileInfo name={data.fileName} ext={data.extName} size={data.size} />
        
        <div className={styles.btnContainer}>
          {auth && <AiOutlineDelete onClick={() => deleteHandler(data.id)} className={styles.deleteBtn} style={{verticalAlign: "middle"}} />}
            <HiOutlineDownload onClick={() => downloadLinkViewer(data.downloadUrl)} className={styles.downloadBtn} />
        </div>
      </div>
    </Slide>
    )
}