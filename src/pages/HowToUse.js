import { useEffect } from "react";
import Layout from "../layout";
import TutorialContainer from "../components/TutorialContainer";
import styles from "../styles/HowToUse.module.css";

export default function HowToUse() {
  useEffect(() => {
    document.title = "How To Use | joShare - File Sharing";
  }, [])
  
  return (
    <Layout>
      <div className="center">
        <div className={styles.headerBox}>
          <h2>How To Use<span className="highlight">.</span></h2>
          <div className={styles.headerLine}></div>
        </div>
      </div>
      
      <div style={{width: "90%", maxWidth: "600px", height: "100%", padding: "0", margin: "30px auto 50px auto" }}>
        <TutorialContainer img="1">
         <p>To <span className="highlight">Share</span> files press <span className="highlight">Upload Files</span>.</p>
         <p>This will take you to your dashboard where you will do everything.</p>
        </TutorialContainer>
        
        <TutorialContainer img="2">
         <p>This is the<span className="highlight"> File Upload</span> Box. Drag and Drop your Files or click <span className="highlight">Browse</span>.</p>
         <p>You can upload multiple files at once. But you can't upload files over 30MB.</p>
        </TutorialContainer>
        
        <TutorialContainer img="3">
         <p>After selecting file or files, your file(s) will get uploaded. You can see their progress..</p>
        </TutorialContainer>
        
        <TutorialContainer img="4">
         <p>After selecting and uploading files, you will see your fisee on dashboard like this.</p>
         <p>By pressing No.1 button you can delete an individual file(only the uploader can perform this task). By pressing No.2 button file will be downloaded.</p>
        </TutorialContainer>
        
        <TutorialContainer img="5">
         <p>No. 1 marked thing is your  <span className="highlight">PIN</span>. You have to use this PIN to share files with others. Remember this or copy by pressing copy button.</p>
         <p>No.2 is the countdown of how much time you have till the automatic deletion of files. Default is 24 Hours. Although you can extend this. We will talk about this later.</p>
        </TutorialContainer>
        
        <TutorialContainer img="6">
         <p>This is the share page. Here you can see that you can share your files by sharing QR code. you can see also a public sharing link which can be coped and send to anyone.</p>
         <p>You can also share files via Telegram, WhatsApp, Facebook,  Email etc.</p>
        </TutorialContainer>
        
        <TutorialContainer img="7">
         <p>Now if you want to share your files with anyone, send them the <span className="highlight">PIN</span>, you copied previously or <span className="highlight">Public Share Link</span> from sharing page.</p>
         <p>If anyone visits {process.env.REACT_APP_CLIENT_URL} and enters the pin you shared with them they will get access to your files.</p>
        </TutorialContainer>
        
        <TutorialContainer img="8">
         <p>Now this is the page they will see if they enter the <span className="highlight">PIN</span> you shared with them or if they come from your <span className="highlight">Public Share Link</span>.</p>
         <p>Then they can download those files.</p>
        </TutorialContainer>
        
        <TutorialContainer img="9">
         <p>Now some utility options. Here No. 1 is <span className="highlight">E-Mail Sender</span>. That means you can send your file's share link embedded emails to any one using our own <span className="highlight">STP Service</span>. Although you can send 2 Emails per session.</p>
         <p>No.2 is for extending Exipry time of files. Default is 24 Hours. Yes, also you can extend time total of 2 times maximum of 48 hours. And the 3rd buttin is for clearing the current session. It's kind of logout functionality but it permanently delete the user.</p>
        </TutorialContainer>
        
        <TutorialContainer img="10">
         <p>This is Email Sender. It's kind of self explanatory. You can see realtime how many emails you can send.</p>
        </TutorialContainer>
        
        <TutorialContainer img="11">
         <p>This is expiry time extending wizard. To extend time first have to select how many hours and then press <span className="highlight">Add Time</span>. You can also tract realtime how many times you can add additional time.</p>
        </TutorialContainer>
        
        <TutorialContainer img="12">
         <p>This is user session removal wizard. This is also self explanatory. Read the info displayed, gou will understand.</p>
        </TutorialContainer>
      </div>
    </Layout>
    )
}