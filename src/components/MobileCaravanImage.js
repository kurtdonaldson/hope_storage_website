import React from "react";
import caravan from "../images/safeStorageImg.png";

function MobileCaravanImage() {
  return (
    <div className="mobile_caravan_img_div">
      <img
        className="mobile_caravan_img"
        src={caravan}
        alt="Tailored storage solutions for boats, caravans, and buses at Hope Storage, with a spacious parking area ensuring secure and convenient long-term storage for your recreational vehicles."
      />
    </div>
  );
}

export default MobileCaravanImage;
