import "../styles/home.css";
import entrySignImg from "../images/sign_photo.avif";
import lockImg from "../images/lock_photo.avif";
import caravanImg from "../images/caravan_photo.avif";

function HowItWorks() {
  return (
    <div id="howItWorks" className="howItWorksDiv">
      <h2>How it works</h2>
      <div className="howItWorksImgContainer">
        <div className="howItWorksImg1 howItWorksImgDiv">
          <div className="howItWorksImageInnerDiv">
            <img
              className="howItWorksImages"
              src={entrySignImg}
              alt="Entrance to Hope Storage – Your Trusted Space Solution for Secure and Convenient Storage Services"
            />
          </div>
          <div className="pe-2 d-flex flex-column justify-content-center">
            <h3>Contact us</h3>
            <p>Enquire online or give us a call.</p>
          </div>
        </div>
        <div className="howItWorksImg2 howItWorksImgDiv">
          <div className="howItWorksImageInnerDiv">
            <img
              className="howItWorksImages"
              src={caravanImg}
              alt="Long-term parking area at Hope Storage, providing secure and accessible storage solutions for extended periods."
            />
          </div>
          <div className="pe-2 d-flex flex-column justify-content-center">
            <h3>Arrange a time</h3>
            <p>Look around - decide if we are right for you!</p>
          </div>
        </div>
        <div className="howItWorksImg3 howItWorksImgDiv">
          <div className="howItWorksImageInnerDiv">
            <img
              className="howItWorksImages"
              src={lockImg}
              alt="Secure entrance with locked gate at Hope Storage, ensuring the utmost protection for your stored belongings."
            />
          </div>
          <div className="pe-2 d-flex flex-column justify-content-center">
            <h3>Move in</h3>
            <p>You’ll have 24/7 access.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
