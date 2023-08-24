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

function WhatWeOffer() {
  return (
    <div className="whatWerOfferDiv d-flex flex-column ">
      <div>
        <h2>What we offer</h2>
      </div>
      <div className="carouselDiv">
        <Carousel>
          <div className="parking_carousel">
            <BiSolidCar className="car_icon" />
            <h3>28 Parking Spaces</h3>
            <p className="legend">Carparks are 10m x 3m</p>
          </div>
          <div>
            <HiCurrencyDollar />
            <h3>Competitive Rates</h3>
            <p className="legend">
              Parking spaces are $120/mo <br />
              Containers are $169/mo <br />
              No hidden costs
            </p>
          </div>
          <div>
            <GoContainer />
            <h3>14 Containers</h3>
            <p className="legend">Containers are 10 x 2.5 x 2.5m</p>
          </div>
          <div>
            <LiaFileContractSolid />
            <h3>No Fixed Term</h3>
            <p className="legend">
              Stay for as long <br />
              or short as you'd like. <br />
              No break fees
            </p>
          </div>
          <div>
            <BsKey />
            <h3>24/7 Access</h3>
            <p className="legend">
              Your unique keycard <br />
              allows 24/7 access <br />
              to your property
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default WhatWeOffer;

// import React, { CSSProperties } from "react";
// import { action } from "@storybook/addon-actions";
// import { Carousel } from "../src/index";

// import { withKnobs, boolean, number, text } from "@storybook/addon-knobs";

// // carousel styles
// import "../src/main.scss";
// import "../src/carousel.scss";
// import "../src/examples/presentation/presentation.scss";

// const createCarouselItemImage = (index, options = {}) => (
//   <div key={index}>
//     <img src={`/assets/${index}.jpeg`} />
//     <p className="legend">Legend {index}</p>
//   </div>
// );

// const baseChildren = <div>{[1, 2, 3, 4, 5].map(createCarouselItemImage)}</div>;

// const tooglesGroupId = "Toggles";
// const valuesGroupId = "Values";
// const mainGroupId = "Main";

// const getConfigurableProps = () => ({
//   showArrows: boolean("showArrows", true, tooglesGroupId),
//   showStatus: boolean("showStatus", true, tooglesGroupId),
//   showIndicators: boolean("showIndicators", true, tooglesGroupId),
//   infiniteLoop: boolean("infiniteLoop", true, tooglesGroupId),
//   showThumbs: boolean("showThumbs", true, tooglesGroupId),
//   useKeyboardArrows: boolean("useKeyboardArrows", true, tooglesGroupId),
//   autoPlay: boolean("autoPlay", true, tooglesGroupId),
//   stopOnHover: boolean("stopOnHover", true, tooglesGroupId),
//   swipeable: boolean("swipeable", true, tooglesGroupId),
//   dynamicHeight: boolean("dynamicHeight", true, tooglesGroupId),
//   emulateTouch: boolean("emulateTouch", true, tooglesGroupId),
//   autoFocus: boolean("autoFocus", false, tooglesGroupId),
//   thumbWidth: number("thumbWidth", 100, {}, valuesGroupId),
//   selectedItem: number("selectedItem", 0, {}, valuesGroupId),
//   interval: number("interval", 2000, {}, valuesGroupId),
//   transitionTime: number("transitionTime", 500, {}, valuesGroupId),
//   swipeScrollTolerance: number("swipeScrollTolerance", 5, {}, valuesGroupId),
//   ariaLabel: text("ariaLabel", undefined),
// });

// export default {
//   title: "01 - Basic",
//   decorators: [withKnobs],
//   component: Carousel,
// };

// export const base = () => (
//   <Carousel {...getConfigurableProps()}>{baseChildren.props.children}</Carousel>
// );

// // export const centerMode = () => (
// //   <Carousel
// //     infiniteLoop
// //     centerMode
// //     centerSlidePercentage={number("centerSlidePercentage", 34, {}, mainGroupId)}
// //     {...getConfigurableProps()}
// //   >
// //     {baseChildren.props.children}
// //   </Carousel>
// // );
