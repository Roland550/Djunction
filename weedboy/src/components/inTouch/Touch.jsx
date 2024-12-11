
import './touch.css'
import touch from "../../assets/cont.png"
import  { useState } from 'react';
import emailjs from '@emailjs/browser';
export default function Touch() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8ja8imq', 'template_llmy30x', e.target, 'qupMiJMZy7qFP2m7C')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      }, (err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <div className="container_touch">
      <div className="icon">
        <img src={touch} alt="" />
      </div>
      <div className="former">
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className='cont_input'
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className='cont_input'
          />
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
          />
          <input type="submit" value="Send" />
        </form>
        {success && (
          <p className="success-message">
            Your message has been sent successfully! Thank you for getting in touch.
          </p>
        )}
      </div>
    </div>
  );
  
}
