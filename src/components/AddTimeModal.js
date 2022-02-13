import { useState } from "react";
import styles from "../styles/AddTimeModal.module.css";
import toast from "react-hot-toast";
import Button from "./Button";
import useAddTime from "../hooks/useAddTime";

export default function AddTimeModal() {
  const { loading, addTime } = useAddTime();
  const [hour, setHour] = useState(0);
  
  const options = []
  for (var i = 1; i <= 24; i++) {
    options.push(<option value={i} key={i} readOnly>{i} Hour</option>)
  }
  
  const addTimeHandler = () => {
    if(hour > 0) {
      addTime(hour)
    } else {
      toast.error("Select Time First.")
    }
  }
  
  return (
    <div className={`${styles.container} horizontal_center`}>
      <div className={styles.text}>
        <p>Your files will be deleted autometically after <span className="highlight">24 hours</span> from creating your session. But You can <span className="highlight">extend</span> this expiry time upto additional <span className="highlight">24 hours</span>. To add time select how many hours you want to extend and click Add Time. Although you can add time <span className="highlight">only once per session</span>.</p>
      </div>
      
      <div className={styles.select}>
        <select 
        name="hours" 
        onChange={(e) => setHour(e.target.value)}
        value={hour}
      >
          <option value="0" key="0" readOnly>Select Time</option>
          {options}
        </select>
      </div>
      
      <Button 
        loading={loading}
        text="Add Time"
        handler={addTimeHandler}
        divClass="utilityBtn"
      />
    </div>
    )
}