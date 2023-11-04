import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../styles/home.css";
import { BiSolidCar } from "react-icons/bi";
import { HiCurrencyDollar } from "react-icons/hi";
import { GoContainer } from "react-icons/go";
import { LiaFileContractSolid } from "react-icons/lia";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { LiaLessThanSolid } from "react-icons/lia";
import { BsKey } from "react-icons/bs";
// import NextSlideBtn from "./NextSlideBtn";
// import PrevSlideBtn from "./PreviousSlideBtn";

function WhatWeOffer() {
  //useState to keep track of carousel position
  const [slidePosition, setSlidePosition] = useState(1);

  const nextSlide = () => {
    if (slidePosition < 6) {
      setSlidePosition(slidePosition + 1);
    }
  };

  const prevSlide = () => {
    if (slidePosition > 1) {
      setSlidePosition(slidePosition - 1);
    }
  };

  return (
    <div className="whatWerOfferDiv d-flex flex-column ">
      <div>
        <h2>What we offer</h2>
      </div>
      <div className="carouselDiv">
        <div className="carousel_arrows left_arrow">
          <button
            className="btn-slide"
            style={{ display: slidePosition == 1 ? "none" : "block" }}
          >
            <LiaLessThanSolid className="arrow_img" onClick={prevSlide} />
          </button>
        </div>

        <div className="carousel_arrows right_arrow">
          <button
            className="btn-slide"
            style={{ display: slidePosition == 3 ? "none" : "block" }}
          >
            <LiaGreaterThanSolid className="arrow_img" onClick={nextSlide} />
          </button>
        </div>
        <div
          className={
            slidePosition == 1
              ? "carousel_position_1"
              : slidePosition == 2
              ? "carousel_position_2"
              : "carousel_position_3"
          }
        >
          <div className="parking_carousel carousel_containers">
            <div className="carousel_inner_containers">
              <BiSolidCar className="car_icon icons" />
              <h3>28 Parking Spaces</h3>
              <p className="legend text-center">Carparks are 10m x 3m</p>
            </div>
          </div>
          <div className="carousel_containers">
            <div className="carousel_inner_containers">
              <HiCurrencyDollar className="icons" />
              <h3>Competitive Rates</h3>
              <p className="legend text-center">
                Parking spaces are $120/mo <br />
                Containers are $169/mo <br />
                No hidden costs
              </p>
            </div>
          </div>
          <div className="carousel_containers">
            <div className="carousel_inner_containers">
              <GoContainer className="icons" />
              <h3>14 Containers</h3>
              <p className="legend text-center">
                Containers are 10 x 2.5 x 2.5m
              </p>
            </div>
          </div>
          <div className="carousel_containers">
            <div className="carousel_inner_containers">
              <LiaFileContractSolid className="icons" />
              <h3>No Fixed Term</h3>
              <p className="legend text-center">
                Stay for as long <br />
                or short as you'd like. <br />
                No break fees
              </p>
            </div>
          </div>
          <div className="carousel_containers">
            <div className="carousel_inner_containers">
              <BsKey className="icons" />
              <h3>24/7 Access</h3>
              <p className="legend text-center">
                Your unique keycard <br />
                allows 24/7 access <br />
                to your property
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export const centerMode = () => (
//   <Carousel
//     infiniteLoop
//     centerMode
//     centerSlidePercentage={number("centerSlidePercentage", 80, {}, mainGroupId)}
//     {...getConfigurableProps()}
//   >
//     {baseChildren.props.children}
//   </Carousel>
// );

export default WhatWeOffer;
