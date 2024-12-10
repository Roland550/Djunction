import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import av3 from "../../assets/avt3.jpeg"
import av6 from "../../assets/avt6.jpeg"
import "./about.css";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
     <Navbar />
<div className="about-us-page">
    
    <div className="about-us-content">
      
        <h2>Our Mission</h2>
        <p>At DJunction, we are passionate about providing the highest quality drugs and exceptional customer service.
        Our dedication to quality and customer satisfaction has made us a trusted name in the drugs industry.
        We believe that drugs should be accessible to everyone, which is why we offer a wide range of products and delivery options.
        Our team is passionate about cannabis and is dedicated to helping you find the perfect product for your needs.
        We are committed to providing a safe and enjoyable experience for all our customers.
        We strive to create a welcoming and inclusive environment for everyone who enters our store or visits our website.
        Our mission is to empower our customers with the knowledge and resources they need to make informed decisions about their cannabis use.
        We are committed to being a responsible and sustainable business, and we strive to minimize our impact on the environment.
        Join us on our journey into the world of cannabis and discover the benefits of our products for yourself!</p>
      
      <h2>Meet Our Team</h2>
      <div className="team-members">
        
        <div className="team-member">
          <img src={av6} alt="Team Member 1" />
          <h3>Jordan Walker</h3>
          <p>CEO</p>
        </div>
        <div className="team-member">
          <img src={av3} alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>CMO</p>
        </div>
      </div>
      <div className="telegram">
         <small>Follow our Telegram chanel to keep update on  new products</small>
          <Link className="icon0">Telegram</Link>
      </div>
    </div>
  </div>
  <Footer />
    </>
  )
}
