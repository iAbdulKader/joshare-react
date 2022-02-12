import styles from "../styles/HomeForm.module.css";
import useSignUp from "../hooks/useSignUp";


export default function HomeUploadButton() {
  const signup = useSignUp();
  
  return(
    <div className={styles.uploadBtn}>
      <button 
        type="button"
        onClick={signup}
      >Upload Files</button>
    </div>
    )
}