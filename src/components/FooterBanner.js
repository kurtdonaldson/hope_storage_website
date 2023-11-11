import "../styles/home.css";
import footerBannerImg from "../images/FootBannerPhoto.jpg";

const FooterBanner = () => {
  return (
    <div className="footerBanner">
      <img className="footerBannerImg" src={footerBannerImg} alt="" />
    </div>
  );
};

export default FooterBanner;
