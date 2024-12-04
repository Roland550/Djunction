import { useState } from "react";

import Navbar from "../navbar/Navbar";
import "./productCard.css";
import Av1 from "../../assets/Abemaciclib..jpg";
import AV2 from "../../assets/Alpelisib..jpg";
import AV3 from "../../assets/avt8.jpg";
import AV4 from "../../assets/avt9.jpg";
import AV5 from "../../assets/avt10.jpg";
import AV6 from "../../assets/avt11.jpg";
import AV7 from "../../assets/avt12.jpg";
import AV8 from "../../assets/avt13.jpg";
import AV9 from "../../assets/avt14.jpg";
import AV10 from "../../assets/avt15.jpg";
import AV11 from "../../assets/avt16.jpg";
import AV12 from "../../assets/avt17.jpg";
import AV13 from "../../assets/avt18.jpg";
import AV14 from "../../assets/avt19.jpg";
import AV15 from "../../assets/avt20.jpg";
import AV16 from "../../assets/avt21.jpg";
import AV17 from "../../assets/avt22.jpg";
import AV18 from "../../assets/avt23.jpg";
import Footer from "../footer/Footer";

const ProductCard = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  //contact form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [autoReply, setAutoReply] = useState("");

  const ownerWhatsApp = "+237620784518"; // Replace with the owner's WhatsApp number

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const products = [
    {
      id: 1,
      name: "Benzphetamine",
      Gname: "$10",
      Bname: "",
      Dform: "",
      Dclass: "",
      image: Av1,

      description: `  I am writing to recommend Roland for his network troubleshooting services. I had the pleasure of working with Raymond when I was experiencing problems with my business network. Raymond was very knowledgeable about the latest network troubleshooting techniques, and he did a great job of identifying and resolving the problems that I was experiencing. Raymond was also very patient and understanding, and he was always willing to take the time to explain the problems to me in a way that I could understand. I would highly recommend Raymond to anyone who is looking for reliable and professional network troubleshooting services.`,
    },
    {
      id: 19,
      name: "Product 1",
      Gname: "$10",
      Bname: "",
      Dform: "",
      Dclass: "",
      image: AV2,
      description: "This is product 1 description",
    },
    {
      id: 2,
      name: "Product 1",
      Gname: "$10",
      Bname: "",
      Dform: "",
      Dclass: "",
      image: AV3,
      description: "This is product 1 description",
    },
    {
      id: 3,
      name: "Product 1",
      Gname: "$10",
      Bname: "",
      Dform: "",
      Dclass: "",
      image: AV4,
      description: "This is product 1 description",
    },
    {
      id: 4,
      name: "Product 1",
      Gname: "$10",
      Bname: "",
      Dform: "",
      Dclass: "",
      image: AV5,
      description: "This is product 1 description",
    },
    {
      id: 5,
      name: "Bupropion",
      Gname: "",
      Bname: "Contrave",
      Dform: "Naltrexone extended-release tablets",
      Dclass: "",
      image: AV6,
      description: "Naltrexone and bupropion are two medications that combine to help you lose weight or maintain weight loss. A healthcare provider will recommend you take this medication with a reduced-calorie diet and exercise. The brand name of this medication is Contrave BUPROPION; NALTREXONE (byoo PROE pee on; nal TREX one) is a combination of two drugs that help you lose weight. This product is used with a reduced calorie diet and exercise. This product can also help you maintain weight loss. This medicine may be used for other purposes; ask your health care provider or pharmacist if you have questions.",
    },
    {
      id: 6,
      name: "Product 1",
      Gname: "$10",
      Bname: "",
      Dform: "",
      Dclass: "",
      image: AV7,
      description: "This is product 1 description",
    },
    {
      id: 7,
      name: "Product 1",
      Gname: "$10",
      Bname: "",
      Dform: "",
      Dclass: "",
      image: AV8,
      description: "This is product 1 description",
    },
    {
      id: 8,
      name: "Insulin",
      Gname: "$10",
      Bname: "",
      Dform: "",
      Dclass: "",
      image: AV9,
      description: "Insulin is an essential hormone. It helps your body turn food into energy and manages your blood sugar levels. If you have diabetes, your body can’t make enough insulin or can’t use it properly. Your healthcare provider can prescribe manufactured insulin that you take through an injection (shot), injectable pen or pump. Inhalable insulin is also an option.",
    },
    {
      id: 9,
      name: "Saxenda ",
      Gname: "liraglutide [ LIR-a-GLOO-tide ]",
      Bname: "Saxenda, Victoza",
      Dform: "Subcutaneous injection",
      Dclass: "Incretin Mimetics (GLP-1 Agonists)",
      image: AV10,
      description: "Saxenda (liraglutide) is used for weight loss and to help keep weight off once weight has been lost, it is used for obese adults or overweight adults who also have weight-related medical problems. Saxenda can be used in children aged 12 to 17 years who with obesity and who have a bodyweight above 132 pounds (60 kg). Saxenda is used together with a healthy diet and exercise.",
    },
    {
      id: 10,
      name: "Mounjaro ",
      Gname: " tirzepatide",
      Bname: "",
      Dform: "injection, for subcutaneous use (2.5 mg, 5 mg, 7.5 mg, 10 mg, 12.5 mg,15 mg per 0.5 mL in single-dose pen or vial)",
      Dclass: "Incretin Mimetics (GLP-1 Agonists)",
      image: AV11,
      description: "This is product 1 description",
    },
    {
      id: 11,
      name: "Alli",
      Gname: "",
      Bname: "",
      Dform: "",
      Dclass: "",
      image: AV12,
      description: "Alli is a 60-milligram, over-the-counter version of orlistat (Xenical), a 120-milligram prescription drug. Both Alli and Xenical are meant to be used as part of a weight-loss plan, along with a low-calorie, low-fat diet and regular physical activity.",
    },
    {
      id: 12,
      name: "Ozempic",
      Gname: "semaglutide injection",
      Bname: "oh-ZEM-pick",
      Dform:
        "subcutaneous injection (0.25mg dose pen; 0.5mg dose pen; 1.0mg dose pen; 2.0 mg dose pen)",
      Dclass: " Incretin Mimetics (GLP-1 Agonists)",
      image: AV13,
      description:
        "Ozempic is used for type 2 diabetes to improve blood sugar levels and lower the risk of stroke, heart attack, or death for adults with type 2 diabetes and heart disease. Ozempic (semaglutide) has been shown to help weight loss and maintain the lost weight in clinical trials. Ozempic is given as a once-weekly injection under the skin of the belly, the thigh, or the upper arm using an autoinjector (pen).",
    },
    {
      id: 13,
      name: "Product 1",
      Gname: "$10",
      Bname: "",
      Dform: "",
      Dclass: "",
      image: AV14,
      description: "This is product 1 description",
    },
    {
      id: 14,
      name: "Product 1",
      Gname: "$10",
      Bname: "",
      Dform: "",
      Dclass: "",
      image: AV15,
      description: "This is product 1 description",
    },
    {
      id: 15,
      name: "Product 1",
      Gname: "$10",
      Bname: "",
      Dform: "",
      Dclass: "",
      image: AV16,
      description: "This is product 1 description",
    },
    {
      id: 16,
      name: "pramlintide systemic (Pro)",
      Gname: "$10",
      Bname: "Symlin, Symlin Pen, SymlinPen 120, SymlinPen 60",
      Dform: "",
      Dclass: "",
      image: AV17,
      description:
        "Amylin analogs are used in the treatment of diabetes. They are stable synthetic compounds, which are administered subcutaneously before meals, and work similarly to the physiological amylin.Amylin is a 37 amino acid polypeptide hormone that is secreted with insulin from the beta cells in the pancreas. In diabetes, as less insulin is secreted there is also a deficiency of amylin. Amylin assists insulin in postprandial glucose control. It inhibits glucagon secretion, delays gastric emptying and signals satiety, suppressing the intake of food.",
    },
    {
      id: 17,
      name: "Product 1",
      Gname: "",
      Bname: "",
      Dform: "",
      Dclass: "",
      image: AV18,
      description: "This is product 1 description",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const selectedProduct = products.find(
      (product) => product.id === selectedProductId
    );

    const productName = "Sample Product";
    const whatsappMessage = `
Hello, I am interested in your product:${selectedProduct?.name} .
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
    setShowForm(false);
  };
  //product

  const handleOpenForm = (productId) => {
    setShowForm(true);
    setSelectedProductId(productId);
  };

  const handleLearnMore = (id) => {
    setShowDescription((prevShowDescription) => ({
      ...prevShowDescription,
      [id]: true,
    }));
  };

  const handleHideDescription = (id) => {
    setShowDescription((prevShowDescription) => ({
      ...prevShowDescription,
      [id]: false,
    }));
  };

  return (
    <>
      <Navbar />
      <div className="product-card">
        {products.map((product) => (
          <div key={product.id} className="pro_container">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} className="pro_image" />
            <p className="pro_price">
              <span>Generic name</span> <small>{product.Gname}</small>
            </p>
            <p className="pro_price">
              <span>Brand name</span> <small>{product.Bname}</small>
            </p>
            <p className="pro_price">
              <span>Dosage form</span> <small>{product.Dform}</small>
            </p>
            <p className="pro_price">
              <span>Drug class</span> <small> {product.Dclass}</small>
            </p>

            <button
              onClick={() => handleLearnMore(product.id)}
              className="learn_more"
            >
              Learn More
            </button>

            <button onClick={handleOpenForm} className="pro_contact">
              Contact Seller
            </button>
            {showDescription[product.id] && (
              <div className="description-popup">
                <div className="content">
                  <p>{product.description}</p>
                  <button onClick={() => handleHideDescription(product.id)}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h3>Contact Seller</h3>
            <p></p>
            <label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name"
              />
            </label>
            <label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
              />
            </label>
            <label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write something..."
              />
            </label>
            <button type="submit" className="what">
              Send via WhatsApp
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="exit"
            >
              Back
            </button>
          </form>
          {autoReply && <p className="auto-reply">{autoReply}</p>}
        </div>
      )}

      <Footer />
    </>
  );
};

export default ProductCard;
