import styles from "../styles/PinInput.module.css";

export function showError(element) {
  element.current.classList.add(styles.error);
  element.current.classList.add(styles.errorAnimate);
    
  setTimeout(function() {
      element.current.classList.remove(styles.errorAnimate)
  }, 350);
}

export function hideError(element) {
  element.current.classList.remove(styles.error);
  element.current.classList.remove(styles.errorAnimate);
}

