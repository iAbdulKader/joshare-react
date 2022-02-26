import styles from "../styles/Modal.module.css";

export default function Modal({children, background , show, toggle, overflow}) {
  
  const customStyle = {
     transform: `translate(-50%,-50%) scale(${show?1:0})`,
     background: background,
     overflowY: `${overflow ? "auto": ""}`
  }
  return (
    <>
      <div 
        onClick={toggle}
        style={{display: `${show ? "block" : "none"}`}} 
        className={`${styles.overlay} center`}
      ></div>
      <div 
          style={customStyle}
          className={styles.container}
        >
        
          <div className={styles.closeBtn}>
            <div 
              onClick={toggle} 
              className={`${styles.closeBox} center`}
            >
              &times;
            </div>
          </div>
          
          <div>
            {children}
          </div>
          
      </div>
    </>
    )
}