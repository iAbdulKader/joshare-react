import { useState } from "react";
import styles from "../styles/EmailModal.module.css";
import Button from "./Button";

export default function EmailModal() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  
  return (
    <div className={styles.container}>
      <div className={styles.infoDiv}>
       <p>You can send only one email with one session<span className="highlight">.</span></p>
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