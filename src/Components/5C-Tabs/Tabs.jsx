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

    const loginBox = document.querySelector(".login-box");

    const timer = setTimeout(() => {
      loginBox;
    }, 7000);

    // Cleanup function to clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const check = () => {
    setShow(true);
  };

  const closePoUp = () => {
    setShow(false);
  };

  return (
    <section className="prices">
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

      <div className="test">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
          recusandae sed eligendi voluptatibus quod rerum, excepturi facilis
          tempore rem? Eveniet, qui! Recusandae pariatur tempore amet?
          Consequatur ad perferendis atque, minima, sed voluptatem soluta ipsa
          deleniti numquam dignissimos enim eligendi porro ut eius temporibus
          voluptate! Fugiat dignissimos aspernatur neque, dolore, autem tenetur
          necessitatibus nisi molestias aliquid non omnis, quisquam voluptates
          vero! Assumenda, veritatis cum? Voluptatem dicta amet totam enim
          numquam quidem esse harum? Placeat nostrum corrupti quisquam
          voluptatum facere commodi labore sint ex corporis dolores ipsum
          temporibus omnis eum voluptate ullam a consequatur beatae, sapiente
          non, provident unde ipsa. Porro vel fuga vitae ullam itaque cupiditate
          nisi distinctio debitis dignissimos tempore amet facere rerum et
          dolorum maiores, ex natus quam. Quas officiis blanditiis dolor
          exercitationem? Ab magni nihil a similique praesentium possimus ipsum
          expedita aperiam quidem qui culpa ipsam laborum fugit optio non fuga
          ducimus, placeat natus asperiores! Cupiditate sequi amet ad facere
          accusamus quam, totam commodi corrupti fuga at sit aliquam similique
          placeat iusto possimus quibusdam vel dicta exercitationem temporibus.
          Quisquam harum vero quidem nam illum reprehenderit eum nulla
          cupiditate non debitis possimus ducimus fugit cumque alias quos
          similique tenetur dolores nisi consequatur amet iusto voluptatem quo,
          et ullam. Voluptas praesentium sunt cumque velit. Necessitatibus
          aliquid impedit doloribus neque! Temporibus numquam sequi quos
          architecto laboriosam qui cupiditate fugit eveniet non repellat.
          Doloribus possimus aliquid ipsa, sit minus in ad repellat quaerat ex.
          Dignissimos corrupti libero nemo voluptatem? Sequi error ipsum magnam,
          iure tenetur laboriosam enim assumenda quas maiores fuga possimus unde
          repellendus vero, laudantium at, veniam quam pariatur nulla!
          Aspernatur exercitationem, reiciendis optio nisi placeat dolorem ex
          iste tempore numquam beatae rerum quae. Nostrum, assumenda inventore
          molestias debitis saepe maiores optio voluptatem doloremque numquam
          quae possimus deserunt commodi distinctio ipsam explicabo sed, velit
          dolorum esse. Libero, cupiditate. Ea deserunt voluptatum placeat rerum
          sequi voluptas commodi fugiat aut praesentium quo ipsam sapiente
          natus, totam reprehenderit necessitatibus debitis id, et illo dolor
          nemo reiciendis numquam a itaque atque! Fugit, pariatur tempora
          tenetur atque laboriosam animi ipsum neque odit earum quidem ut
          veritatis aspernatur repudiandae dolor? Eveniet assumenda quis cumque
          consequuntur fugiat suscipit cupiditate inventore maiores neque, animi
          quisquam in sit ullam veritatis minus magnam aspernatur autem. Porro
          cumque quam laboriosam. Cumque perspiciatis inventore error molestiae
          ut libero nesciunt tempore, excepturi, necessitatibus minima enim vel
          repudiandae atque nostrum earum ducimus corrupti cupiditate unde
          explicabo fugit? Amet, eligendi numquam? Ratione velit sit
          exercitationem necessitatibus commodi at esse ut mollitia est dolor
          earum quis reiciendis quas eaque eius, quibusdam quam, debitis
          aspernatur reprehenderit sed. Quas similique unde, consectetur
          molestias earum iste commodi soluta sapiente quos mollitia expedita
          natus, nulla quaerat ipsam cumque eos quod. Animi, impedit? Tenetur,
          rerum quam? Suscipit nemo earum nisi veniam atque perferendis eius.
          Exercitationem iure ullam reiciendis repellendus provident, expedita
          maxime delectus minima molestiae incidunt in, voluptatibus, sequi
          amet! Exercitationem magni, aperiam neque, deleniti eum optio vero
          reiciendis, nostrum dolores sint eaque quam rem ullam porro recusandae
          quaerat magnam saepe iusto quod laudantium vel cupiditate alias
          doloribus. Numquam, unde culpa quibusdam tempore cum eaque iusto
          accusamus cupiditate molestias aut consequatur obcaecati eligendi
          reprehenderit facere quaerat dolorem modi impedit nihil. Repudiandae,
          consequuntur, fuga aperiam neque quo sunt sequi nam itaque recusandae
          iste explicabo aliquam. Ad totam error non deleniti! Modi facilis
          totam voluptatum, accusantium quae dolores voluptas! Nesciunt autem
          nisi pariatur saepe illum itaque fugit ratione officiis expedita
          mollitia distinctio facilis impedit aliquam tenetur aperiam laborum,
          deleniti exercitationem sit accusamus rem quidem ex. Veniam quidem
          consectetur modi adipisci, nisi suscipit ad repellendus dolorem
          delectus commodi nemo doloremque fugiat, veritatis quos assumenda
          laboriosam animi aperiam doloribus fugit totam nostrum ea. Eos esse
          fugit corporis voluptatum consectetur suscipit. Incidunt fugiat, ipsam
          quis quidem illo delectus similique assumenda iste illum, maiores est
          dicta qui. Nemo, repudiandae, impedit animi repellat nisi modi aliquam
          facilis ipsam soluta, voluptatum voluptate. Maxime, at ad magnam nulla
          minima, id sequi iure nihil sunt rem eaque! Expedita quod quis
          molestiae? Ipsam reprehenderit quibusdam explicabo, architecto eos
          dolore, iusto eaque quaerat, soluta quasi ipsa voluptatibus ea nemo!
          Harum vel iusto asperiores ducimus non rerum quos quae ad neque,
          inventore voluptatum animi, praesentium suscipit iure, perferendis
          saepe itaque facere. Voluptate repellat reprehenderit soluta animi
          deleniti sunt quos quasi ipsa quia, facere aut molestias eum est iste?
          Atque recusandae et iusto officiis aliquid incidunt molestias
          excepturi consequatur iure. Laudantium corrupti expedita deleniti
          quaerat incidunt, iusto sequi, numquam dolor voluptas in quibusdam
          provident exercitationem id molestias saepe iste doloribus? Qui alias
          incidunt consequatur ex, aut dolor doloremque ratione est. Facilis
          necessitatibus voluptatibus velit odio! Eaque unde maiores minus odit
          consequuntur cupiditate quaerat blanditiis vitae magnam voluptates
          perspiciatis voluptas obcaecati esse, ex officia quod omnis, soluta
          recusandae, autem cum debitis dolorem optio. Dolorum esse asperiores
          excepturi saepe, maxime nemo id quasi ipsam laborum reprehenderit quam
          placeat dolor maiores architecto expedita sed error unde aut corporis
          eum illum aperiam? Perspiciatis harum placeat beatae? Nam eum repellat
          soluta, ad ullam ex ea sed voluptate mollitia fugit. Magnam quia et
          nemo, repellendus hic vitae quidem asperiores neque obcaecati id
          rerum, a excepturi, exercitationem doloremque officia! Hic, odit
          asperiores? Obcaecati nostrum aperiam molestiae iste consequuntur
          officiis ex ullam autem cupiditate incidunt dignissimos rerum, magni
          voluptatem a. Ut id eos aperiam quia dolor illum rem molestiae totam
          architecto molestias hic adipisci repellat itaque, voluptates eum
          corrupti, temporibus delectus esse. Vel minus, pariatur nostrum,
          reiciendis necessitatibus ipsum blanditiis eveniet, omnis eius nisi
          excepturi dolorem. Quisquam aliquid illo molestiae officia, nulla,
          voluptates nesciunt repellendus reiciendis odit deleniti impedit
          earum, dicta error qui! Dolorem vitae vero quaerat voluptate ab odio
          laborum eaque sequi corporis repellat. Voluptatem ad quibusdam earum
          repellat quod libero dolorem quis quaerat necessitatibus quas natus
          enim asperiores esse, corrupti praesentium nihil atque inventore vel
          neque suscipit debitis deleniti non officiis consectetur. Vero dolore
          id ab dolor voluptatem enim consequuntur, error ad ipsa exercitationem
          harum veritatis necessitatibus quis ratione odio recusandae fugit!
          Voluptate, assumenda! Deserunt mollitia beatae rem quae at
          necessitatibus alias dignissimos sunt ipsa! Cum repudiandae pariatur
          dolor ea blanditiis id consequuntur minima maxime? Distinctio commodi
          quae explicabo architecto ipsam reiciendis!
        </p>
      </div>
    </section>
  );
};

export default Tabs;
