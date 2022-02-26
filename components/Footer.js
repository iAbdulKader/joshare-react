import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
        <div className="footerText">
          <Link to="/about">About</Link>
          <Link to="/terms">Terms & Conditons</Link>
          <Link to="/howtouse">How To Use</Link>
          <Link to="/support">Support</Link>
        </div>
      </div>
    )
}