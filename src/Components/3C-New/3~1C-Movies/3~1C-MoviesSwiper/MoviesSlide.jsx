import "./MoviesSlide.css";

import { useEffect, useState } from "react";
import YouTube from "react-youtube";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/scrollbar";

// import Swiper core and required modules
import { Autoplay, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const MoviesSlide = () => {
  // const [isHovered, setIsHovered] = useState(false);

  const [movies, setMovies] = useState([]);

  const [clickedSlide, setClickedSlide] = useState([] || undefined);

  const [popUpBox, setPopUpBox] = useState(false);

  const [video, setVideo] = useState([]);

  const [youtubeId, setYoutubeId] = useState();

  const videoBref = video;
  setTimeout(() => {
    if (videoBref.length > 0) {
      // console.log("Yes is biger than > 0");
      // console.log(xx);
      // console.log(xx[0].key);
      setYoutubeId(videoBref[0].key);
    } else {
      // console.log("Yes is smaller than < 0");
      setYoutubeId("");
    }
  }, 500);

  const closeIcon = (event) => {
    if (popUpBox == true) {
      setPopUpBox(false);
      event.target.pauseVideo();
    }
  };

  // function videoOnReady(event) {
  //   event.target.pauseVideo();
  // }

  // ==== FETCH DATA ====
  const api_key = "dfdb8fba093651a08fc61b28b9c3c796";
  const base_url = "https://api.themoviedb.org/3";
  const get_movies = "/discover/movie";
  const base_img = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    clickedSlide;

    // =================== ========================== ======================

    async function fetchMovies(api) {
      const response = await fetch(api);
      const data = await response.json();
      setMovies(data.results);
    }

    const api_url = `${base_url}/${get_movies}?api_key=${api_key}`;

    // =================== ========================== ======================

    async function fetchbrefMovies(brf) {
      const response = await fetch(brf);
      const databref = await response.json();
      setVideo(databref.results);
    }

    const bref = `${base_url}/movie/${clickedSlide.id}/videos?api_key=${api_key}`;

    fetchMovies(api_url);
    fetchbrefMovies(bref);
  }, [clickedSlide.id, clickedSlide]);

  // ==== FETCH DATA ====

  return (
    <div className="parent-container">
      <Swiper
        dir="rtl"
        className="swiper"
        modules={[Autoplay, A11y]}
        spaceBetween={25}
        slidesPerView={20}
        // autoplay={{
        //   delay: 0,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        //   ...(isHovered && { pause: true }),
        // }}
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
        // loop={true}
        // speed={1000}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          550: {
            slidesPerView: 2,
          },
          760: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
          1300: {
            slidesPerView: 5,
          },
        }}
      >
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => (
            <SwiperSlide
              className={`swiperSlide `}
              key={movie.id}
              onClick={() => {
                setClickedSlide(movie);
                setPopUpBox(true);
              }}
            >
              <img
                src={`${base_img}${movie.poster_path}`}
                alt={movie.original_language}
                className="image"
              />
              <div className="play">
                <i className="fa-regular fa-circle-play"></i>
                <p>Play Trailer</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className={`popUpBox ${popUpBox == true ? "active" : undefined}`}>
        <div className="conentInf">
          <div className="close-icon" onClick={() => closeIcon()}>
            <i className="fa-solid fa-circle-xmark"></i>
          </div>

          <div className="image">
            <YouTube videoId={youtubeId} />
          </div>

          <div className="description">
            <h3>{clickedSlide.title}</h3>
            <p>{clickedSlide.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesSlide;
