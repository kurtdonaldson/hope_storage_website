import "../styles/home.css";
import entrySignImg from "../images/sign_photo.jpg";
import lockImg from "../images/lock_photo.jpg";
import caravanImg from "../images/caravan_photo.jpg";

function HowItWorks() {
  return (
    <div id="howItWorks" className="howItWorksDiv">
      <h2>How it works</h2>
      <div className="howItWorksImgContainer">
        <div className="howItWorksImg1 howItWorksImgDiv">
          <div className="howItWorksImageInnerDiv">
            <img className="howItWorksImages" src={entrySignImg} alt="" />
          </div>
          <div>
            <h3>Contact us</h3>
            <p>Enquire online or give us a call.</p>
          </div>
        </div>
        <div className="howItWorksImg2 howItWorksImgDiv">
          <div className="howItWorksImageInnerDiv">
            <img className="howItWorksImages" src={caravanImg} alt="" />
          </div>
          <div>
            <h3>Arrange a time</h3>
            <p>Look around - decide if we are right for you!</p>
          </div>
        </div>
        <div className="howItWorksImg3 howItWorksImgDiv">
          <div className="howItWorksImageInnerDiv">
            <img className="howItWorksImages" src={lockImg} alt="" />
          </div>
          <div>
            <h3>Move in</h3>
            <p>You’ll have 24/7 access.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
