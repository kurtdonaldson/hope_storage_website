import "../styles/home.css";
import footerBannerImg from "../images/FootBannerPhoto.avif";

const FooterBanner = () => {
  return (
    <div className="footerBanner">
      <img
        className="footerBannerImg"
        src={footerBannerImg}
        alt="Ample parking space for boats, caravans, and buses at Hope Storage, offering secure and tailored storage solutions for large vehicles and recreational assets."
      />
    </div>
  );
};

export default FooterBanner;
