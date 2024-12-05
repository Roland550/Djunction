import { useEffect, useState } from "react";


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
      name: "Abemaciclib",
      Gname: "",
      Bname: "Verzenio (Abemaciclib)",
      Dform: "",
      price: "$1,500 to $1,600 per month",
      Dclass: "",
      image: Av1,

      description: `Abemaciclib is a prescription-only medication, meaning it must be prescribed by an oncologist or healthcare provider who specializes in cancer treatment. It is usually taken orally in the form of tablets, with the typical dosage being 150 mg twice daily for most patients, although this can vary based on the individual’s health condition and response to treatment`,
    },
    {
      id: 19,
      name: "Alpelisib",
      Gname: "",
      Bname: "Piqray",
      Dform: "",
      price: "$14,000 per month",
      Dclass: "",
      image: AV2,
      description: "Alpelisib (Piqray) is a prescription-only medication that must be prescribed by an oncologist or healthcare provider experienced in cancer treatment. It is taken as an oral tablet, typically once daily with food. The standard starting dose is usually 300 mg per day, but the dose may be adjusted based on the patient’s health status and tolerability.",
    },
    {
      id: 2,
      name: "Abraxane",
      Gname: "",
      Bname: "Paclitaxel Albumin-stabilized Nanoparticle Formulation",
      Dform: "",
      price: "$2,500",
      Dclass: "",
      image: AV3,
      description: "Abraxane is a prescription-only medication, and it must be administered by a healthcare provider in a clinical setting, usually through an intravenous (IV) infusion. The dosing schedule can vary based on the type of cancer being treated and the patient's overall health. For example, for metastatic breast cancer, it is typically administered as an infusion every 3 weeks.",
    },
    {
      id: 3,
      name: "Ado-Trastuzumab Emtansine",
      Gname: "",
      Bname: "Kadcyla (Ado-Trastuzumab Emtansine)",
      Dform: "",
      price: "$9,000 per dose",
      Dclass: "",
      image: AV4,
      description: "Ado-Trastuzumab Emtansine is a prescription-only medication and must be administered in a clinical setting under the supervision of a healthcare provider. It is given through an intravenous (IV) infusion. The dose and frequency of infusions depend on the patient's health, weight, and how well the cancer responds to the treatment.",
    },
    {
      id: 4,
      name: "Afinitor(Everolimus) Afinitor Disperz (Everolimus)  ",
      Gname: "",
      Bname: "Afinitor",
      Dform: "",
      price: "$20,000 per month",
      Dclass: "",
      image: AV5,
      description: "Both Afinitor and Afinitor Disperz are prescription-only medications. They are usually prescribed by oncologists or other healthcare providers for patients with cancers or other conditions where mTOR inhibition is beneficial. The medication is taken orally, typically once a day, and the dose depends on the condition being treated and the individual patient’s health status.",
    },
    {
      id: 5,
      name: "Contrave",
      Gname: "",
      Bname: "Contrave",
      Dform: "",
      price: "$99",
      Dclass: "",
      image: AV6,
      usage: "Naltrexone and bupropion combination is used together with a reduced-calorie diet and proper exercise to help lose weight. This medicine is used in people who are overweight or obese",
      description:
        "Take this medicine by mouth with a glass of water. Follow the directions on the prescription label. Do not cut, crush or chew this medicine. Swallow the tablets whole. You can take it with or without food. Do not take with high-fat meals as this may increase your risk of seizures. Take your medicine at regular intervals. Do not take it more often than directed. Do not stop taking except on your doctor's advice.",
    },
    {
      id: 6,
      name: "metformine",
      Gname: "",
      Bname: "polycystic ovary syndrome (PCOS).",
      Dform: "",
      price: "$4",
      Dclass: "used to treat type 2 diabetes. It is one of the most commonly prescribed drugs for managing blood sugar levels in people with this condition.",
      image: AV7,
      description: "Immediate-release metformin is usually taken 2-3 times daily with meals.",
    },
    {
      id: 7,
      name: "Abraxane",
      Gname: "",
      Bname: "paclitaxel albumin-bound particles",
      Dform: "",
      price: "$2,500",
      Dclass: "",
      image: AV8,
      description: "Abraxane is a prescription-only medication and must be administered by a healthcare provider in a clinical setting, typically via an intravenous (IV) infusion. The dosage and frequency of administration depend on the type of cancer being treated and the patient's overall health status.",
    },
    {
      id: 8,
      name: "Insulin",
      Gname: "$10",
      Bname: "",
      Dform: "",
      Dclass: "",
      price: "233",
      image: AV9,
      description:
        "Insulin is an essential hormone. It helps your body turn food into energy and manages your blood sugar levels. If you have diabetes, your body can’t make enough insulin or can’t use it properly. Your healthcare provider can prescribe manufactured insulin that you take through an injection (shot), injectable pen or pump. Inhalable insulin is also an option.",
    },
    {
      id: 9,
      name: "Liraglutide (Saxenda)",
      Gname: "liraglutide",
      Bname: "Saxenda, Victoza",
      Dform: "injection, solution",
      Dclass: "Incretin Mimetics (GLP-1 Agonists)",
      price: "$95.33",
      image: AV10,
      description:
        "27 kg/m2 or greater (overweight) in the presence of at least one weight-related comorbid condition (e.g. hypertension, type 2 diabetes mellitus, or dyslipidemia) (1).",
    },
    {
      id: 10,
      name: "Mounjaro",
      Gname: " tirzepatide",
      Bname: "Mounjaro",
      price: "$1000",
      Dform:
        "injection, for subcutaneous use (2.5 mg, 5 mg, 7.5 mg, 10 mg, 12.5 mg,15 mg per 0.5 mL in single-dose pen or vial)",
      Dclass: "Incretin Mimetics (GLP-1 Agonists)",
      image: AV11,
      usage: ": Mounjaro is an injectable prescription medicine that is used along with diet and exercise to improve blood sugar (glucose) in adults with type 2 diabetes mellitus.",
      description: "You should follow the directions on your prescription label carefully and ask your pharmacist or doctor to explain any part you do not understand. It is important to use this medicine exactly as directed. Do not take more or less of it or more often than your doctor prescribes.",
    },
    {
      id: 11,
      name: "Orlistat (Xenical, Alli)       ",
      Gname: "",
      Bname: "",
      Dform: "",
      price: "$77.87",
      Dclass: "",
      image: AV12,
      description:
        "Alli has an average rating of 6.2 out of 10 from a total of 119 ratings on Drugs.com. 49% of reviewers reported a positive effect, while 31% reported a negative effect.",
    },
    {
      id: 12,
      name: "Ozempic",
      Gname: "semaglutide injection",
      Bname: "oh-ZEM-pick",
      price: "$936",
      Dform:
        "subcutaneous injection (0.25mg dose pen; 0.5mg dose pen; 1.0mg dose pen; 2.0 mg dose pen)",
      Dclass: " Incretin Mimetics (GLP-1 Agonists)",
      image: AV13,
      usage: "Once-weekly injection",
      description:
        "Ozempic (semaglutide) is a prescription medication that is FDA-approved to treat type 2 diabetes in combination with diet and exercise. It’s also approved to lower the risk Ozempic (semaglutide) is a prescription medication that is FDA-approved to treat type 2 diabetes in combination with diet and exercise. It’s also approved to lower the risk  ",
    },
    {
      id: 13,
      name: "Phentermine-topiramate (Qsymia)",
      Gname: "",
      Bname: "phentermine / topiramate ER",
      Dform: "",
      price: "$7.65 per unit",
      Dclass: "",
      image: AV14,
      description: "Qsymia is a prescription medicine that contains phentermine and topiramate extended-release. Qsymia may help adults and children 12 years and older with obesity, or some adults with overweight who also have weight-related medical problems, to help them lose excess body weight and keep the weight off.",
    },
    {
      id: 14,
      name: "Semaglutide (Wegovy)",
      Gname: "",
      Bname: "Semaglutide",
      Dform: "",
      price: "$1,300 and $1,500 per month",
      Dclass: "",
      image: AV15,
      description: "Semaglutide is a prescription-only medication. It is important to consult a healthcare provider to see if it is appropriate for you, as it can have side effects and interactions with other medications. If a doctor prescribes Wegovy or Ozempic, they will typically assess factors like weight, diabetes status, and other health conditions.",
    },
    {
      id: 15,
      name: "Setmelanotide (Imcivree)",
      Gname: "",
      Bname: "Imcivree (Setmelanotide)",
      Dform: "",
      price: "$300,000 to $400,000 per year",
      Dclass: "",
      image: AV16,
      description: " Setmelanotide is a prescription-only medication. It is prescribed by a healthcare provider familiar with the specific genetic condition causing obesity. The medication is generally administered as a daily subcutaneous injection. The dose may vary based on the patient's condition and response to the medication.",
    },
    {
      id: 16,
      name: "Amylinomimetic injectables",
      Gname: "Pramlintide",
      Bname: "Symlin",
      Dform: "",
      price: "$75",
      Dclass: "",
      image: AV17,
      usage: "A medication used to control blood sugar in type 1 and type 2 diabetes, typically in combination with mealtime insulin.",
      description:
        "Doctors prescribe different medications to treat type 1 and type 2 diabetes and help control your blood sugar. Treatment may vary depending on your diagnosis, health, and other factors.",
    },
    {
      id: 17,
      name: "Anastrozole",
      Gname: "",
      Bname: "Arimidex",
      Dform: "",
      price: "$10",
      Dclass: "",
     
      image: AV18,
      description: "Anastrozole is a prescription-only medication and should be prescribed by a healthcare provider, typically an oncologist. It is usually taken as an oral tablet once a day, with or without food.",
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
    document.body.classList.add("no-scroll");
  };

  const handleHideDescription = (id) => {
    setShowDescription((prevShowDescription) => ({
      ...prevShowDescription,
      [id]: false,
    }));
    document.body.classList.remove("no-scroll");
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <>
      
      
      <div className="product-card">
        {products.map((product) => (
          <div key={product.id} className="pro_container">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} className="pro_image" />
            <p className="pro_price">
              <span>Brand name</span> <small>{product.Bname}</small>
            </p>
            <p className="pro_price">
              <span>Price</span> <small className="co_price"> {product.price}</small>
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
              <div
                className="description-popup"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="content">
                
                  <div className="pro_header">
                  <button onClick={() => handleHideDescription(product.id)} className="close_btn">
                    x
                  </button>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="pro_image"
                    />
                  </div>
                  <div className="pro_body">
                    <p className="pro_price">
                      <p className="unit_name">{product.name}</p>
                    </p>

                    {product.Gname && <p className="pro_price">
                      <span>Generic name </span> <small>{product.Gname}</small>
                    </p>}

                    <p className="pro_price">
                      <span>Price </span> <small className="co_price"> {product.price}</small>
                    </p>

                    <p className="pro_price">
                      <span>Brand name </span> <small>{product.Bname}</small>
                    </p>

                    {product.Dform && <p className="pro_price">
                      <span>Dosage form </span> <small>{product.Dform}</small>
                    </p>}

                    {product.Dclass && <p className="pro_price">
                      <span>Drug class</span> <small> {product.Dclass}</small>
                    </p>}
                    {product.usage && <p className="pro_use">
                      <strong>Usage: </strong> <small>{product.usage}</small>
                    </p>}
                    <p className="pro_des"> <strong>Prescription: </strong>{product.description}</p>
                  </div>
                 
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
     
     

      
    </>
  );
};

export default ProductCard;
