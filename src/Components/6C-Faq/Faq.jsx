import "./Faq.css";
import faqImage from "../../../public/images/illustration-woman-online-desktop.svg";
import boxImage from "../../../public/images/illustration-box-desktop.svg";

import { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

import data from "../../../public/data.json";
// console.log(data.Faqs.map((faq) => console.log(faq)));
// console.log(data.Faqs.length);

const Faq = () => {
  const AccordionData = data.Faqs;

  const [accordion] = useState(AccordionData);

  //   console.log(accordion.map((faq) => console.log(faq.expand)));

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section className="faq">
      <div className="wrapper">
        <div className="image">
          <img className="faqImage" src={faqImage} alt="image" />
          <img className="boxImage" src={boxImage} alt="image" />
        </div>

        <div className="container">
          <h2>FAQ</h2>

          <div className="faqcontainer">
            {accordion &&
              accordion.length > 0 &&
              accordion.map((faq) => (
                <Accordion
                  key={faq.id}
                  expanded={expanded === faq.expand} //"panel1"
                  onChange={handleChange(faq.expand)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography>{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="answer">{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
