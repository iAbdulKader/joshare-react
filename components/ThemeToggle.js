import styles from "../styles/ThemeToggle.module.scss";
import useTheme from "../hooks/useTheme";

export default function Theme() {
  const { activeTheme, toggleTheme } = useTheme();
  
  return <input onChange={toggleTheme} id="toggle" className={styles.toggle} type="checkbox" checked={activeTheme === "dark" ? true : false}  />
}