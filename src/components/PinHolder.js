import { FiCopy } from "react-icons/fi";
import styles from "../styles/PinHolder.module.css";
import toast from 'react-hot-toast';

export default function PinHolder({pin = "46777654"}) {
  
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(pin)
    toast.success("copied")
  }
  
  return (
    <div className={styles.pinContainer}>
      <input type="text" value={pin} readOnly />
      <FiCopy className={styles.copyBtn} onClick={copyToClipBoard} />
    </div>
    )
}