import "./Hero.css";
import data from "../../../public/data.json";

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

        <div className="animation-svg">animation</div>
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
