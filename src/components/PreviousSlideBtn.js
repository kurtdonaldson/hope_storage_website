import React from "react";
import { LiaLessThanSolid } from "react-icons/lia";
import "../styles/home.css";

export default function PrevSlideBtn(moveSlide) {
  console.log(moveSlide);
  return (
    <button className="btn-slide">
      <LiaLessThanSolid className="arrow_img" />
    </button>
  );
}
