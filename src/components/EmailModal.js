import { useState, useContext } from "react"; 
import styles from "../styles/EmailModal.module.css";
import Button from "./Button";
import { GlobalContext } from "../contexts/GlobalContext";

export default function EmailModal() {
  const { emailSendNum } = useContext(GlobalContext);
  
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  
  return (
    <div className={styles.container}>
      <div className={styles.infoDiv}>
       <p>You can send {emailSendNum} {emailSendNum > 1 ? "emails" : "email"}<span className="highlight">.</span></p>
      </div>
      <div className={styles.inputDiv}>
        <p>Sender</p>
        <input type="text" value={from} onChange={(e)=>setFrom(e.target.value)} placeholder="Sender Name or Email (Optional)" />
      </div>
      
      <div className={styles.inputDiv}>
        <p>Receiver</p>
        <input type="email" value={to} onChange={(e)=>setTo(e.target.value)} placeholder="Receiver Email" />
      </div>
      
      <Button 
        text="Send Email"
        handler={()=>console.log("time")}
        divClass="utilityBtn"
      />
      
    </div>
    )
}