import styles from "../styles/SharePage.module.css";
import QRCode from "react-qr-code";
import { FiCopy } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import toast from "react-hot-toast";

export default function SharePage() {
  const link = "https://joshare.ml/files/35678764";
  
  const copy = () => {
    navigator.clipboard.writeText(link)
    toast.success("Copied")
  }
  
  return(
    <div className={`${styles.container} horizontal_center`}>
      <div className={styles.qrContainer}>
        <QRCode 
          value={link}
          size={128}
        />
      </div>
      
      <div className={styles.linkDisplay}>
        <input type="text" value={link} readOnly />
        <div onClick={copy}>
          <FiCopy style={{verticalAlign: "middle"}} />
        </div>
      </div>
      
      <div className={styles.shareText}>
        <h3>Share</h3>
      </div>
      
      <div className={styles.socialShare}>
        <div className={styles.icons}>
          <AiOutlineWhatsApp />
        </div>
        
        <div className={styles.icons}>
          <BsTelegram />
        </div>
        
        <div className={styles.icons}>
          <RiMessengerLine />
        </div>
        
        <div className={styles.icons}>
          <MdOutlineMarkEmailRead />
        </div>
      </div>
    </div>
    )
}