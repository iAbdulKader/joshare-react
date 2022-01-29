import styles from "../styles/Files.module.css";
import File from "./File";
import { BallTriangle } from "react-loader-spinner";

export default function Files({auth}) {
  return(
    <div className={styles.container}>
       { true ?
       (
       <>
         <File auth={auth} />
         <File auth={auth} />
       </>
       ):
        (
        <div className="loader_center">
           <BallTriangle
              color="#ff5757"
              height={100}
              width={100}
              timeout={30000000} 
           />
        </div>)
       }
    </div>
    )
}