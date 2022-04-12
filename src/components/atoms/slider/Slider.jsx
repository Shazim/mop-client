import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from '../arrow/Arrow';

function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow dir="right" type="next" />,
    prevArrow: <Arrow dir="left" type="prev" />,
    centerMode: true,
    centerPadding: '0%',
    responsive: [
      {
        breakpoint: 959,
        settings: {
          arrows: false,
          slidesToShow: 1.15,
          centerMode: true,
          dots: false,
          centerPadding: '0%',
          transformEnabled: true,
        },
      },
    ],
  };
  return (
    <div className="w-100% mx-auto slider-dots">
      <Slider {...settings}>
        <img
          className="w-80% sm:w-100% m-auto"
          src="/images/slider/image.png"
        />
        <img
          className="w-80% sm:w-100% m-auto"
          src="/images/slider/image.png"
        />
        <img
          className="w-80% sm:w-100% m-auto"
          src="/images/slider/image.png"
        />
        <img
          className="w-80% sm:w-100% m-auto"
          src="/images/slider/image.png"
        />
        <img
          className="w-80% sm:w-100% m-auto"
          src="/images/slider/image.png"
        />
        <img
          className="w-80% sm:w-100% m-auto"
          src="/images/slider/image.png"
        />
        <img
          className="w-80% sm:w-100% m-auto sm:m-0"
          src="/images/slider/image.png"
        />
      </Slider>
    </div>
  );
}

export default Sliders;
