import styles from "../styles/File.module.css";

export default function NoFile({text}) {
  return (
    <div className={styles.container}>
      <div className={styles.noFileWrapper}>
        {text}
      </div>
    </div>
    );
}