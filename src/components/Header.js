import "../styles/home.css";
import { FaPhoneAlt } from "react-icons/fa";

function Header() {
  return (
    <header className="header_div d-flex justify-content-between align-items-center container-fluid">
      <div className="h1_div d-flex align-items-center">
        <h1 id="h1">Hope Storage</h1>
      </div>
      <div className="mobileHeading">
        <h2 id="mobileHeadingH2">Hope Storage</h2>
      </div>
      <div className="phone_number_div d-flex align-items-center justify-content-between">
        <a className="header_phone_number m-0" href="tel:027 454 3813">
          <FaPhoneAlt className="phone_icon" />
        </a>
      </div>
    </header>
  );
}

export default Header;
