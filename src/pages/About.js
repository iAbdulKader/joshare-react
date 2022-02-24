import { useEffect } from "react";
import styles from "../styles/About.module.css";
import Layout from "../layout";
import { PageHeader } from "./HowToUse.js";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { FaDev } from "react-icons/fa";

export default function About() {
  useEffect(() => {
    document.title = "About | joShare - File Sharing"
  }, [])
  
  return (
    <Layout>
      <PageHeader text="About" />
      
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo fontSize="20px" />
        </div>
        
        <div className={styles.textBox}>
          <h3>What is joShare ?</h3>
          <p>joShare is a micro file sharing platform. Now what do I mean by micro file sharing?? <br /><br />By micro file sharing I mean that you can share small size (below 30 Mega Bytes) files with anyone. Files like pdf, docs, pptx, cvs, jpg, jpeg, png etc can be shared with others. How does joShare works?? <Link to="/howtouse">Read This</Link></p>
        </div>
        
        <div className={styles.textBox}>
          <h3>Why joShare ?</h3>
          <p>Because joShare is very portable, light-weight and easy to use tool. <br /><br />If ever we have to send some files to print shops and print our files, then we have to either mail them our files or send via usb, which are not very easy to do and also cumbersome. In situation like this joShare comes realy handy. <br /><br />You can upload your desired files to joShare and copy or note down <span className="highlight">PIN</span> provided by joShare and give that to the print shop owner and then he/she can download your files easily.</p>
        </div>
        
        <div className={styles.textBox}>
          <h3>Advances of joShare.</h3>
          <p>As we discussed before, with joShare you can share files with anybody. Also you will get some other facilities.<br /><br />You can send anyone email from our very own STP service. Although currently you can send 2 emails per session.<br /><br />Your files will be automatically deleted after 24 Hours from creation. Although you can extend this time 2 times by additional 48 Hours Max using utility pannel.<br /><br />Also you can delete your session at any time. You will get dedicated sharing page with QR code, public share link and other social sharing options. See dashboard for more.</p>
        </div>
        
        <div className={styles.textBox}>
          <h3>Caution !</h3>
          <p>Do not upload sensitive files. Don't upload copyrighted contents. We can't guarantee any uncaught error or server crash.<br /><br />Your Files will get automatically deleted after expiry time which is shown on dashboard's countdown.<br /><br />For more about Privacy related info <Link to="/terms">Read This</Link></p>
        </div>
        
        <div className={styles.adminInfo}>
          <div className={styles.adminText}>
            <h3>Created By</h3>
            <h4>Abdul Kader</h4>
          </div>
          <div className={styles.adminLink}>
            <a href="https://github.com/iAbdulKader" target="_blank" rel="noreferrer"><AiOutlineGithub /></a>
            <a href="https://twitter.com/itsabdulkader" target="_blank" rel="noreferrer"><AiOutlineTwitter /></a>
            <a href="https://dev.to/itsabdulkader" target="_blank" rel="noreferrer"><FaDev /></a>
          </div>
        </div>
      </div>
    </Layout>
    )
}