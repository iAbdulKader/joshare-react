import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import styles from "../styles/RemoveUserModal.module.css";
import Button from "./Button";
import cookie from "js-cookie";

export default function RemoveUserModal() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const removeUser = () => {
    setLoading(true);
    toast.loading("User Removing")
    cookie.remove("token", { path: '' });
    
    setTimeout(function() {
      toast.remove();
      toast.success("User Removed");
      setLoading(false);
      router.push("/")
    }, 900);
  }
  
  return (
    <div className={`${styles.container} horizontal_center`}>
      <div className={styles.text}>
        <p>By clearing this session you will be able to upload files and share them with new <span className="highlight">PIN</span> and also will be able to send another <span className="highlight">Email</span>.</p>
        <p>Although your current session&apos;s files won&apos;t get deleted before 24 hours unless you manually delete them while you are in that session. That means even after clearing this session your files can be downloaded with <span className="highlight">Share Link, QR Code</span> or with <span className="highlight">PIN</span> before they expires in 24 hours.</p>
      </div>
      
      <Button 
        loading={loading}
        text="Remove User"
        handler={removeUser}
        divClass="utilityBtn"
      />
    </div>
    )
}