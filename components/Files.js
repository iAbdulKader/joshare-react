import { useContext } from "react";
import styles from "../styles/Files.module.css";
import File from "./File";
import NoFile from "./NoFile";
import { BallTriangle } from "react-loader-spinner";
import { GlobalContext } from "../contexts/GlobalContext";


export default function Files({ auth }) {
  const { files } = useContext(GlobalContext);
  
  return(
    <div className={styles.container}>
       {files.length === 0 ?  
        (<div className="loader_center">
           <BallTriangle
              color="var(--color-button-border)"
              height={100}
              width={100}
              timeout={30000000} 
           />
        </div>)
       : typeof files === "string"? 
        (<NoFile text={files} />)
       : (files.map(file => {
           return <File data={file} key={file.id} auth={auth} />
         }))
       }
    </div>
    )
}