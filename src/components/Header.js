import "../styles/home.css";
import { FaPhoneAlt } from "react-icons/fa";

function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center container-fluid">
      <div className="h1_div d-flex align-items-center">
        <h1 id="h1">Hope Storage</h1>
      </div>
      <div className="phone_number_div d-flex align-items-center justify-content-between">
        <FaPhoneAlt className="phone_icon" />
        <p className="header_phone_number m-0">027 454 3813</p>
      </div>
    </header>
  );
}

export default Header;
