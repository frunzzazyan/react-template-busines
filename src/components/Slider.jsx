import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../Slider.css"

export default function SiSlider(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider className="slider" {...settings}>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS50qsnIBcdIWS8DxCFEG67TlgV-qZMXDYYiw&s" alt="" />
         </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMNFqTvJAsh8IuUepfTOiMIdZTdF_tCF2ovQ&s" alt="" />
         </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS39fsKAJHqhgiQqVL9keP_Z_xLsm910Gc-cg&s" alt="" />
         </div>
        
      </Slider>
    );
  }