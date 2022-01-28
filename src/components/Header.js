import {useState} from "react"
import styles from "../styles/Header.module.css";
import Logo from "./Logo";
import Modal from "./Modal";
import SharePage from "./SharePage";
import CountDown from "./CountDown";
import ShareButton from "./ShareButton";

export default function Header() {
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
          <CountDown />
          <ShareButton toggle={toggle} />
        </div>
      </div>
    </>
    )
}