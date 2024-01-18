// import "./MoviesSlide.css";

// import { useState } from "react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css/scrollbar";

// // import Swiper core and required modules
// // import { Autoplay, A11y } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// const MoviesSlide = () => {
//   // const [isHovered, setIsHovered] = useState(false);

//   const [movies, setMovies] = useState([]);

//   const [activeSlide, setActiveSlide] = useState(null);

//   // === FETCH DATA ===
//   const api_key = "dfdb8fba093651a08fc61b28b9c3c796";
//   // const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmRiOGZiYTA5MzY1MWEwOGZjNjFiMjhiOWMzYzc5NiIsInN1YiI6IjY1YTNhODMzZDM1ZGVhMDEzMTQzMDczNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vM6qeeLj6z6mF4j6nPFTcuqwxcH99UZ99SvIBXfnYVM";

//   const base_url = "https://api.themoviedb.org/3";
//   const get_movies = "/discover/movie";
//   const base_img = "https://image.tmdb.org/t/p/w500";

//   async function fetchMovies(api) {
//     const response = await fetch(api);
//     const data = await response.json();
//     setMovies(data.results);
//   }
//   const api_url = `${base_url}/${get_movies}?api_key=${api_key}`;

//   fetchMovies(api_url);

//   // === FETCH DATA ===

//   return (
//     <div className="container ddd">
//       <Swiper
//         dir="rtl"
//         className="swiper"
//         // modules={[Autoplay, A11y]}
//         spaceBetween={25}
//         slidesPerView={20}
//         // autoplay={{
//         //   delay: 0,
//         //   disableOnInteraction: false,
//         //   pauseOnMouseEnter: true,
//         //   ...(isHovered && { pause: true }),
//         // }}
//         // onMouseEnter={() => setIsHovered(true)}
//         // onMouseLeave={() => setIsHovered(false)}
//         // loop={true}
//         speed={1000}
//         breakpoints={{
//           0: {
//             slidesPerView: 1,
//           },
//           550: {
//             slidesPerView: 2,
//           },
//           760: {
//             slidesPerView: 3,
//           },
//           1000: {
//             slidesPerView: 4,
//           },
//           1300: {
//             slidesPerView: 5,
//           },
//         }}
//       >
//         {movies &&
//           movies.length > 0 &&
//           movies.map((movie) => (
//             <SwiperSlide
//               className={`swiperSlide `}
//               key={movie.id}
//               onClick={() => setActiveSlide(movie.id)}
//             >
//               <img
//                 src={`${base_img}${movie.poster_path}`}
//                 alt={movie.original_language}
//                 className="image"
//               />
//               <div className="play">
//                 <i className="fa-regular fa-circle-play"></i>
//                 <p>Play Trailer</p>
//               </div>

//               <div
//                 className={`poup ${
//                   activeSlide === movie.id ? "active" : undefined
//                 }`}
//               >
//                 hello
//               </div>
//             </SwiperSlide>
//           ))}
//       </Swiper>
//     </div>
//   );
// };

// export default MoviesSlide;

// // movies &&
// //           movies.length > 0 &&
// //           movies.map((mv)

// ====================================================================================================

import "./MoviesSlide.css";

import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/scrollbar";

// import Swiper core and required modules
// import { Autoplay, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const MoviesSlide = () => {
  // const [isHovered, setIsHovered] = useState(false);

  const [movies, setMovies] = useState([]);

  const [activeSlide, setActiveSlide] = useState(null);

  // === FETCH DATA ===
  const api_key = "dfdb8fba093651a08fc61b28b9c3c796";
  // const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmRiOGZiYTA5MzY1MWEwOGZjNjFiMjhiOWMzYzc5NiIsInN1YiI6IjY1YTNhODMzZDM1ZGVhMDEzMTQzMDczNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vM6qeeLj6z6mF4j6nPFTcuqwxcH99UZ99SvIBXfnYVM";

  const base_url = "https://api.themoviedb.org/3";
  const get_movies = "/discover/movie";
  const base_img = "https://image.tmdb.org/t/p/w500";

  async function fetchMovies(api) {
    const response = await fetch(api);
    const data = await response.json();
    setMovies(data.results);
  }
  const api_url = `${base_url}/${get_movies}?api_key=${api_key}`;

  fetchMovies(api_url);

  // === FETCH DATA ===

  return (
    <div className="parent-container">
      <Swiper
        dir="rtl"
        className="swiper"
        // modules={[Autoplay, A11y]}
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
        speed={1000}
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
              onClick={() => setActiveSlide(movie.id)}
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

              <div
                className={`poup ${
                  activeSlide === movie.id ? "active" : undefined
                }`}
              >
                hello
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className={`container ddd `}>{/* Your content here */}</div>
    </div>
  );
};

export default MoviesSlide;
