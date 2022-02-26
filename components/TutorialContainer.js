import styles from "../styles/TutorialContainer.module.css";

export default function TutorialContainer({img, children}) {
  
  
  return (
    <div className={styles.tutorialContainer}>
      <div className={`${styles.imageContainer} center`}>

         <div className="center">
            <img 
              src={`/${img}.jpg`} 
              alt={`${img}.jpg`} 
            />
         </div>
        
      </div>
      
      <div className="vertical_center">
        <div className={styles.textContainer}>
          {children}
        </div>
      </div>
    </div>)
}