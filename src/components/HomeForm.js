import PinInput from "./PinInput";
import useSignUp from "../hooks/useSignUp";
import Button from "./Button";
import styles from "../styles/HomeForm.module.css";

export default function HomeForm() {
  const { loading, signup } = useSignUp();
  
  return (
    <div className={styles.HomeForm}>
      <PinInput />
      <div className={styles.uploadBtn}>
        <Button 
          handler={signup}
          loading={loading}
          text="Upload Files"
          divClass={styles.btnContainer}
        />
      </div>
    </div>
    )
}