import "./Hero.css";
import data from "../../../public/data.json";

import Lottie from "lottie-react";
import watchAnimation from "../../../public/images/watch.json";
// import image from "../../../public/images/1.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="info">
          <p>
            {data.Hero[0].p} <span>{data.Hero[0].span}</span>
          </p>
          <button>{data.Hero[0].btn}</button>
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
        <a href="#">
          <i className="fa-solid fa-arrow-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
