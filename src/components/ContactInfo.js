import "../styles/home.css";

import SendMessageForm from "./SendMessageForm";

const ContactInfo = () => {
  return (
    <div className="contactInfo">
      <div>
        <SendMessageForm />
      </div>
      <div className="mapDiv">Map</div>
      <div className="findUsDiv">
        <h2>How to find us</h2>
        <p>027 454 3813</p>
        <p>info@hopestorage.co.nz</p>
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
