import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../styles/home.css";
import { BiSolidCar } from "react-icons/bi";
import { HiCurrencyDollar } from "react-icons/hi";
import { GoContainer } from "react-icons/go";
import { LiaFileContractSolid } from "react-icons/lia";
import { BsKey } from "react-icons/bs";
import { LiaLessThanSolid } from "react-icons/lia";
import { LiaGreaterThanSolid } from "react-icons/lia";

function WhatWeOffer() {
  return (
    <div className="whatWerOfferDiv d-flex flex-column ">
      <div>
        <h2>What we offer</h2>
      </div>
      <div className="carouselDiv">
        <div className="carousel_outer_container">
          <div className="carousel_arrows left_arrow">
            <LiaLessThanSolid />
          </div>
          <div className="carousel_arrows right_arrow">
            <LiaGreaterThanSolid />
          </div>
          <div className="parking_carousel carousel_containers">
            <div className="carousel_inner_containers">
              <BiSolidCar className="car_icon" />
              <h3>28 Parking Spaces</h3>
              <p className="legend text-center">Carparks are 10m x 3m</p>
            </div>
          </div>
          <div className="carousel_containers">
            <div className="carousel_inner_containers">
              <HiCurrencyDollar />
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
              <GoContainer />
              <h3>14 Containers</h3>
              <p className="legend text-center">
                Containers are 10 x 2.5 x 2.5m
              </p>
            </div>
          </div>
          <div className="carousel_containers">
            <div className="carousel_inner_containers">
              <LiaFileContractSolid />
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
              <BsKey />
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
