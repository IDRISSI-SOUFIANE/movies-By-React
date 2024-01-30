import "./NavBar.css";
import Headroom from "react-headroom";

import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";

import data from "../../../public/data.json";

const title = data.Header[0].title;
const links = data.Links;

const NavBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const links_in_Media = document.querySelectorAll(".links-in-Media a");
    links_in_Media.forEach((link) =>
      link.addEventListener("click", (e) => {
        links_in_Media.forEach((link) => link.classList.remove("active"));
        e.target.classList.add("active");
        setShow(false);
      })
    );
  }, []);

  const changeIcon = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <Headroom>
      <header className="container">
        <div className="Brand-links">
          {show == true ? (
            <p className="ShowIsTrue">SID MIX</p>
          ) : (
            <p className="Brand">{title}</p>
          )}
          <ul>
            {links &&
              links.length > 0 &&
              links.map((link, index) => (
                <li key={link.id}>
                  <Link
                    className={index === 0 ? "first-link" : ""}
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
        </div>
        <div className="btn-menu-icon">
          <button>Login</button>
          <div
            onClick={() => changeIcon()}
            className={`menu-icon ${show == true ? "active" : undefined}`}
          >
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={`links-in-Media ${show == true ? "active" : undefined}`}>
          {links &&
            links.length > 0 &&
            links.map((link) => (
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
      </header>
    </Headroom>
  );
};

export default NavBar;
