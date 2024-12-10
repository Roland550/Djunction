import { Link } from "react-router-dom";
import "./footer.css";
import { FaFacebook, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';
export default function Footer() {
  

  
  return (
    <footer>
      <div className="footer_cont">
        <div className="footer">
          <div className="items">
            <h1 className="foot">DJunction</h1>
          </div>
        

         
         
          <div className="list">
            <Link to="/card" className="link">Shop</Link>

            <Link to="/about" className="link">About Us</Link>
            <Link to="/contact" className="link">Contact Us</Link>
          </div>

          <div className="social_icons">
            <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
              Djunction though
            </a>
            <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
              Djunction_pull_66
            </a>
            <a href="https://t.me/your-telegram-page" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
              @Djunction
            </a>
            <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
              +237620784518
            </a>
            
          </div>
        </div>
        <p className="copy">Copyrigth©{new Date().getFullYear()} allright reserved</p>
      </div>
    </footer>
  );
}
