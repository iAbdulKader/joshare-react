import styles from "../styles/RemoveUserModal.module.css";
import { Button } from "./EmailModal";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function RemoveUserModal() {
  const navigate = useNavigate();
    
  const removeUser = () => {
    cookie.remove("token", { path: '' });
    
    setTimeout(function() {
      navigate("/")
    }, 900);
  }
  
  return (
    <div className={`${styles.container} horizontal_center`}>
      <div className={styles.text}>
        <p>By clearing this session you will be able to upload files and share them with new <span className="highlight">PIN</span> and also will be able to send another <span className="highlight">Email</span>.</p>
        <p>Although your current session&apos;s files won&apos;t get deleted before 24 hours unless you manually delete them while you are in that session. That means even after clearing this session your files can be downloaded with <span className="highlight">Share Link, QR Code</span> or with <span className="highlight">PIN</span> before they expires in 24 hours.</p>
      </div>
      
      <Button onClick={removeUser} text="Confirm Clear" />
    </div>
    )
}