import { useState } from "react";
import styles from "../styles/SupportForm.module.css";
import Button from "./Button";
import useSupport from "../hooks/useSupport";

export default function SupportForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  
  const { loading, submitSupport, error } = useSupport();
  
  const handlerFunc = async () => {
    let success = await submitSupport(name.trim(), email.trim(), description.trim())
    
    if(success === true){
      setName("")
      setEmail("")
      setDescription("")
    }
  }
  
  return(
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <p>If you have any problem or suggestion please fill the form below and submit. We will contact you shotly.</p>
        </div>
        
        <div className={styles.inputDiv}>
          <p>Name</p>
          <input 
            type="text" 
            value={name} 
            onChange={(e)=> {
              setName(e.target.value);
              error.name = "";
            }} 
            placeholder="Your Name" />
          <div className={styles.error}>{error.name}</div>
        </div>
        
        <div className={styles.inputDiv}>
          <p>Email</p>
          <input 
            type="email" 
            value={email} 
            onChange={(e)=> {
              setEmail(e.target.value);
              error.email = "";
            }} 
            placeholder="Your Email" />
          <div className={styles.error}>{error.email}</div>
        </div>
        
        <div className={styles.inputDiv}>
          <p>Description</p>
          <textarea 
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              error.description = "";
            }}
            placeholder="Description"
            rows={12}
          />
          <div className={styles.error}>{error.description}</div>
        </div>
        
        <Button 
          loading={loading}
          text="Submit"
          handler={handlerFunc}
          divClass="utilityBtn"
          style={{margin: "16px auto 0 auto"}}
        />
      </div>
    </div>
    )
}