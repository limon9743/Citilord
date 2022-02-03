import React from "react";
import { ImgCaroselData } from "./ImgCaroselDummyData";

import Slider from "react-slick";
import "./ImgCarosel.css";

const ImgCarosel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {ImgCaroselData.map((slide, index) => {
          return (
            <img src={slide.image} className="img-carosel-each" alt=""></img>
          );
        })}
      </Slider>
    </div>
  );
};

export default ImgCarosel;
