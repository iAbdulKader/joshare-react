import AlternateLayout from "../layout/AlternateLayout";
import { Link } from "react-router-dom";
import styles from "../styles/Error.module.css";
import ErrorSvg from "../components/ErrorSvg";

export default function Error() {
  return (
    <AlternateLayout>
     <div className={`${styles.container} horizontal_center`}>
       <ErrorSvg />
       
       <div className={`${styles.homeBtn} center nonAuthButton`}>
         <Link to="/">Home</Link>
       </div>
      </div>
    </AlternateLayout>
    )
}