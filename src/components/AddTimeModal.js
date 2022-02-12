import styles from "../styles/AddTimeModal.module.css";
import Button from "./Button";

export default function AddTimeModal() {
  const options = []
  for (var i = 1; i <= 24; i++) {
    options.push(<option value={i} key={i} readOnly>{i} Hour</option>)
  }
  
  return (
    <div className={`${styles.container} horizontal_center`}>
      <div className={styles.text}>
        <p>Your files will be deleted autometically after <span className="highlight">24 hours</span> from creating your session. But You can <span className="highlight">extend</span> this expiry time upto additional <span className="highlight">24 hours</span>. To add time select how many hours you want to extend and click Add Time. Although you can add time <span className="highlight">only once per session</span>.</p>
      </div>
      
      <div className={styles.select}>
        <select name="hours">
          {options}
        </select>
      </div>
      
      <Button 
        text="Add Time"
        handler={()=>console.log("time")}
        divClass="utilityBtn"
      />
    </div>
    )
}