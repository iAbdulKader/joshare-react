import styles from "../styles/TutorialContainer.module.css";
import useImage from "../hooks/useImage";

export default function TutorialContainer({img, children}) {
  const { loading, image } = useImage(img);
  
  return (
    <div className={styles.tutorialContainer}>
      <div className={`${styles.imageContainer} center`}>
        { loading ? 
         (<div>
           <h4>Loading</h4>
         </div>) :
         (<div className="center">
            <img src={image} alt={`${img}.jpg`} />
         </div>)
        }
      </div>
      
      <div className="vertical_center">
        <div className={styles.textContainer}>
          {children}
        </div>
      </div>
    </div>)
}