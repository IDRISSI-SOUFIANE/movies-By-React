import "./AboutUs.css";

import tennis from "../../../public/images/4.png";

import data from "../../../public/data.json";

const AboutUs = () => {
  return (
    <section className="about-us" id="About-Us">
      <div className="containeofAll">
        <h2>About Us</h2>

        {data["About-Us"][0].content.map((info) => (
          <div className="conatiner" key={info.id}>
            <div className="infoabout">
              <p>{info.p}</p>
            </div>

            <div className="image">
              <img src={info.img} alt="image" />
            </div>
          </div>
        ))}

        <div className="last-page">
          <div className="conatiner">
            <div className="infoabout">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                distinctio, accusamus vitae voluptas quaerat sit quia eius
                consequatur tenetur autem dolor consequuntur aut odit minima,
                possimus nihil eum a delectus Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Cumque distinctio, accusamus
                vitae voluptas quaerat sit quia eius consequatur tenetur autem
                dolor consequuntur aut odit minima, possimus nihil eum a
                delectus
              </p>
            </div>

            <div className="image">
              <img src={tennis} alt="ddefi" />
            </div>
          </div>

          <div className="belt">
            <div className="Advantages">
              <div>
                <p>4k</p>
                <p>Ultra 4K quality</p>
              </div>

              <div>
                <p className="num" data-goal="350">
                  35000 +
                </p>
                <p>Live Tv & Sport Channels</p>
              </div>

              <div>
                <p className="num" data-goal="200">
                  2000 +
                </p>
                <p>Movies & Series</p>
              </div>
            </div>

            <div className="scroll-Logo">
              <marquee>
                <ul>
                  {data["About-Us"][0].Logos.map((logo) => (
                    <li key={logo.id}>
                      <img src={logo.img} alt="logo" />
                    </li>
                  ))}
                </ul>
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

/* 
  // useEffect(() => {
  //   let nums = document.querySelectorAll(".Advantages .num");
  //   let section = document.querySelector(".belt");

  //   let started = false;

  //   window.onscroll = function () {
  //     // Use `window.scrollY` instead of `window.scroll`
  //     if (window.scrollY >= section.offsetTop) {
  //       if (!started) {
  //         nums.forEach((num) => startCount(num));
  //       }
  //       started = true;
  //     }
  //   };

  //   function startCount(el) {
  //     let goal = parseInt(el.dataset.goal);
  //     console.log(goal);

  //     let count = setInterval(() => {
  //       el.textContent = parseInt(el.textContent) + 1;

  //       if (parseInt(el.textContent) >= goal) {
  //         clearInterval(count);
  //         el.textContent = goal; // Ensure the final value is exactly the goal
  //       }
  //     }, 2000 / goal);
  //   }

  //   // Trigger the counting immediately when the component mounts
  //   // nums.forEach((num) => startCount(num)); ****

  //   // Cleanup the scroll event listener when the component is unmounted
  //   return () => {
  //     window.onscroll = null;
  //   };
  // }, []);
*/
