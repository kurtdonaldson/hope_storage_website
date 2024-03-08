import caravan from "../images/safeStorageImg.jpg";

function SafeStorage() {
  // const element = document.getElementById("contactInfo");

  const handleClick = () => {
    console.log("working");
    document.getElementById("contactInfo").scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <div className="safeStorage">
      <div className="safeStorage_heading_div">
        <h2>Safe and secure storage</h2>
      </div>
      <div className="contactBtnDiv">
        <button onClick={handleClick}>Contact Us</button>
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
