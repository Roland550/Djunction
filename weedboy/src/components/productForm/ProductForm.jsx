import { useState } from "react";

import "./productForm.css";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [autoReply, setAutoReply] = useState("");

  const ownerWhatsApp = "+237620784518"; // Replace with the owner's WhatsApp number

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const productName= 'Sample Product'
    const whatsappMessage = `
Hello, I am interested in your product:${productName} .
- Name: ${name}
- Email: ${email}
- Message: ${message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/${ownerWhatsApp}?text=${encodedMessage}`,
      "_blank"
    );

    setAutoReply(
        `Thank you, ${name}! Your interest in "${productName}" has been sent. We'll contact you shortly.`
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Contact Seller</h3>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send via WhatsApp</button>
        <button type="button">
          Cancel
        </button>
      </form>
      {autoReply && <p className="auto-reply">{autoReply}</p>}
    </div>
  );
};

export default ProductForm;
