import { Link } from "react-router-dom";
import "./footer.css";
import emailjs from "@emailjs/browser"
import { useRef } from 'react';
export default function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8ja8imq', 'template_96v6h9h', form.current, {
        publicKey: 'qupMiJMZy7qFP2m7C',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <footer>
      <div className="footer_cont">
        <div className="footer">
          <div className="items">
            <h1 className="foot">DJunction</h1>
          </div>
        

         
          <div className="pro_side">
            <form ref={form} onSubmit={sendEmail}>
             

              <div className="puts">
              <input type="email" name="user_email" placeholder="Email" />
              <textarea name="message" placeholder="Message" />
              </div>
              <div className="puts">
              <input type="submit" value="Send" className="send"/>
              </div>
            </form>
          </div>
          <div className="list">
            <Link to="/card" className="link">Shop</Link>

            <Link to="/about" className="link">About Us</Link>
            <Link to="/contact" className="link">Contact Us</Link>
          </div>
        </div>
        <p className="copy">Copyrigth©{new Date().getFullYear()} allright reserved</p>
      </div>
    </footer>
  );
}
