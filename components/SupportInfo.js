import styles from "../styles/SupportForm.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineTwitter } from "react-icons/ai";

export default function SupportInfo() {
  return(
    <div className={`${styles.container} ${styles.supportContainer}`}>
      <div className={styles.infoWrapper}>
        <h2>Contact Details</h2>
        <h4><HiOutlineMail style={{verticalAlign: "middle"}} /> : <a href="mailto:support@joshare.ml">support@joshare.xyz</a></h4>
        <h4><AiOutlineTwitter style={{verticalAlign: "middle"}} /> : <a href="https://twitter.com/itsabdulkader" target="_blank" rel="noreferrer">@itsabdulkader</a></h4>
      </div>
    </div>
    )
}
