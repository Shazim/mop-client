import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from '../arrow/Arrow';

function Sliders({
  images = [
    { image: '/images/slider/image.png' },
    { image: '/images/slider/image.png' },
    { image: '/images/slider/image.png' },
    { image: '/images/slider/image.png' },
    { image: '/images/slider/image.png' },
    { image: '/images/slider/image.png' },
  ],
  column,
  dots = false,
}) {
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
          slidesToShow: column,
          centerMode: true,
          dots: dots,
          centerPadding: '0%',
          transformEnabled: true,
        },
      },
    ],
  };
  return (
    <div className="w-100% mx-auto slider-dots">
      <Slider {...settings}>
        {images.map((url) => (
          <img
            className="w-80% max-h-500 min-h-300 sm:w-100% m-auto sm:h-100%"
            src={url.image}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Sliders;
