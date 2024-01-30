import NavBar from "../1C-NavBar/NavBar";
import Hero from "../2C-Hero/Hero";
import New from "../3C-New/3~1C-Movies/New";
import AboutUs from "../4C-AboutUs/AboutUs";
import Tabs from "../5C-Tabs/Tabs";
import Faq from "../6C-Faq/Faq";
import ContactUs from "../7C-ContactUs/Contact-us";
import Footer from "../8C-Footer/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <New />
      <AboutUs />
      <Tabs />
      <Faq />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePage;
