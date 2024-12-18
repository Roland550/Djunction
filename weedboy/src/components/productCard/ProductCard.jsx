import { useEffect, useState } from "react";

import "./productCard.css";
import "../productForm/productForm.css";
import Av1 from "../../assets/druge/5-HTP (5-Hydroxytryptophan).jpeg";
import AV2 from "../../assets/druge/Amylin Analogues (Pramlintide).jpeg";
import AV3 from "../../assets/druge/Apple Cider Vinegar.jpeg";
import AV4 from "../../assets/druge/Benzphetamine.jpeg";
import AV5 from "../../assets/druge/Berberine.jpeg";
import AV6 from "../../assets/druge/Bupropion.jpeg";
import AV7 from "../../assets/druge/Cetilistat.jpeg";
import AV8 from "../../assets/druge/Chromium Picolinate.jpeg";
import AV9 from "../../assets/druge/Diethylpropion.jpeg";

import AV11 from "../../assets/druge/Dulaglutide.jpeg";
import AV12 from "../../assets/druge/Ephedra Alkaloids.jpeg";
import AV13 from "../../assets/druge/Ephedrine.jpeg";
import AV14 from "../../assets/druge/Fluoxetine.jpeg";
import AV15 from "../../assets/druge/forskolin.jpeg";
import AV16 from "../../assets/druge/Garcinia Cambogia.jpeg";
import AV17 from "../../assets/druge/Green Tea Extract.jpeg";
import AV18 from "../../assets/druge/Lorcaserin (Belviq).jpeg";
import AV19 from "../../assets/druge/Mazindol.jpeg";
import AV20 from "../../assets/druge/phentermine.jpeg";
import AV21 from "../../assets/druge/Phenylpropanolamine (PPA).jpeg";
import AV22 from "../../assets/druge/Pioglitazone.jpeg";
import AV23 from "../../assets/druge/Rimonabant.jpeg";
import AV24 from "../../assets/druge/Tesofensine.jpeg";
import AV25 from "../../assets/druge/Tirzepatide.jpeg";
import AV26 from "../../assets/druge/Tonalin, LeanLife.jpeg";
import AV27 from "../../assets/druge/Topiramate.jpeg";
import AV28 from "../../assets/druge/Zonisamide.jpeg";

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
      name: "HTP (5-Hydroxytryptophan)",
      Gname: "",
      Bname: "Natrol 5-HTP, NOW 5-HTP, Jarrow Formulas 5-HTP.",
      Dform: "",
      price: "$10–$40 per month",
      Dclass: "",
      usage:
        "Often used as a dietary supplement to support mood regulation, sleep improvement, and appetite suppression. For weight loss, it is typically combined with diet and exercise to reduce food cravings and overeating.",
      image: Av1,
      Dosage: [
        " 50–100 mg taken 1–3 times daily,",
        "50–100 mg taken 1–3 times daily.",
        "It is recommended to start with a lower dose and gradually increase if well tolerated.",
      ],
      prescription:
        "Not required; 5-HTP is available over-the-counter as a dietary supplement.",
      SideEffects: "nausea, diarrhea, and headaches.",
      description: `5-HTP is a naturally occurring compound produced in the body from the amino acid tryptophan. It is a precursor to serotonin, a neurotransmitter that influences mood, appetite, and sleep. By increasing serotonin levels, 5-HTP may help reduce appetite and cravings, which could support weight loss.`,
      precaution:
        "o	Should not be used with medications that increase serotonin (e.g., antidepressants like SSRIs or MAOIs) due to the risk of serotonin syndrome.Consult a healthcare provider before use, especially if you have a medical condition or are taking other medications.",
      Maction: "",
    },
    {
      id: 19,
      name: "Amylin Analogues (Pramlintide)",
      Gname: "",
      Bname: "Symlin",
      Dform: "",
      price: "$300–$500 per month",
      Dclass: "",
      image: AV2,
      usage:
        "Pramlintide is primarily approved for use in managing blood sugar levels in individuals with type 1 or type 2 diabetes. It is sometimes used off-label for weight loss due to its appetite-suppressing effects. It should be combined with a calorie-controlled diet and exercise program for optimal weight-loss results.",
      Dosage:
        "Starting Dose:15 mcg subcutaneous injection before major meals.Titration:Increase in 15 mcg increments every 3 days as tolerated. Maximum dose: 120 mcg before meals. •	Administered via injection, usually in the abdomen or thigh, immediately before meals.",
      SideEffects:
        "Common: Nausea, vomiting, headache, reduced appetite. Serious: Hypoglycemia (especially when combined with insulin), injection site reactions.",
      description:
        "Pramlintide is a synthetic form of amylin, a hormone co-secreted with insulin by the pancreas. Amylin helps regulate blood sugar levels by slowing gastric emptying, suppressing glucagon release, and promoting satiety. This makes it effective for weight management, especially in individuals with diabetes who struggle with overeating.",
      prescription:
        "Required; Pramlintide is an injectable medication that must be prescribed and monitored by a healthcare provider.",
      precaution:
        "Not recommended for individuals with gastroparesis (delayed stomach emptying) or those with a history of severe hypoglycemia.Should be used cautiously alongside insulin to prevent low blood sugar episodes.",
      Maction:
        "Slows the rate at which food leaves the stomach (gastric emptying), helping to prolong feelings of fullness.Reduces glucagon secretion, which helps stabilize blood sugar levels.Promotes satiety by acting on brain centers that regulate appetite.",
    },
    {
      id: 2,
      name: "Apple Cider Vinegar (ACV)",
      Gname: "",
      Bname:
        "Bragg Organic Raw Unfiltered Apple Cider Vinegar, Goli Apple Cider Vinegar Gummies, Vitafusion Apple Cider Vinegar.",
      Dform: "",
      price: "$5–$20 per bottle",
      Dclass: "",
      image: AV3,
      usage:
        "Apple Cider Vinegar is used as a natural remedy to aid digestion, curb appetite, and maintain stable blood sugar levels. For weight loss, it is typically taken before meals to promote a feeling of fullness and reduce calorie intake.",
      Dosage: "100 mg/m² IV on days 1, 8, and 15 of a 28-day cycle.",
      SideEffects:
        "Can cause nausea, erosion of tooth enamel, throat irritation, or upset stomach if taken undiluted or in high amounts.",
      description:
        "Apple Cider Vinegar is a fermented liquid made from crushed apples, yeast, and bacteria. It contains acetic acid, which may help suppress appetite, improve digestion, and stabilize blood sugar levels. These effects can indirectly support weight loss by reducing calorie intake and promoting better metabolism.",
      prescription:
        "Not required; Apple Cider Vinegar is available over-the-counter in liquid, gummy, or capsule form",
      precaution:
        "Always dilute liquid ACV to avoid damage to teeth and the gastrointestinal tract.•	Not recommended for individuals with digestive disorders, low potassium levels, or acid reflux unless cleared by a healthcare provider.",
      Maction: "",
    },
    {
      id: 3,
      name: "Benzphetamine",
      Gname: "",
      Bname: "Didrex",
      Dform: "",
      price: "$30–$100 per month",
      Dclass: "",
      image: AV4,
      usage:
        "Benzphetamine is used as a short-term adjunct (a few weeks) to a reduced-calorie diet, exercise, and behavior modification for the treatment of obesity.",
      Dosage:
        "Typical starting dose: 25–50 mg daily. Adjusted based on response: The maximum dose is 50 mg taken 1–3 times daily, 1 hour before meals or mid-morning. Duration: Typically prescribed for 12 weeks or less.",
      SideEffects:
        "Common: Dry mouth, insomnia, nervousness, dizziness, and increased heart rate. Serious: Chest pain, shortness of breath, severe mood changes, or high blood pressure. Risk of dependency or abuse if used improperly due to its similarity to amphetamines.",
      description:
        "Benzphetamine is a sympathomimetic amine and appetite suppressant that stimulates the central nervous system, reducing hunger. It is classified as an anorectic and is chemically related to amphetamines. It is prescribed for short-term weight loss in individuals who are significantly overweight or obese.",
      prescription:
        "Required; Benzphetamine is a Schedule III controlled substance in the U.S., and its use must be monitored by a healthcare provider.",
      precaution:
        "Not recommended for individuals with: Cardiovascular disease, uncontrolled hypertension, hyperthyroidism, glaucoma, or a history of substance abuse. Pregnancy or breastfeeding, as it can harm the baby.",
      Maction: "",
    },
    {
      id: 4,
      name: "Berberine",
      Gname: "",
      Bname: "",
      Dform: "",
      price: "$20–$50 per month,",
      Dclass: "",
      image: AV5,
      usage:
        "Berberine is primarily used as a supplement to manage blood sugar levels, cholesterol, and metabolic conditions. For weight loss, it is often combined with a healthy diet and exercise to improve metabolism and reduce fat storage.",
      Dosage:
        "Typical Dose: 500 mg taken 2–3 times per day (total daily dose: 1,000–1,500 mg). To reduce the risk of gastrointestinal discomfort, it is best taken with meals. Recommended to divide the dose into smaller amounts throughout the day.",
      SideEffects:
        "Common: Digestive issues like diarrhea, constipation, or stomach cramps, especially at higher doses. Rare: May lower blood sugar too much when combined with diabetes medications.Should not be used by pregnant or breastfeeding women or individuals with low blood pressure unless under medical supervision.",
      description:
        "Berberine is a naturally occurring compound found in plants like Berberis species. It is known for its potential benefits in regulating blood sugar levels, improving insulin sensitivity, and promoting weight loss by supporting metabolic health. Berberine activates an enzyme called AMPK (adenosine monophosphate-activated protein kinase), often referred to as the metabolic master switch, which can improve energy metabolism and fat burning.",
      prescription:
        "Not required; Berberine is available over-the-counter as a dietary supplement.",
      precaution:
        "Avoid combining with medications that lower blood sugar (e.g., metformin) without consulting a healthcare provider, as it could lead to hypoglycemia.Long-term use should be monitored, as it may interfere with nutrient absorption",
    },
    {
      id: 5,
      name: "Cetilistat",
      Gname: "",
      Bname: "Cetislim, Checkwt.",
      Dform: "",
      price: "$50–$100 per month ",
      Dclass: "",
      image: AV7,

      Dosage: "60–120 mg taken orally with meals containing fat.",
      SideEffects:
        "Oily stools, flatulence, diarrhea, and abdominal discomfort.",
      usage:
        "Prescribed for managing obesity, often combined with a calorie-restricted diet.",
      description:
        ": A lipase inhibitor that prevents fat absorption in the intestines, similar to Orlistat. It is used to treat obesity and associated metabolic disorders like type 2 diabetes.",
      prescription: "Required in most countries.",
      precaution:
        "Not recommended for individuals with chronic malabsorption syndrome or gallbladder issues.",
    },
    {
      id: 6,
      name: "Chromium Picolinate",
      Gname: "",
      Bname: "Solgar Chromium Picolinate, NOW Chromium Picolinate.",
      Dform: "",
      price: "$10–$30 per month.",
      Dclass: "",
      image: AV8,
      usage:
        "Used to reduce appetite and cravings, especially for those with high blood sugar or insulin resistance.",
      Dosage: "200–1,000 mcg per day, taken with meals.",
      SideEffects:
        "Rare, but may include nausea, dizziness, or skin irritation.",
      description:
        ": A dietary supplement that improves insulin sensitivity and may reduce hunger or cravings. Often marketed for weight loss and blood sugar control.",
      prescription: "Not required; available over the counter.",
      precaution: ": Consult a doctor if you have diabetes or kidney issues.",
    },
    {
      id: 8,
      name: "Bupropion/Naltrexone",
      Gname: "",
      Bname: "Contrave",
      Dform: "",
      price: "$100–$300 per month.",
      Dclass: "",
      image: AV6,
      usage:
        "For chronic weight management in adults with a BMI ≥30 or ≥27 with associated comorbidities",
      Dosage:
        "Start with one tablet (8 mg/90 mg) daily, gradually increasing to two tablets twice daily.",
      SideEffects:
        "Rare, but may include nausea, dizziness, or skin irritation.",
      description:
        "Combines an antidepressant (bupropion) and an opioid antagonist (naltrexone) to target appetite and cravings.",
      prescription: "Required; dosing schedule must be followed.",
      precaution: "",
    },
    {
      id: 7,
      name: "Diethylpropion",
      Gname: "",
      Bname: "Tenuate, Tenuate Dospan.",
      Dform: "",
      price: "$30–$100 per month.",
      Dclass: "",
      image: AV9,
      usage: "Aids in weight loss alongside a reduced-calorie diet.",
      Dosage:
        "25 mg 3 times daily before meals or 75 mg extended-release once daily in the morning.",
      SideEffects:
        "Nausea, anemia, fatigue, hair loss, low blood counts, neuropathy.",
      description:
        ": A sympathomimetic amine that reduces appetite by acting on the central nervous system. Prescribed for short-term use in obesity management",
      prescription:
        "Required; classified as a controlled substance in some regions.",
      precaution:
        "Not suitable for those with hypertension, heart disease, or substance abuse history.",
    },

    {
      id: 13,
      name: "Dulaglutide",
      Gname: " ",
      Bname: "Trulicity",
      price: "$700–$1,000 per month.",
      Dform: "",
      Dclass: "",
      image: AV11,
      usage:
        "Prescribed for type 2 diabetes; may aid weight loss as a secondary benefit.",
      prescription: "Required.",
      precaution:
        "Avoid if you have a history of thyroid cancer or pancreatitis.",
      Dosage: "0.75–4.5 mg injected subcutaneously once weekly.",
      SideEffects:
        "Nausea, vomiting, diarrhea, fatigue, and injection site reactions.",

      description:
        "A GLP-1 receptor agonist that slows gastric emptying, reduces appetite, and helps control blood sugar. Approved for diabetes but used off-label for weight loss.",
    },
    {
      id: 14,
      name: "Ephedra Alkaloids",
      Gname: "",
      Bname: "",
      Dform: "",
      price: "Not widely available due to bans.",
      Dclass: "",
      usage:
        "Formerly used in weight-loss supplements, now banned in many countries due to safety concerns.",
      prescription: "Not applicable; banned in most regions.",
      precaution: "Not recommended due to significant safety risks.",
      image: AV12,
      Dosage: "Typically 20–50 mg daily (when legal).",
      SideEffects: "High blood pressure, heart palpitations, stroke, or death.",
      description:
        "Natural compounds found in the Ephedra plant. These alkaloids stimulate the nervous system, increasing energy expenditure and suppressing appetite.",
    },
    {
      id: 15,
      name: "Ephedrine",
      Gname: "semaglutide injection",
      Bname: "",
      price: "$20–$60 per month.",
      Dform: "",
      Dclass: " Incretin Mimetics (GLP-1 Agonists)",
      usage:
        "Occasionally used in weight-loss combinations, often with caffeine, where legal.",
      prescription:
        "Required in some countries; banned for weight-loss purposes in others.",
      precaution:
        "High potential for abuse and adverse cardiovascular effects.",
      image: AV13,
      Dosage: "20–30 mg up to 3 times daily (where permitted).",
      SideEffects: "Insomnia, anxiety, increased heart rate, and hypertension.",

      description:
        "A sympathomimetic amine that stimulates the central nervous system, promoting thermogenesis and appetite suppression.",
    },
    {
      id: 15,
      name: "Fluoxetine",
      Gname: "",
      Bname: "Prozac, Sarafem.",
      Dform: "",
      price: "$10–$30 per month (generic).",
      Dclass: "",
      usage:
        "Prescribed primarily for mental health conditions; weight loss is a secondary effect.",
      prescription: "Required.",
      precaution: "",
      image: AV14,
      Dosage: "10–60 mg daily, depending on the condition being treated.",
      SideEffects:
        " Nausea, headache, insomnia, sexual dysfunction, and anxiety.",
      description:
        "Not recommended for those with bipolar disorder unless combined with a mood stabilizer.",
    },
    {
      id: 16,
      name: "Forskolin",
      Gname: "",
      Bname: "Fors Lean, Pure Forskolin Extract.",
      Dform: "",
      price: "$20–$50 per month.",
      Dclass: "",
      usage: "Marketed as a natural weight-loss supplement.",
      prescription: "Not required; available over the counter.",
      precaution:
        "Avoid use if pregnant, breastfeeding, or taking blood-thinning or blood pressure medications.",
      image: AV15,
      Dosage: "250 mg of 10% forskolin extract taken twice daily.",
      SideEffects:
        "Low blood pressure, headache, dizziness, or rapid heart rate.",
      description:
        "A compound extracted from the roots of the Indian Coleus plant, thought to aid weight loss by stimulating the production of cyclic AMP (cAMP), which may enhance fat breakdown.",
    },
    {
      id: 17,
      name: "Garcinia Cambogia",
      Gname: "",
      Bname: "Garcinia Cambogia Extra, Pure Garcinia Cambogia.",
      Dform: "",
      price: "$20–$50 per month.",
      Dclass: "",
      usage: "Marketed as a natural weight-loss supplement.",
      prescription: "Not required; available over the counter.",
      precaution:
        "Avoid if pregnant, breastfeeding, or taking diabetes medications or statins.",
      image: AV16,
      Dosage: "500–1,000 mg 3 times daily, 30–60 minutes before meals.",
      SideEffects: "Digestive upset, headache, dizziness.",
      description:
        "A tropical fruit extract containing hydroxycitric acid (HCA), which is thought to suppress appetite and block fat production.",
    },
    {
      id: 18,
      name: "Green Tea Extract",
      Gname: "",
      Bname: "EGCG Green Tea Extract, Pure Encapsulations Green Tea.",
      Dform: "",
      price: "$15–$40 per month.",
      Dclass: "",
      usage: "Used to enhance fat burning and support weight management.",
      prescription: "Not required.",
      precaution: "Avoid excessive caffeine intake.",
      image: AV17,
      Dosage: "250–500 mg daily, often standardized to 50% EGCG.",
      SideEffects: "Insomnia, nausea, increased heart rate.",

      description:
        "Rich in catechins and caffeine, it boosts metabolism and promotes fat oxidation.",
    },
    {
      id: 19,
      name: "Lorcaserin (Belviq)",
      Gname: "",
      Bname: "Arimidex",
      Dform: "",
      price: "$200–$300 per month",
      Dclass: "",
      usage:
        " Prescribed for chronic weight management alongside diet and exercise.",
      prescription: "Required.",
      precaution:
        "Withdrawn from U.S. market in 2020 due to cancer risk concerns.",
      image: AV18,
      Dosage: "10 mg twice daily.",
      SideEffects: "Headache, dizziness, fatigue, nausea.",
      description: "A serotonin 2C receptor agonist that suppresses appetite.",
    },
    {
      id: 20,
      name: "Mazindol",
      Gname: "",
      Bname: "Mazanor, Sanorex.",
      Dform: "",
      price: "$50–$100 per month.",
      Dclass: "",
      usage: "Adjunct to diet and exercise for weight loss.",
      prescription: "Required.",
      precaution: "Not for those with heart disease or hypertension.",
      image: AV19,
      Dosage: "1–3 mg daily.",
      SideEffects: "Insomnia, dry mouth, restlessness.",
      description:
        ": A central nervous system stimulant that reduces appetite and is used short-term for obesity.",
    },
    {
      id: 21,
      name: "Phentermine",
      Gname: "",
      Bname: "Adipex-P, Lomaira.",
      Dform: "",
      price: "$20–$60 per month.",
      Dclass: "",
      usage: "Combined with diet and exercise for obesity treatment.",
      prescription: "Required; controlled substance.",
      precaution: "Avoid in individuals with cardiovascular disease.",
      image: AV20,
      Dosage: "15–37.5 mg daily, taken before breakfast or a few hours after.",
      SideEffects: "Dry mouth, insomnia, increased heart rate.",
      description:
        "A sympathomimetic amine and appetite suppressant used for short-term weight loss.",
    },
    {
      id: 22,
      name: "Phenylpropanolamine (PPA)",
      Gname: "",
      Bname: "Arimidex",
      Dform: "",
      price: "Not applicable due to ban.",
      Dclass: "",
      usage: "Previously marketed for short-term weight loss.",
      prescription: "Not available.",
      precaution: "No longer recommended or available.",
      image: AV21,
      Dosage: "25–75 mg per day (historically).",
      SideEffects: "High blood pressure, anxiety, stroke.",
      description:
        "A decongestant that was used as an appetite suppressant but is now banned due to stroke risk.",
    },
    {
      id: 23,
      name: "Pioglitazone",
      Gname: "",
      Bname: "Actos",
      Dform: "",
      price: "$10–$30 per month.",
      Dclass: "",
      usage:
        "Treats type 2 diabetes; may cause mild weight gain due to fat redistribution.",
      prescription: "Required",
      precaution: "Avoid in heart failure patients.",
      image: AV22,
      Dosage: "15–45 mg daily.",
      SideEffects: "Weight gain, edema, heart failure risk.",
      description:
        "A diabetes drug that improves insulin sensitivity; not primarily for weight loss but may assist in metabolic improvements.",
    },
    {
      id: 24,
      name: "Rimonabant",
      Gname: "",
      Bname: "Acomplia",
      Dform: "",
      price: "Not applicable due to market withdrawal.",
      Dclass: "",
      usage:
        "Weight management for obesity (withdrawn due to psychiatric risks).",
      prescription: "Required when available.",
      precaution: "Withdrawn from global markets.",
      image: AV23,
      Dosage: "20 mg  daily.",
      SideEffects: "Depression, anxiety, suicidal ideation.",
      description:
        "A cannabinoid receptor antagonist that suppresses appetite and improves metabolic parameters.",
    },
    {
      id: 25,
      name: "Tesofensine",
      Gname: "",
      Bname: "Tesofensine",
      Dform: "",
      price: "Not commercially available.",
      Dclass: "",
      usage: "Investigational drug for obesity treatment.",
      prescription: "Not yet approved.",
      precaution: "Limited human safety data.",
      image: AV24,
      Dosage: "0.25–0.5 mg daily (in clinical trials).",
      SideEffects: "Dry mouth, insomnia, increased heart rate.",
      description:
        "A triple monoamine reuptake inhibitor that suppresses appetite and enhances energy expenditure.",
    },
    {
      id: 26,
      name: "Tonalin CLA",
      Gname: "",
      Bname: "Tonalin CLA",
      Dform: "",
      price: "$15–$50 per month.",
      Dclass: "",
      usage: "Marketed for fat reduction and body composition improvement.",
      prescription: "Not required.",
      precaution: "Limited evidence for significant weight loss.",
      image: AV26,
      Dosage: "3–6 g daily.",
      SideEffects: "Upset stomach, diarrhea.",
      description:
        "Conjugated linoleic acid (CLA) supplement thought to reduce fat accumulation and promote weight loss.",
    },
    {
      id: 27,
      name: "Tirzepatide",
      Gname: "",
      Bname: "Mounjaro",
      Dform: "",
      price: "$800–$1,200 per month.",
      Dclass: "",
      usage:
        "Approved for diabetes; shows significant weight-loss benefits in clinical trials.",
      image: AV25,
      prescription: "Required.",
      precaution: "Avoid in thyroid cancer or pancreatitis history.",
      Dosage: "2.5–15 mg injected weekly.",
      SideEffects: "Nausea, vomiting, diarrhea, fatigue.",
      description:
        "A dual GLP-1/GIP receptor agonist that enhances satiety and regulates blood sugar.",
    },
    {
      id: 28,
      name: "Topiramate",
      Gname: "",
      Bname: "Topamax",
      Dform: "",
      price: "$50–$200 per month.",
      Dclass: "",
      usage: "Prescribed off-label for weight loss or in combination therapy.",
      image: AV27,
      Dosage: "25–200 mg daily.",
      prescription: "Required.",
      precaution: "Avoid during pregnancy due to birth defect risks.",
      SideEffects: "Dizziness, cognitive issues, tingling, fatigue.",
      description:
        "An anticonvulsant that suppresses appetite and is often combined with Phentermine for weight loss (e.g., Qsymia).",
    },
    {
      id: 29,
      name: "Zonisamide",
      Gname: "",
      Bname: "Zonegran",
      Dform: "",
      price: "$30–$100 per month.",
      Dclass: "",
      usage: ": Off-label use for weight management.",
      image: AV28,
      Dosage: "100–600 mg daily.",

      prescription: "Required",
      precaution:
        "Not recommended for individuals with kidney stones or sulfa allergies.",
      SideEffects: "Fatigue, dizziness, nausea.",
      description:
        "An anticonvulsant sometimes used off-label for weight loss due to its appetite-suppressing properties.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    // const selectedProduct = products.find(
    //   (product) => product.id === selectedProductId
    // );

    const productName = "Sample Product";
    const whatsappMessage = `
Hello, I am interested in your drugs: ${name}.
-Email: ${email}
-Message: ${message}
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
          <div
            key={product.id}
            className="pro_container"
            onClick={() => handleLearnMore(product.id)}
          >
            <img src={product.image} alt={product.name} className="pro_image" />
            <h3>{product.name}</h3>

            <p className="pro_price">
              <span></span> <small className="co_price"> {product.price}</small>
            </p>

            {/* <button
              onClick={() => handleLearnMore(product.id)}
              className="learn_more"
            >
              Learn More
            </button> */}

            {showDescription[product.id] && (
              <div
                className="description-popup"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="content">
                  <div className="pro_header">
                    <button
                      onClick={() => handleHideDescription(product.id)}
                      className="close_btn"
                    >
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

                    {product.Gname && (
                      <p className="pro_price">
                        <span>Generic name </span>{" "}
                        <small>{product.Gname}</small>
                      </p>
                    )}

                    <p className="pro_price">
                      <span>Price </span>{" "}
                      <small className="co_price"> {product.price}</small>
                    </p>

                    <p className="pro_price">
                      <span>Brand name </span> <small>{product.Bname}</small>
                    </p>

                    {product.Dform && (
                      <p className="pro_price">
                        <span>Dosage form </span> <small>{product.Dform}</small>
                      </p>
                    )}

                    {product.Dclass && (
                      <p className="pro_price">
                        <span>Drug class</span> <small> {product.Dclass}</small>
                      </p>
                    )}
                    {product.usage && (
                      <p className="pro_use">
                        <strong>Usage: </strong> <small>{product.usage}</small>
                      </p>
                    )}
                    <p className="pro_use">
                      <strong>Dosage: </strong> <small>{product.Dosage}</small>
                    </p>

                    <p className="pro_des">
                      {" "}
                      <strong>Prescription: </strong>
                      {product.prescription}
                    </p>
                    <p className="pro_use">
                      <strong>Side Effects: </strong>{" "}
                      <small>{product.SideEffects}</small>
                    </p>
                    <p className="pro_use">
                      <strong>Precaution: </strong>{" "}
                      <small>{product.precaution}</small>
                    </p>
                    <p className="pro_des">
                      {" "}
                      <strong>Description: </strong>
                      {product.description}
                    </p>
                  </div>

                  <div onClick={() => handleHideDescription(product.id)}>
                    <button onClick={handleOpenForm} className="pro_contact">
                      Contact Seller
                    </button>
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

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Product name"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write something..."
            />

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
