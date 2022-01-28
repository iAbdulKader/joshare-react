import { AiOutlineShareAlt } from "react-icons/ai";
import styles from "../styles/ShareButton.module.css";

export default function ShareButton({ toggle }) {
  return(
    <div 
      onClick={toggle}
      className={styles.shareBox}
    >
      <AiOutlineShareAlt 
        style={{verticalAlign: "middle", marginRight: "2px"}} 
      />
    </div>
    )
}