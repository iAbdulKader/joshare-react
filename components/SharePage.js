import styles from "../styles/SharePage.module.css";
import QRCode from "react-qr-code";
import { FiCopy, FiFacebook } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useParams } from "react-router-dom";
import useUser from "../hooks/useUser";
import toast from "react-hot-toast";

export default function SharePage() {
  const { pin: userPin } = useUser();
  const { pin: paramPin } = useParams();
  const pin = userPin ? userPin : paramPin;
  
  const link = `${process.env.REACT_APP_CLIENT_URL}/files/${pin}`;
  const whatsAppLink = `https://api.whatsapp.com/send?text=Get My Files here. ${link}`;
  const telegramLink = `https://telegram.me/share/url?url=${link}&text=Get My Files Here.`;
  const fbLink = `https://www.facebook.com/sharer/sharer.php?u=${link}&quote=Get my files here.`
  const emailLink = `mailto:?subject=Get My Files Here&body= Hello, Get my files here ${link}`;
  
  
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
        <h3>Share<span className="highlight">.</span></h3>
      </div>
      
      <div className={styles.socialShare}>
        <div className={styles.icons}>
          <a href={whatsAppLink} target="_blank" rel="noreferrer">
            <AiOutlineWhatsApp />
          </a>
        </div>
        
        <div className={styles.icons}>
          <a href={telegramLink} target="_blank" rel="noreferrer">
            <FaTelegramPlane />
          </a>
        </div>
        
        <div className={styles.icons}>
          <a href={fbLink} target="_blank" rel="noreferrer">
            <FiFacebook />
          </a>
        </div>
        
        <div className={styles.icons}>
          <a href={emailLink}>
            <MdOutlineMarkEmailRead />
          </a>
        </div>
      </div>
    </div>
    )
}