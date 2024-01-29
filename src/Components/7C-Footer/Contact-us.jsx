// import { useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";

import "./Contact-us.css";
import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {
  //   const [inputValue, setInputValue] = useState("");
  const [state, handleSubmit] = useForm("xvoezyod");

  return (
    <section className="contact-us">
      <h2>Get In Touch</h2>

      <div className="content">
        <div className="left">
          <form onSubmit={handleSubmit} action="">
            <div className="name-email">
              <input
                autoComplete="of"
                required
                type="text"
                id="name"
                placeholder="Name"
              />
              <input
                autoComplete="off"
                required
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="subject-message-btn">
              <textarea type="text" id="subject" placeholder="Subject" />
              <textarea
                autoComplete="off"
                required
                type="email"
                id="message"
                name="message"
                placeholder="Message"
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button type="submit" disabled={state.submitting} className="btn">
                {state.submitting ? "submitting" : "Send Message"}
              </button>

              {state.succeeded && (
                <p
                  style={{
                    color: "#fff",
                    fontSize: "2rem",
                    marginTop: "0rem",
                  }}
                  className="pPopUp"
                >
                  Your Message Send
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="right">
          <a href="#">
            <i className="fa-brands fa-whatsapp"></i>
            <div>
              <p>Call Us On</p>
              <p>+212 6 26 31 55 64</p>
            </div>
          </a>

          <div className="a">
            <i className="fa-regular fa-envelope"></i>
            <div>
              <p>Email</p>
              <p>idrissisoufiane200@gmail.com</p>
            </div>
            {/* <CopyToClipboard text={inputValue}> */}
            <i className="fa-regular fa-copy"></i>
            {/* </CopyToClipboard> */}
          </div>

          <a href="#">
            <i className="fa-brands fa-facebook"></i>
            <div>
              <p>Facebook</p>
              <p>Soufiane Idrissi</p>
            </div>
          </a>

          <a href="#">
            <i className="fa-brands fa-instagram"></i>
            <div>
              <p>Instagrame</p>
              <p>SoufianeIDrissi/</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
/*
          <div className="allContent">
            <input
              // href="#"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <div className="contentInput">
              <i className="fa-regular fa-envelope"></i>
              <div>
                <p>Email</p>
                <p>idrissisoufiane200@gmail.com</p>
              </div>
              <CopyToClipboard text={inputValue}>
                <i className="fa-regular fa-copy"></i>
              </CopyToClipboard>
            </div>
          </div>

*/
