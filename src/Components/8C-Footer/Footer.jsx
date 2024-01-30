import "./Footer.css";

import data from "../../../public/data.json";

import { Link } from "react-scroll";

console.log(data.footer.map((feet) => console.log(feet)));

const Footer = () => {
  return (
    <section className="footer">
      <div className="left">
        <p>Copyright © 2023 Glory SID All rights reserved.</p>
      </div>
      <div className="right">
        <ul>
          {data.footer &&
            data.footer.length > 0 &&
            data.footer.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.title}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                >
                  {link.title}
                </Link>
              </li>
            ))}
        </ul>

        {/* <ul>
          <li>FAQ</li>
          <li>Prices</li>
          <li>About-Us</li>
          <li>Whats New</li>
        </ul> */}
      </div>
    </section>
  );
};

export default Footer;
