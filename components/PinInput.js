import { useState, useRef } from "react";
import styles from "../styles/PinInput.module.css";
import toast from "react-hot-toast";
import useUser from "../hooks/useUser";
import { showError, hideError } from "../lib/errorShowHide";
import getUserByPin from "../lib/getUserByPin";
import { useRouter } from "next/router";
import LoadingSpiner from "./LoadingSpiner";
import { BiSearchAlt } from "react-icons/bi";

export default function PinInput() {
  const router = useRouter();
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const boxRef = useRef();
  
  const { pin: savedPin } = useUser();
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if(pin.length > 8 || pin.length <8){
      showError(boxRef)
      setError("Enter Valid 8 Digit Pin")
      toast.error("Enter Valid 8 Digit Pin");
    } else if(savedPin === pin) {
      router.push("/myfiles");
    } else {
      setLoading(true);
      let user = await getUserByPin(pin);
      if(user === true) {
        setLoading(false);
        router.push(`/files/${pin}`);
      } else {
        setLoading(false);
        showError(boxRef);
        setError("Invalid or Expired Pin.");
        toast.error("Invalid or Expired Pin.");
      }
    }
    
  }
  
  return (
    <div className={styles.inputWrapper}>
      <form 
        ref={boxRef} 
        className={styles.inputBox} 
        onSubmit={handleSubmit}
      >
        <div className={styles.inputContainer}>
          <input type="number" placeholder="Enter PIN" name="pin" value={pin} onChange={(e) => {
             setPin(e.target.value);
             setError("");
             hideError(boxRef);
          }} />
        </div>
        <div className={styles.buttonContainer}>
        {!loading ? 
          (<button type="submit">
              <BiSearchAlt style={{ verticalAlign: 'middle' }} />
           </button>) :
           (<div className="center">
              <LoadingSpiner className={styles.spiner} />
           </div>)}
        </div>
      </form>
      <div className={styles.errorInfo}>
      {error}</div>
    </div>
    )
}