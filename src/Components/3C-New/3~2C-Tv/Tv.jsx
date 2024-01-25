// 1 - SWIPER
// 2 - FETSH DATA => 2.1 : FETSH DATA MOVIES / 2.2 : FETSH DATA ID FOR SPESIFIC MOVIE
// 3 - POPUPBOX AND ICON OF CLOSE, WHEN CLICKED ICON CLOSE POPUPBOX AND CLOSE VIDEO
// 4 - SETTIMEOUT IS PREVENT AN ERROR

// import "./Tv.css";
import "../3~1C-Movies/3~1C-MoviesSwiper/MoviesSlide.css";

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
  //   const [isHovered, setIsHovered] = useState(false);

  const [movies, setMovies] = useState([]);

  const [clickedSlide, setClickedSlide] = useState([] || undefined);
  // console.log(clickedSlide);
  const [popUpBox, setPopUpBox] = useState(false);

  const [video, setVideo] = useState([]);

  const [youtubeId, setYoutubeId] = useState();

  const [youtubePlayer, setYoutubePlayer] = useState(null);

  // const [imageSrc, setImageSrc] = useState([]);

  // useEffect(() => {
  //   let image = document.querySelectorAll("img");
  //   console.log(image);
  //   // setImageSrc(image);
  //   image.forEach((imag) => {
  //     if (imag.src == "https://image.tmdb.org/t/p/w500null") {
  //       imag.src ==
  //         "https://image.tmdb.org/t/p/w500/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg";
  //     }
  //   });
  // }, []);

  // 4 - ============= SETTIMEOUT IS PREVENT AN ERROR =============

  const videoBref = video;
  setTimeout(() => {
    if (videoBref.length > 0) {
      //   console.log("Yes is biger than > 0");
      //   console.log(videoBref);
      //   console.log(videoBref[0].key);
      setYoutubeId(videoBref[0].key);
    } else {
      //   console.log("Yes is smaller than < 0");
      setYoutubeId("");
    }
  }, 500);

  // 4 - ============= SETTIMEOUT IS PREVENT AN ERROR =============

  // 3 - =========== POPUPBOX AND ICON OF CLOSE, WHEN CLICKED ICON CLOSE POPUPBOX AND CLOSE VIDEO  ===========

  // Function to handle the onReady event of the YouTube component
  const onReady = (event) => {
    // Save the YouTube player reference
    setYoutubePlayer(event.target);
  };

  // Function to close the pop-up box and stop the video
  const closePopUpBox = () => {
    setPopUpBox(false);

    // Stop the video using the YouTube player reference
    if (youtubePlayer) {
      youtubePlayer.stopVideo();
    }
  };

  // Function to close the pop-up box and stop the video when the close icon is clicked
  const closeIcon = () => {
    if (popUpBox === true) {
      closePopUpBox();
    }
  };

  // 3 - =========== POPUPBOX AND ICON OF CLOSE, WHEN CLICKED ICON CLOSE POPUPBOX AND CLOSE VIDEO  ===========

  // 2 - ============== FETSH DAT ==============

  const api_key = "dfdb8fba093651a08fc61b28b9c3c796";
  const base_url = "https://api.themoviedb.org/3";
  const get_tv = "/discover/tv";
  const base_img = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    clickedSlide;

    // ===========================================================================

    // 2.1 : FETSH DATA MOVIES

    async function fetchMovies(api) {
      const response = await fetch(api);
      const data = await response.json();
      setMovies(data.results);
    }

    const api_url = `${base_url}/${get_tv}?api_key=${api_key}`;

    // ===========================================================================

    // 2.2 : FETSH DATA ID FOR SPESIFIC MOVIE

    async function fetchbrefMovies(brf) {
      const response = await fetch(brf);
      const databref = await response.json();
      setVideo(databref.results);
    }

    const bref = `${base_url}/movie/${clickedSlide.id}/videos?api_key=${api_key}`;

    fetchMovies(api_url);
    fetchbrefMovies(bref);
  }, [clickedSlide.id, clickedSlide]);

  //  2 - ============== FETSH DAT ==============

  return (
    // 1 - ============== SWIPER ==============
    <div className="parent-container">
      <Swiper
        dir="ltr"
        className="swiper"
        modules={[Autoplay, A11y]}
        spaceBetween={7}
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

              <>
                <p className="name-tv">{movie.name}</p>
                <p className="category-tv">Tv</p>
              </>
            </SwiperSlide>
          ))}
      </Swiper>
      {/* 1 - ============== SWIPER ============== */}

      <div className={`popUpBox ${popUpBox == true ? "active" : undefined}`}>
        <div className="conentInf">
          <div className="close-icon" onClick={() => closeIcon()}>
            <i className="fa-solid fa-circle-xmark"></i>
          </div>

          <div className="image">
            <YouTube videoId={youtubeId} onReady={onReady} />
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
