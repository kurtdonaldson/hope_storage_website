import "../styles/home.css";
import hopeStorageMap from "../images/Hope-Storage-Map.avif";

import SendMessageForm from "./SendMessageForm";

const ContactInfo = () => {
  return (
    <div id="contactInfo" className="contactInfo">
      <div>
        <SendMessageForm />
      </div>
      <div className="mapDiv">
        <img
          className="mapImg"
          src={hopeStorageMap}
          alt="Google Maps screenshot displaying the strategic location of our container storage facility, offering convenient access and security for business needs."
        />
      </div>
      <div className="findUsDiv">
        <h2>How to find us</h2>
        <p>
          <a href="tel:027 454 3813">027 454 3813</a>
        </p>
        <p>
          <a href="mailto:info@hopestorage.co.nz">info@hopestorage.co.nz</a>
        </p>
        <p>
          52 Ranzau Road, Hope <br />
          Richmond, Tasman <br />
          New Zealand <br />
          7020
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
