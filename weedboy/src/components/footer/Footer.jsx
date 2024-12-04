import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
   <footer>
     <div className="footer_cont">
      <div className="footer">
        <div className="items">
          <h1 className="foot">WeedJunction</h1>
          
        </div>
        <div className="list">
           <Link className="link">Shop</Link>
           <Link className="link">Blog</Link>
           <Link className="link">About Us</Link>
           <Link className="link">Contact Us</Link>
        </div>
        <div className="list">
          <Link  className="link">Facebook</Link>
          <Link  className="link">whatsApp</Link>
          <Link  className="link">Telegram</Link>
          <Link  className="link">Instagram</Link>
        </div>
      </div>
      <p className="copy">Copyrigth@2024 allright reserved</p>
    </div>
   </footer>
  );
}
