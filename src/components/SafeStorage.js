import caravan from "../images/safeStorageImg.png";

function SafeStorage() {
  return (
    <div className="safeStorage">
      <div className="safeStorage_heading_div">
        <h2>Safe and secure storage</h2>
      </div>
      <div className="contactBtnDiv">
        <input type="button" value="Contact Us" />
      </div>
      <div className="caravanImgDiv">
        <img
          className="caravanImg"
          src={caravan}
          alt="Tailored storage solutions for boats, caravans, and buses at Hope Storage, with a spacious parking area ensuring secure and convenient long-term storage for your recreational vehicles."
        />
      </div>
    </div>
  );
}

export default SafeStorage;
