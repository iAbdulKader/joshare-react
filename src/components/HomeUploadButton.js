import styles from "../styles/HomeForm.module.css";

export default function HomeUploadButton() {
  return(
    <div className={styles.uploadBtn}>
      <button type="button">Upload Files</button>
    </div>
    )
}