import "./Hero.css";

import { Link } from "react-scroll";

import data from "../../../public/data.json";

import Lottie from "lottie-react";
import watchAnimation from "../../../public/images/watch.json";
// import image from "../../../public/images/1.png";

const Hero = () => {
  return (
    <section className="hero" id="Home">
      <div className="container">
        <div className="info">
          <p>
            {data.Hero[0].p} <span>{data.Hero[0].span}</span>
          </p>
          <Link
            className="button"
            to="Prices"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
          >
            {data.Hero[0].btn}
          </Link>
        </div>

        <div className="animation-svg">
          <Lottie
            className="watchanimation"
            // style={{ height: 300 }}
            animationData={watchAnimation}
          />
        </div>
      </div>

      <div className="animation-Button">
        <Link
          to="Whats New"
          spy={true}
          smooth={true}
          offset={-100}
          duration={800}
        >
          <i className="fa-solid fa-arrow-down"></i>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
