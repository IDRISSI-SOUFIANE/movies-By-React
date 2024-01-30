import { useEffect, useState } from "react";
import "./Tabs.css";

import Videotape from "../../../public/images/Videotape-amico.svg";

import data from "../../../public/data.json";

const Tabs = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let tabs = document.querySelectorAll(".tabs li");
    let tabsArray = Array.from(tabs);
    let divs = document.querySelectorAll(".cards-container");
    let divsArray = Array.from(divs);

    tabsArray.forEach((ele) => {
      ele.addEventListener("click", function (e) {
        // Remove Class "active" from li
        tabsArray.forEach((ele) => {
          ele.classList.remove("active");
        });
        // Add Class "active" for li
        e.currentTarget.classList.add("active");

        divsArray.forEach((div) => {
          div.style.display = "none";
        });
        // console.log(e.currentTarget.dataset.cont);
        document.querySelector(e.currentTarget.dataset.cont).style.display =
          "flex";
      });
    });

    // const loginBox = document.querySelector(".login-box");

    // const timer = setTimeout(() => {
    //   loginBox;
    // }, 7000);

    // // Cleanup function to clear the timer when the component unmounts
    // return () => clearTimeout(timer);
  }, []);

  const check = () => {
    setShow(true);
  };

  const closePoUp = () => {
    setShow(false);
  };

  return (
    <section className="prices" id="Prices">
      <h1>Select your plan</h1>

      <div className="container">
        <ul className="tabs">
          <li className="active" data-cont=".one">
            Shaihd
          </li>
          <li data-cont=".three">Spotify</li>
          <li data-cont=".two">Iptv</li>
          <li data-cont=".four">Netflix</li>
        </ul>

        <div className="cards-container one">
          {data.Tabs[0].Shahid.map((card) => (
            <div className="card" key={card.id}>
              <h2>{card.h2}</h2>
              <p>
                <span>$</span>
                {card.firstP}.00
              </p>

              <div className="card-content">
                <p>{card.p1}</p>
                <p>{card.p2}</p>
                <p>{card.p3}</p>
                <p>{card.p4}</p>
                <p>{card.p5}</p>
              </div>
              <button onClick={check}>{card.btn}</button>
            </div>
          ))}
        </div>

        {/* ========================================= */}

        <div className="cards-container two">
          {data.Tabs[0].Iptv.map((card) => (
            <div className="card" key={card.id}>
              <h2>{card.h2}</h2>
              <p>
                <span>$</span>
                {card.firstP}.00
              </p>

              <div className="card-content">
                <p>{card.p1}</p>
                <p>{card.p2}</p>
                <p>{card.p3}</p>
                <p>{card.p4}</p>
                <p>{card.p5}</p>
              </div>
              <button onClick={check}>{card.btn}</button>
            </div>
          ))}
        </div>

        {/* ========================================= */}

        <div className="cards-container three">
          {data.Tabs[0].Spotify.map((card) => (
            <div className="card" key={card.id}>
              <h2>{card.h2}</h2>
              <p>
                <span>$</span>
                {card.firstP}.00
              </p>

              <div className="card-content">
                <p>{card.p1}</p>
                <p>{card.p2}</p>
                <p>{card.p3}</p>
                <p>{card.p4}</p>
                <p>{card.p5}</p>
              </div>
              <button onClick={check}>{card.btn}</button>
            </div>
          ))}
        </div>

        {/* ========================================= */}

        <div className="cards-container four">
          {data.Tabs[0].Netflix.map((card) => (
            <div className="card" key={card.id}>
              <h2>{card.h2}</h2>
              <p>
                <span>$</span>
                {card.firstP}.00
              </p>

              <div className="card-content">
                <p>{card.p1}</p>
                <p>{card.p2}</p>
                <p>{card.p3}</p>
                <p>{card.p4}</p>
                <p>{card.p5}</p>
              </div>
              <button onClick={check}>{card.btn}</button>
            </div>
          ))}
        </div>
        {/* ========================================= */}

        <div className={`layer ${show == true ? "active" : undefined}`}>
          <div
            className={`login-box popup-box ${
              show == true ? "active" : undefined
            }`}
          >
            <i className="fa-solid fa-circle-xmark" onClick={closePoUp}></i>

            <img src={Videotape} alt="img" />
            <div className="left">
              <h2>Stream IPTV Effortlessly with Google Login</h2>
              <p>
                Say goodbye to complicated login processes and hello to seamless
                streaming with Google Login for your IPTV site. Simply link your
                Google account and save your accounts with just one click
              </p>

              <button type="button" className="g">
                Login with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
