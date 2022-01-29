import {useState} from "react"
import styles from "../styles/Header.module.css";
import Logo from "./Logo";
import Modal from "./Modal";
import SharePage from "./SharePage";
import CountDown from "./CountDown";
import ShareButton from "./ShareButton";
import UploadButton from "./UploadButton"

export default function Header({ showUpload = false }) {
  const [show, setShow] = useState(false)
  
  const toggle = () => {
    console.log("hey")
    setShow(!show)
  }
  return(
    <>
      <Modal 
        show={show} 
        toggle={toggle}
        background="#fff"
      >
        <SharePage />
      </Modal>
    
      <div className={styles.header}>
        <div style={{marginLeft: "5%"}}>
          <Logo fontSize=".7rem" />
        </div>
        
        <div className={styles.buttonContainer}>
          {!showUpload ? 
          (<>
            <CountDown />
            <ShareButton toggle={toggle} />
            </>):
            (<UploadButton />)}
        </div>
        
      </div>
    </>
    )
}