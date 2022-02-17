import { useContext } from "react";
import styles from "../styles/Files.module.css";
import File from "./File";
import { BallTriangle } from "react-loader-spinner";
import { GlobalContext } from "../contexts/GlobalContext";
import useGetFiles from "../hooks/useGetFiles";
import useUser from "../hooks/useUser";

export default function Files({ auth }) {
  const { files } = useContext(GlobalContext);
  const { pin } = useUser();
  const { loading } = useGetFiles(pin);
  
  return(
    <div className={styles.container}>
       {loading ?  
        (<div className="loader_center">
           <BallTriangle
              color="#ff5757"
              height={100}
              width={100}
              timeout={30000000} 
           />
        </div>)
       :
         (files.map(file => {
           return <File data={file} key={file.id} auth={auth} />
         }))
       }
    </div>
    )
}