import AlternateLayout from "../layout/AlternateLayout";
import styles from "../styles/Error.module.css";
import ErrorSvg from "../components/ErrorSvg";

export default function Error() {
  return (
    <AlternateLayout>
     <div>
       <ErrorSvg />
      </div>
    </AlternateLayout>
    )
}