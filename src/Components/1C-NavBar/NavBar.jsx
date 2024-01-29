import "./NavBar.css";
import Headroom from "react-headroom";

import data from "../../../public/data.json";

const title = data.Header[0].title;
const links = data.Links;

const NavBar = () => {
  return (
    <Headroom>
      <header className="container">
        <div className="Brand-links">
          <p className="Brand">{title}</p>
          <ul>
            {links &&
              links.length > 0 &&
              links.map((link, index) => (
                <li key={link.id}>
                  <a href="#" className={index === 0 ? "first-link" : ""}>
                    {link.title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div className="btn-menu-icon">
          <button>Login</button>
          <div className="menu-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </Headroom>
  );
};

export default NavBar;
