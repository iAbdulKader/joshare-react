import Layout from "../layout";
import Link from "next/link";
import styles from "../styles/Error.module.css";
import ErrorSvg from "../components/ErrorSvg";
import Meta from "../components/Meta";

export default function Error() {
  
  return (
    <Layout>
     <Meta title="Not Found | joShare - File Sharing" />
     <div className={`${styles.container} horizontal_center`}>
       <ErrorSvg />
       
       <div className={`${styles.homeBtn} center`}>
         <Link href="/">Home</Link>
       </div>
      </div>
    </Layout>
    )
}