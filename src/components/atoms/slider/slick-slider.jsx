import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from '../arrow/Arrow';

const SlickSlider = () => {
  const images = [
    { image: '/images/slider/image.png' },
    { image: '/images/slider/image.png' },
    { image: '/images/slider/image.png' },
    { image: '/images/slider/image.png' },
    { image: '/images/slider/image.png' },
    { image: '/images/slider/image.png' },
    { image: '/images/slider/image.png' },
    { image: '/images/slider/image.png' },
    { image: '/images/slider/image.png' },
    { image: '/images/slider/image.png' },
    { image: '/images/slider/image.png' },
    { image: '/images/slider/image.png' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    centerMode: true,
    centerpadding: '70px',
    autoplay: true,
    autoplayspeed: 7000,
    rows: 3,
    pauseOnFocus: true,
    touchMove: true,
    swipe: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    nextArrow: <Arrow dir="right" type="next" />,
    prevArrow: <Arrow dir="left" type="prev" />,
    // arrows: true,

    responsive: [
      {
        breakpoint: 959,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true,
          dots: true,
          centerPadding: '0%',
          transformEnabled: true,
          vertical: true,
          verticalSwaping: true,
          swipeToSlide: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-80%  mx-auto  slider-dots">
        <Slider {...settings}>
          {images.map((url) => (
            <img
              className='className="w-80% h-250 mt-90 sm:w-100% m-auto sm:h-100%'
              src={url.image}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SlickSlider;
