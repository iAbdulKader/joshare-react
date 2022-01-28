import { useState } from "react";
import styles from "../styles/EmailModal.module.css";
import LoadingSpiner from "./LoadingSpiner"

export default function EmailModal() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  
  return (
    <div className={styles.container}>
      <div className={styles.infoDiv}>
       <p>You can send only one email with one session.</p>
      </div>
      <div className={styles.inputDiv}>
        <p>Sender</p>
        <input type="text" value={from} onChange={(e)=>setFrom(e.target.value)} placeholder="Sender Name or Email (Optional)" />
      </div>
      
      <div className={styles.inputDiv}>
        <p>Receiver</p>
        <input type="email" value={to} onChange={(e)=>setTo(e.target.value)} placeholder="Receiver Email" />
      </div>
      
      <Button text="Send" loading={false} />
      
    </div>
    )
}

export function Button ({text, loading}) {
  return (
    <div className={styles.buttonContainer}>
        { !loading ?
        (<button type="button">{text}</button>) :
        (<button>
          <LoadingSpiner className={styles.spiner} />
        </button>)}
      </div>
    )
}