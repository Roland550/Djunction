import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <header>
        <nav >
          <div className="logo">
            
            <div className="title"><h1>DJunction</h1></div>
          </div>

         <div className="list">
         <ul>
            <li>
              <Link to="/" className="active">Home</Link>
            </li>
            <li><Link to="/shop" className="active">Shop</Link></li>
            
            <li><Link to="/about" className="active">About Us</Link></li>
            <li><Link to="/contact" className="active">Contact Us</Link></li>
          </ul>
         </div>
          
        </nav>
      </header>
    </>
  );
}
