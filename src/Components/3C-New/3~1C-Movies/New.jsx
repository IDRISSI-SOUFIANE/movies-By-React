import "./New.css";

import MoviesSlide from "./3~1C-MoviesSwiper/MoviesSlide";
import Tv from "../3~2C-Tv/Tv";

const New = () => {
  return (
    <section className="new" id="Whats New">
      <div className="info">
        <h1>Always up to date.</h1>
        <p>
          Explore our curated lists and stay tuned with the latest shows and
          movies from all over the world.
        </p>
      </div>

      <div className="scroll">
        <MoviesSlide />
        <Tv />
      </div>
    </section>
  );
};

export default New;
