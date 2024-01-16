import React, { useState, useEffect } from "react"; // requires a loader
import "../styles/home.css";
import { BiSolidCar } from "react-icons/bi";
import { HiCurrencyDollar } from "react-icons/hi";
import { GoContainer } from "react-icons/go";
import { LiaFileContractSolid } from "react-icons/lia";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { LiaLessThanSolid } from "react-icons/lia";
import { BsKey } from "react-icons/bs";
import { useCallback } from "react";

const delay = 4000;

function WhatWeOffer() {
  //useState to keep track of carousel position
  const [slidePosition, setSlidePosition] = useState(1);

  //If window width is greater than 800px, the single carousel will NOT be used.
  const [fiveLevelCarousel, setFiveLevelCarousel] = useState(
    window.innerWidth > 800 ? false : true
  );

  //Function to change windowWidth state to current window width
  const setWindowDimensions = () => {
    window.innerWidth > 800
      ? setFiveLevelCarousel(false)
      : setFiveLevelCarousel(true);
  };

  // const nextSlide = () => {
  //   if (fiveLevelCarousel) {
  //     if (slidePosition < 6) {
  //       setSlidePosition(slidePosition + 1);
  //     }
  //   } else {
  //     if (slidePosition < 3) {
  //       setSlidePosition(slidePosition + 1);
  //     }
  //   }
  // };
  // const nextSlide = () => {
  //   if (fiveLevelCarousel) {
  //     if (slidePosition < 6) {
  //       setSlidePosition(slidePosition + 1);
  //     }
  //   } else {
  //     if (slidePosition < 3) {
  //       setSlidePosition(slidePosition + 1);
  //     }
  //   }
  // };

  const nextSlide = useCallback(() => {
    if (fiveLevelCarousel) {
      if (slidePosition < 6) {
        setSlidePosition(slidePosition + 1);
      }
    } else {
      if (slidePosition < 3) {
        setSlidePosition(slidePosition + 1);
      }
    }
  }, [fiveLevelCarousel, slidePosition]);

  const prevSlide = () => {
    if (slidePosition > 1) {
      setSlidePosition(slidePosition - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

  useEffect(() => {
    setTimeout(
      () =>
        fiveLevelCarousel
          ? slidePosition === 5
            ? setSlidePosition(1)
            : nextSlide()
          : slidePosition === 3
          ? setSlidePosition(1)
          : nextSlide(),

      delay
    );

    // return () => {};
  }, [slidePosition, fiveLevelCarousel, nextSlide]);

  return (
    <div id="whatWeOfferDiv" className="whatWeOfferDiv d-flex flex-column ">
      <div>
        <h2>What we offer</h2>
      </div>
      <div className="carouselDiv">
        <div className="carousel_arrows left_arrow">
          <button
            className="btn-slide"
            style={{ display: slidePosition === 1 ? "none" : "block" }}
          >
            <LiaLessThanSolid className="arrow_img" onClick={prevSlide} />
          </button>
        </div>

        <div className="carousel_arrows right_arrow">
          <button
            className="btn-slide"
            style={{
              display: fiveLevelCarousel
                ? slidePosition === 5
                  ? "none"
                  : "block"
                : slidePosition === 3
                ? "none"
                : "block",
            }}
          >
            <LiaGreaterThanSolid className="arrow_img" onClick={nextSlide} />
          </button>
        </div>
        <div
          className={
            slidePosition === 1
              ? "carousel_position_1"
              : slidePosition === 2
              ? "carousel_position_2"
              : slidePosition === 3
              ? "carousel_position_3"
              : slidePosition === 4
              ? "carousel_position_4"
              : "carousel_position_5"
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

export default WhatWeOffer;
