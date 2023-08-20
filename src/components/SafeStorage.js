import caravan from "../images/safeStorageImg.png";

function SafeStorage() {
  return (
    <div className="safeStorage">
      <div className="safeStorage_heading_div">
        <h2>Safe and secure storage</h2>
      </div>
      <div className="contactBtnDiv">
        <button>Contact Us</button>
      </div>
      <div className="caravanImgDiv">
        <img className="caravanImg" src={caravan} alt="" />
      </div>
    </div>
  );
}

export default SafeStorage;
