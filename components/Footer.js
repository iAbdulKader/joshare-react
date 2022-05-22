import Link from "next/link";
import ThemeToggle from "./ThemeToggle";


export default function Footer() {
  return (
    <div className="footer">
    
        <div className="footerText">
          <Link href="/about">About</Link>
          <Link href="/terms">Terms & Conditons</Link>
          <Link href="/howtouse">How To Use</Link>
          <Link href="/support">Support</Link>
          
          <ThemeToggle />
        </div>
      
    </div>
    )
}