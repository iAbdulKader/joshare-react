import styles from "../styles/AddTimeModal.module.css";
import { Button } from "./EmailModal"

export default function AddTimeModal() {
  const options = []
  for (var i = 1; i <= 24; i++) {
    options.push(<option value={i} readOnly>{i} Hour</option>)
  }
  
  return (
    <div className={`${styles.container} horizontal_center`}>
      <div className={styles.text}>
        <p>Your files will be deleted autometically after 24 hours from creating your session. But You can extend this expiry time upto additional 24 hours. To add time select how many hours you want to extend and click Add Time. Although you can add time only once per session.</p>
      </div>
      
      <div className={styles.select}>
        <select name="hours">
          {options}
        </select>
      </div>
      
      <Button text="Add Time" />
    </div>
    )
}