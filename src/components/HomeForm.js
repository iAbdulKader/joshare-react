import PinInput from "./PinInput";
import HomeUploadButton from "./HomeUploadButton";
import styles from "../styles/HomeForm.module.css";

export default function HomeForm() {
  return (
    <div className={styles.HomeForm}>
      <PinInput />
      <HomeUploadButton />
    </div>
    )
}