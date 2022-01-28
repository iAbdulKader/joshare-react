import styles from "../styles/ThemeButton.module.css";
import useTheme from "../hooks/useTheme";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeButton() {
  const { activeTheme, toggleTheme } = useTheme()
  
  return(
    <div className={styles.theme_container} onClick={toggleTheme}>
      {activeTheme === "dark" ? (
      <MdLightMode />)
        :(<MdDarkMode />)}
    </div>
    )
}