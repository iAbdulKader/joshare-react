import { useContext, Fragment } from "react";
import ProgressBar from "./ProgressBar";
import styles from "../styles/ProgressBar.module.css";
import { GlobalContext } from "../contexts/GlobalContext";
import Slide from 'react-reveal/Slide';

export default function ProgressBars () {
  const { status } = useContext(GlobalContext);
  
  
  return(
    <div className={styles.container}>
     {status.map(fileInfo => {
       return (
       <Fragment key={fileInfo.id}>
         <Slide top>
          <ProgressBar data={fileInfo} />
         </Slide>
       </Fragment>
     )})}
    </div>
    )
}