import Navbar from "../components/navbar/Navbar";
import "./pages.css";

import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import pill from "../assets/jaro.png";
import jaro from "../assets/jor.png";

import ProductCard from "../components/productCard/ProductCard";
import Sold from "../components/sold/Sold";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="homepage">
        <div className="container">
          <p> FAST HEALTHCARE</p>
          <h1>Its easy to be healthy</h1>
          <p> Reliable,Fast, Safe, and Secure</p>

          <Link to="/card" className="explore">
            Shop Now <span>→</span>
          </Link>
        </div>
        
        <div className="cta">
          <img src={pill} alt="" />
          <div className="discount">
            <p>20%</p>
            <small>discount</small>
          </div>
         
        </div>
        <div className="phone">
            <img src={jaro} alt="" />
          </div>
      </div>
      <ProductCard />
      <Sold />
      <Footer />
    </>
  );
}
