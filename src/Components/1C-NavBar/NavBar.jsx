import "./NavBar.css";

import data from "./data.json";
console.log(data);

const NavBar = () => {
  return (
    <header className="container">
      <div className="Brand-links">
        <p className="Brand">SIDMIX</p>
        <ul>
          {/* {links &&
            links.length > 0 &&
            links.map((link, index) => (
              <li key={link.id}>
                <a href="#" className={index === 0 ? "first-link" : ""}>
                  {link.title}
                </a>
              </li>
            ))} */}
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
  );
};

export default NavBar;
