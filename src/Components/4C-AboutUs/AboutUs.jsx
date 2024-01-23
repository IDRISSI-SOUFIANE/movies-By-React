import "./AboutUs.css";
import player from "../../../public/images/1.png";
import bicycle from "../../../public/images/2.png";
import basketball from "../../../public/images/3.png";
import tennis from "../../../public/images/4.png";
// import { useEffect } from "react";

import logos from "../../../public/data.json";

// console.log(logos["About-Us"][0].logo1);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/scrollbar";

// import Swiper core and required modules
import { Autoplay, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const AboutUs = () => {
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

  //   const [isHovered, setIsHovered] = useState(false);

  const logo = logos["About-Us"];

  return (
    <section className="about-us">
      <div className="containeofAll">
        <h2>About Us</h2>
        <div className="conatiner">
          <div className="infoabout">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              distinctio, accusamus vitae voluptas quaerat sit quia eius
              consequatur tenetur autem dolor consequuntur aut odit minima,
              possimus nihil eum a delectus Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Cumque distinctio, accusamus vitae
              voluptas quaerat sit quia eius consequatur tenetur autem dolor
              consequuntur aut odit minima, possimus nihil eum a delectus
            </p>
          </div>

          <div className="image">
            <img src={player} alt="ddefi" />
          </div>
        </div>
        <div className="conatiner">
          <div className="infoabout">
            <p>
              voluptas quaerat sit quia eius consequatur tenetur autem dolor
              consequuntur aut odit minima, possimus nihil eum a delectus
              voluptas quaerat sit quia eius consequatur tenetur autem dolor
              consequuntur aut odit minima, possimus nihil eum a delectus
              voluptas quaerat sit quia eius consequatur tenetur autem dolor
              consequuntur aut odit minima, possimus nihil eum a delectus
              voluptas quaerat sit quia eius consequatur tenetur autem dolor
              consequuntur aut odit minima, possimus nihil eum a delectus
            </p>
          </div>

          <div className="image">
            <img src={bicycle} alt="ddefi" />
          </div>
        </div>
        <div className="conatiner">
          <div className="infoabout">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              distinctio, accusamus vitae voluptas quaerat sit quia eius
              consequatur tenetur autem dolor consequuntur aut odit minima,
              possimus nihil eum a delectus Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Cumque distinctio, accusamus vitae
              voluptas quaerat sit quia eius consequatur tenetur autem dolor
              consequuntur aut odit minima, possimus nihil eum a delectus
            </p>
          </div>

          <div className="image">
            <img src={basketball} alt="ddefi" />
          </div>
        </div>
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
              {/* // 1 - ============== SWIPER ============== */}
              <Swiper
                dir="ltr"
                className="swiper"
                modules={[Autoplay, A11y]}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                  // pauseOnMouseEnter: true,
                  // ...(isHovered && { pause: true }),
                }}
                // onMouseEnter={() => setIsHovered(true)}
                // onMouseLeave={() => setIsHovered(false)}
                loop={true}
                speed={1000}
              >
                <SwiperSlide className={`swiperSlide`}>
                  <li>
                    <img src={logo[0].logo1} alt="" />
                  </li>
                  <li>
                    <img src={logo[0].logo2} alt="" />
                  </li>
                  <li>
                    <img src={logo[0].logo3} alt="" />
                  </li>
                  <li>
                    <img src={logo[0].logo4} alt="" />
                  </li>
                  <li>
                    <img src={logo[0].logo5} alt="" />
                  </li>
                  <li>
                    <img src={logo[0].logo6} alt="" />
                  </li>
                </SwiperSlide>
              </Swiper>
              {/* 1 - ============== SWIPER ============== */}
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        blanditiis soluta suscipit ipsum repudiandae eos totam esse impedit
        reprehenderit dolor eum, rem accusamus possimus porro, nulla aliquid
        excepturi assumenda quia culpa officiis enim, qui pariatur. Praesentium
        numquam quisquam soluta illo totam tempore tempora repudiandae est
        accusantium pariatur maxime iste culpa, fugit vero temporibus fugiat
        sunt incidunt atque alias consectetur in beatae! Adipisci magni
        obcaecati repudiandae porro ut error veniam, ratione deleniti voluptates
        dolores similique reiciendis velit non unde facere maiores. Ad iste ea
        deleniti molestiae distinctio, possimus quod quae, in molestias
        consequatur cum placeat ipsam aliquam explicabo delectus fuga
        voluptatum? Necessitatibus id quod odit expedita beatae voluptatem
        accusantium, impedit enim. Molestias quaerat debitis eligendi voluptas!
        Repudiandae quo ipsam omnis impedit dolorum quasi illo modi veritatis
        voluptas tempora nesciunt facere necessitatibus ea, accusantium ratione
        sapiente maiores corrupti fuga sint ab quaerat excepturi neque.
        Voluptate, possimus debitis. Incidunt voluptatem molestias tenetur iure
        perferendis porro quasi impedit voluptatum provident nihil!
        Reprehenderit suscipit ex, accusantium vel quos ipsa iste impedit porro
        voluptatum voluptas, quia at hic nobis fugit doloribus temporibus aut
        laudantium ullam saepe placeat quasi magni nihil ab. Animi, error! Quos
        aut consectetur ab asperiores recusandae fugit dolor saepe officiis,
        accusantium quasi quod illum veniam facere possimus iste. Et nam dolores
        error repellendus illum harum veritatis, optio voluptatibus, ab alias
        est dolorum exercitationem numquam quis eveniet dignissimos, velit nobis
        quasi accusamus magni labore voluptatum? Et, vitae. Consectetur nesciunt
        cum deleniti dolorem assumenda quis, debitis explicabo eaque omnis
        suscipit repellat libero molestiae quam voluptate commodi iste alias
        voluptatibus possimus velit iure! Ipsam officiis, necessitatibus sequi
        asperiores mollitia ea eaque quaerat similique cupiditate amet, qui
        magnam laudantium blanditiis. Aspernatur sapiente, quae deleniti earum
        fuga nostrum laborum? Laborum enim eum eligendi, deserunt velit numquam
        iure odit recusandae aspernatur dolore at debitis perferendis dolorem
        culpa ipsum rem. Assumenda nisi sunt numquam, odit at rem molestias
        voluptatum neque nulla amet debitis. Nostrum autem, dolor maxime omnis
        quia tempora rerum error temporibus possimus distinctio quis aut ipsam
        alias mollitia libero obcaecati harum tempore vitae? Illo blanditiis
        fugit perspiciatis perferendis dolore. Nostrum, harum quod at fugiat
        reprehenderit nesciunt deserunt aliquam iure id magni neque perferendis
        officiis similique, est tempora, sed explicabo. Dicta necessitatibus
        itaque corporis numquam quis aliquam mollitia aliquid exercitationem?
        Quidem rem corporis aliquam dolore maiores numquam odio in inventore
        tempore. Corporis repudiandae quae quos dolorem accusantium velit eum
        at, id sapiente, repellat, ducimus quo alias expedita suscipit accusamus
        quam ab. Eos deleniti est quasi accusantium sequi vero quae non adipisci
        quis optio quibusdam ad rem illo sed veniam earum quia nemo id, a ullam?
        Eligendi ullam autem laborum aliquid dolores eum id eaque laboriosam vel
        suscipit, fuga saepe quia voluptates ea beatae ducimus corrupti
        provident nihil fugit. Voluptate vero veniam dolore molestiae quo saepe
        maxime quibusdam ratione cupiditate officia autem voluptas, magni
        temporibus ea? Nemo maiores quisquam esse suscipit blanditiis obcaecati
        earum iusto velit assumenda voluptatem optio, perferendis hic ea
        laudantium cupiditate odit odio? Ea, a, consectetur saepe dolore neque
        doloremque eius eos qui quasi repudiandae atque laborum aliquid in id
        magni voluptate, nostrum sunt ex sapiente ut. Mollitia, asperiores
        dolorem! Atque assumenda dolorem repellat enim perferendis cumque
        laborum expedita deleniti sequi quibusdam libero cupiditate commodi,
        magni ullam asperiores consequatur provident? Blanditiis nobis
        repellendus magnam porro facere ipsa laborum quia vero inventore et!
        Optio unde atque neque. Vero, molestiae adipisci sint eos perspiciatis
        totam sed est tempore eaque asperiores beatae eum mollitia ratione
        eveniet facilis tenetur minima id quod. Minima doloribus debitis
        similique, numquam rerum illo temporibus quidem vel cum nulla
        reprehenderit provident error nam odio aliquam fugit sed vero eos
        delectus, mollitia inventore cupiditate amet. Dolor, alias ab. Hic
        excepturi aperiam fuga? Repudiandae quae enim alias molestiae, voluptas
        explicabo accusantium dolorem. Fuga tenetur sapiente, alias nemo eum
        inventore aspernatur deserunt dignissimos facilis, a facere reiciendis
        atque. Architecto numquam consequatur, placeat quibusdam ipsam debitis
        repellendus, recusandae suscipit provident iusto eum aut officiis quas
        eaque molestias officia nulla nostrum, aliquid odio sequi laudantium
        optio commodi? Laudantium, distinctio odit quis sapiente necessitatibus
        consequuntur libero mollitia! Praesentium harum rem quis in deserunt
        velit magni, quod maiores ducimus totam placeat consequuntur saepe
        tenetur consequatur. Nostrum quas repudiandae libero deserunt quis
        cumque fuga dolores assumenda enim repellendus, dolorem ex dolore
        reiciendis similique veritatis quisquam! Veniam temporibus dignissimos
        labore sequi laborum in cum eos tempora error odit aperiam aut eligendi
        provident obcaecati vero totam vitae illum fugit amet voluptates, iure
        iste incidunt deleniti? Velit eaque reiciendis dolorum aperiam, tenetur
        adipisci eos aliquid exercitationem quod qui aspernatur magni. Laborum,
        accusantium obcaecati! Veritatis qui, nemo eligendi doloremque maiores
        dolor esse, dicta iusto dolorem deserunt libero laborum sunt asperiores
        eius quasi eveniet? Itaque repellat repellendus non dolor,
        exercitationem debitis id explicabo totam esse voluptatibus dolorem
        dolore, natus, blanditiis veritatis quisquam! Dolorem suscipit libero
        omnis facere obcaecati, neque beatae nam soluta qui, dolores tenetur in
        quas veniam iste dignissimos voluptatibus distinctio aperiam eum ipsam.
        Aliquid quo, obcaecati laboriosam neque assumenda voluptatibus
        voluptatem inventore. Tempore est molestiae consectetur voluptates,
        architecto corporis, officia ex nobis voluptate quasi commodi libero
        quisquam autem odio hic. Error exercitationem corporis blanditiis
        quaerat, sit, veritatis temporibus voluptatem, ea illo facilis odio
        maxime quasi impedit. Rerum, aspernatur velit! Voluptate, a nulla
        voluptatum sequi explicabo vero adipisci, possimus numquam suscipit
        itaque modi eius aut. Eos esse nihil consectetur aliquam recusandae rem
        aut? A omnis velit mollitia! Dolor minus, tempora at dolore debitis et
        iste enim pariatur quod ut tenetur illo adipisci ad quibusdam
        perferendis neque natus nam facilis corporis architecto! Reiciendis,
        officiis? Porro voluptatum minima quae! Voluptas quas repellendus
        ratione non assumenda. Magni quis repellat nisi suscipit ipsa cupiditate
        delectus quae sed illo sint vero incidunt, qui commodi ut libero tenetur
        ab nobis praesentium mollitia sunt. Incidunt amet rerum corporis porro
        quod, ipsa earum aut molestiae! Sequi doloribus laudantium esse dolor
        debitis, quo perspiciatis similique repellat nobis reiciendis
        reprehenderit eum corrupti fugiat ad fugit illum alias omnis deleniti.
        Laborum, incidunt deserunt? Libero at possimus a commodi totam vero
        assumenda, autem expedita odio animi mollitia doloremque labore tenetur
        officia consectetur doloribus non tempore. Tempore expedita temporibus
        sint voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore ullam saepe unde doloremque quis dignissimos sequi
        maiores quae, optio dolor laudantium quaerat ad odit itaque cum
        asperiores sint! Ullam incidunt perspiciatis ut? Dolor voluptatum est
        dignissimos ut sapiente distinctio, nihil in recusandae! Commodi
        suscipit quam, corporis, deserunt fugiat eveniet dolor quasi rem fugit
        id esse ut, nulla animi? Error, laboriosam dicta? Nam doloremque fuga
        ipsam voluptates vel nihil asperiores omnis necessitatibus laudantium
        exercitationem nulla tenetur commodi aperiam, impedit excepturi beatae,
        odio molestiae saepe. Fugit libero ratione, aliquid cum eum corporis
        voluptatibus commodi illo quia magni corrupti maxime doloremque
        perspiciatis. Assumenda consectetur quis quia reprehenderit doloremque!
        Neque dolores nam, eos doloremque distinctio nesciunt corporis dolorem
        molestiae voluptates. A quisquam magnam tempora sequi quis quam nihil
        molestias explicabo soluta doloremque commodi sint repellendus
        voluptatem, aspernatur quos impedit eum amet ratione corporis
        voluptatibus voluptate sit. Molestias alias delectus sunt facilis
        voluptas provident totam consectetur, voluptate cupiditate minus
        inventore illo eius maiores odio unde quidem exercitationem ad animi
        ullam sint! Dignissimos porro suscipit, adipisci repudiandae inventore
        eum sint dicta harum incidunt necessitatibus neque praesentium
        repellendus magni provident, doloremque animi maxime a beatae nesciunt
        amet fugit! Quaerat ullam voluptas facere est, molestiae odit numquam?
        Assumenda, distinctio. Perferendis officia, ipsum odit totam tempora
        tenetur vel modi nisi asperiores architecto a quam non ea amet
        repellendus rem voluptatem nihil velit sequi necessitatibus
        perspiciatis! Modi eum necessitatibus eaque atque repellendus eveniet
        dolorum laudantium sed iusto praesentium magni aut quae magnam illum, et
        deleniti ab iure, quasi repellat reprehenderit exercitationem? Dolore
        qui ad itaque commodi ipsam mollitia totam excepturi corporis nesciunt
        corrupti repudiandae doloribus cumque repellendus, vel iusto
        necessitatibus culpa pariatur laborum at ea aut voluptatem! Sit esse
        magnam illum sequi perferendis voluptas numquam. Nobis natus illo quod
        recusandae accusantium excepturi necessitatibus distinctio quia ipsam
        architecto! Maiores sapiente commodi officiis dolores magni neque dolor
        error reprehenderit exercitationem consequuntur maxime temporibus et
        ducimus tempora praesentium, recusandae velit blanditiis officia enim,
        repudiandae totam eum quibusdam saepe. Animi, quidem. Quia accusamus,
        esse corporis quisquam sapiente impedit, dolores eius perferendis
        accusantium, et consectetur! Sint temporibus deleniti commodi voluptatum
        sequi sunt dignissimos enim numquam illum dolorum optio facere,
        molestiae consequatur ipsa iusto quasi minima obcaecati nemo,
        voluptatibus velit ullam tempore quidem! Error quod, excepturi corporis
        ab, nam deserunt explicabo quia optio perspiciatis reiciendis
        necessitatibus officiis reprehenderit animi aliquam, magni repudiandae
        veniam totam! Magnam deserunt nisi sapiente est laborum eligendi, alias
        dolores id adipisci dolor debitis similique inventore. Ea error sequi
        voluptate beatae ut nisi voluptatem officiis esse autem reiciendis
        recusandae maxime, neque earum, accusamus perferendis. Natus, animi
        sapiente? Quas optio iste et a, perspiciatis adipisci quidem nulla quis
        consectetur vitae labore consequuntur quam amet eum quo deleniti
        accusantium itaque laboriosam. Voluptas vitae maiores vel eveniet earum,
        accusamus provident consectetur itaque molestiae similique libero
        voluptates incidunt asperiores velit, quos error, illo deleniti ipsum at
        totam temporibus aut suscipit? Hic at praesentium perspiciatis quasi
        quidem consectetur quibusdam eum minima iusto totam cum omnis maiores
        enim, dolorum esse sunt molestiae! Dignissimos praesentium alias sunt
        vel deleniti, nulla quibusdam dolor nesciunt illo consequuntur ut
        aperiam quis sapiente possimus exercitationem itaque mollitia voluptas
        molestiae fuga facilis assumenda recusandae expedita ratione. Corporis
        cupiditate soluta doloremque enim cumque! Similique quam obcaecati
        consequatur voluptatum molestias dolorum amet iste quo dolore distinctio
        illo, quibusdam sunt animi delectus impedit expedita, minima ducimus
        vero, ut fugit in dolores suscipit corrupti atque? Est perferendis
        dolores quaerat dicta voluptatum temporibus. Perferendis, porro. Facere
        ducimus id neque doloribus corporis labore, illum omnis reiciendis
        laborum voluptatum dicta quas in provident. Facere ipsum libero eos quas
        dolorem ullam unde nulla quidem dolor exercitationem. Officiis, corporis
        architecto beatae cumque ex nihil voluptas maxime! Asperiores sequi
        ipsum corporis eius? Est, hic exercitationem deleniti ex vel unde
        architecto doloribus, placeat fuga delectus dolor ut quo cumque nostrum
        ipsum, praesentium quibusdam laudantium eligendi vero cum dolores? Unde
        corporis a pariatur inventore iste expedita, sequi molestiae facilis
        corrupti praesentium excepturi quaerat, est consequuntur consequatur
        laboriosam accusantium. Qui aut, modi optio, atque quaerat iusto natus
        eligendi nam perspiciatis nemo magnam animi sed. Totam repellendus
        deserunt soluta ut quasi sunt id dolorum hic sed, fugit maiores, rem
        quia qui expedita odit possimus nam velit! Laboriosam quidem enim velit
        reiciendis, ipsam sit laudantium incidunt eos eum reprehenderit id
        fugiat! Officiis eveniet incidunt facilis quisquam magnam excepturi.
        Corrupti sint ad voluptate, delectus porro, corporis nostrum eum natus
        aut quibusdam, veritatis nulla laborum soluta? Dolor in porro magni
        totam tenetur explicabo nihil quaerat eum, nulla molestias ut deleniti
        at sequi praesentium delectus soluta commodi doloremque! Molestiae
        beatae rerum ipsa voluptatibus, quia a voluptas aliquam nulla eius
        accusamus facere non temporibus alias nostrum similique nemo, iusto
        tempore tempora velit provident est culpa quam dignissimos nobis! Porro
        quos inventore eligendi repellendus perferendis. Doloribus earum quasi
        laudantium id repudiandae minus culpa nostrum optio praesentium. Et vel
        veniam similique culpa dolores hic vero, omnis inventore mollitia nam
        excepturi, voluptates consectetur natus in neque autem, quae fugit
        molestiae adipisci quisquam aliquam. Culpa dolores suscipit id dicta,
        quae, placeat corrupti voluptate expedita dolorem natus vitae voluptates
        ratione magnam dignissimos maiores aliquam? Id, quidem in. Perspiciatis
        delectus error dolores debitis exercitationem quae ipsa, rerum
        laudantium voluptatum nobis voluptates soluta blanditiis minus velit
        magnam excepturi illo facilis impedit necessitatibus! Magnam labore id
        aliquid accusamus laudantium consequuntur rerum necessitatibus odio
        sapiente obcaecati, error culpa saepe, hic beatae iste expedita earum
        reiciendis laborum quo ipsum aut. Iste debitis quidem neque repellendus
        modi non praesentium veritatis magni, provident hic! Consequatur,
        voluptates fugiat. Fugiat, ducimus laborum! Aspernatur a sint nam ab
        nostrum doloribus saepe culpa magnam minus, iusto atque harum sunt
        ullam? Vero, nobis! Eius tempora odit amet ducimus vero culpa mollitia
        deleniti? Nisi rerum ut, facilis omnis excepturi tempore enim fuga non
        corporis fugiat laudantium eum laborum ad molestiae aspernatur repellat
        optio dicta, esse recusandae. Aliquid, animi dolore ex, deserunt
        architecto repellat beatae soluta odio modi inventore adipisci
        voluptatum voluptate fuga, consectetur error odit reiciendis laudantium?
        Illo, ratione. Veritatis rem libero maxime cum aperiam, perferendis
        illum placeat reiciendis neque veniam alias, enim molestias et quas
        magnam aliquid? Provident illo alias ad?
      </div> */}
    </section>
  );
};

export default AboutUs;
