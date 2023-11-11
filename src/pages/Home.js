import Header from "../components/Header";
import Navigation from "../components/Navigation";
import WhatWeOffer from "../components/WhatWeOffer";
import SafeStorage from "../components/SafeStorage";
import HowItWorks from "../components/HowItWorks";
import logo from "../images/hope_storage_logo.png";
import RedBanner from "../components/RedBanner";
import FooterBanner from "../components/FooterBanner";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home_div">
      <Header />
      <Navigation />
      <SafeStorage />
      <div className="image_div">
        <img className="logo" src={logo} alt="" />
      </div>
      <WhatWeOffer />
      <HowItWorks />
      <RedBanner />
      <FooterBanner />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default Home;
