import "../styles/home.css";
import hopeStorageMap from "../images/Hope-Storage-Map.jpg";
import { FaFacebook } from "react-icons/fa";

import SendMessageForm from "./SendMessageForm";

const ContactInfo = () => {
  return (
    <div id="contactInfo" className="contactInfo">
      <div>
        <SendMessageForm />
      </div>
      <div className="mapDiv">
        <a href="https://www.google.com/maps/place/Hope+Storage+Limited/@-41.3466485,173.145153,15z/data=!4m6!3m5!1s0x6d3b96928ff9a4c9:0xbf44f12e9009818!8m2!3d-41.3466485!4d173.145153!16s%2Fg%2F11h4dhytqj?entry=ttu">
          <img
            className="mapImg"
            src={hopeStorageMap}
            alt="Google Maps screenshot displaying the strategic location of our container storage facility, offering convenient access and security for business needs."
          />
        </a>
      </div>
      <div className="findUsDiv">
        <h2>How to find us</h2>
        <p>
          <a href="tel:027 454 3813">027 454 3813</a>
        </p>
        <p>
          <a href="mailto:admin@hopestorage.co.nz">admin@hopestorage.co.nz</a>
        </p>
        <p>
          52 Ranzau Road, Hope <br />
          Richmond, Tasman <br />
          New Zealand <br />
          7020
        </p>
        <a
          href="https://www.facebook.com/HopeStorage/"
          target="_blank"
          style={{ fontSize: "1.7em" }}
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
