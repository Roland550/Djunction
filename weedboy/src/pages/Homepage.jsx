import Navbar from "../components/navbar/Navbar";
import "./pages.css";
import item from "../assets/pill.png";
import discount from "../assets/disc.jpg";
import reliable from "../assets/reliable.jpg";
import secure from "../assets/secure.jpg";
import Testimonial from "../components/testimonial/Testimonial";
import Touch from "../components/inTouch/Touch";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="homepage">
        <div className="container">
          <h1>Welcome to DrugJunction</h1>
          <p>
            Discover the best drugs products from a curated selection of
            trusted vendors. Browse our marketplace to find the perfect strain,
            edible, or accessory to suit your needs.
            Buy drugs from a variety of different vendors
          </p>
          
          <Link to="/shop" className="explore">Explore our shop</Link>
        </div>
        <div className="cta">
          <img src={item} alt="" />
        </div>
      </div>

      <section className="service">
      <h3>Our service</h3>
         <div className="service_container">
          <div className="card_service">
            <img src={secure} alt=""  />
            <span>Security</span>
            <p>Your trust is our greatest asset. We adhere to strict security protocols to safeguard your sensitive information.</p>
            <button type="button">Learn more</button>
          </div>
         
          <div className="card_service">
            <img src={reliable} alt=""  />
            <span>reliable</span>
            <p>Your satisfaction is our guarantee. If you are not happy with your purchase, we will work with you to make it right.</p>
            <button type="button">Learn more</button>
          </div>
          <div className="card_service">
            <img src={discount} alt=""  />
            <span>Affordable discount</span>
            <p>Discounts for everyone! We offer a range of promotions and discounts to suit every budget and need.</p>
            <button type="button">Learn more</button>
          </div>
         </div>
      </section>

      {/* <section className="offers">
      <h3>What our client say?</h3>
        <div className="offer_container">
          
          <div className="desc">
          <p className="title">Your One-Stop Shop for Premium Cannabis Products</p>
            <p className="p_desc">

              At WeedJunction, we are dedicated to providing our customers with
               
             best selection of high-quality cannabis products. From rare
              strains to artisanal edibles, our marketplace offers a wide range
              of options to suit every need and preference. Our team of experts
              carefully curates our products to ensure that every item meets our
              high standards of quality, potency, and safety. Whether you are a
              seasoned connoisseur or just starting your cannabis journey, we
              invite you to explore our marketplace and discover the perfect
              products for you.
            </p>
          </div>

          <div className="desc">
            <p className="title">Best of Cannabis with WeedJunction</p>
            <p>
              WeedJunction is your premier destination for all things cannabis.
              Our platform connects you with trusted vendors who offer a diverse
              range of products, from flowers and concentrates to vapes and
              accessories. Our goal is to provide a seamless and enjoyable
              shopping experience, with a focus on quality, convenience, and
              customer satisfaction. Browse our marketplace today and discover
              why WeedJunction is the go-to choice for cannabis enthusiasts.
            </p>
          </div>
        </div>
      </section> */}
      <Testimonial />
      <Touch />
      <Footer />
    </>
  );
}
