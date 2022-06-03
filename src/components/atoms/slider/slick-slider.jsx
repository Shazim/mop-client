import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from './Arrow/Arrow';

const SlickSlider = () => {
  const images = [
    { image: '/images/gallery-mockup/scene1-dark.png' },
    { image: '/images/gallery-mockup/scene2-dark.png' },
  ];

  const settings = {
    dots: false,
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow dir="right" type="next" />,
    prevArrow: <Arrow dir="left" type="prev" />,
    // arrows: false,

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
  const width = window.innerWidth;
  const height = window.innerHeight;
  return (
    <>
      {' '}
      {width < 700 ? (
        <></>
      ) : width > height ? (
        <div className="w-100% h-100vh slider-dots">
          <Slider {...settings}>
            <div className="relative">
              <img
                className='className="w-100% h-100vh  sm:w-100% sm:h-100%'
                src="/images/gallery-mockup/scene1-dark.png"
              />
              <div className="absolute left-20% top-40%">
                <div className="mb-16 text-heading text-white font-avenir-300 tracking-wider lg:text-22 xl:text-2xl md:text-22 sm:text-20 tab:text-base uppercase">
                  exhibition Title<span className="text-primary">.</span>
                </div>
                <div className="mb-6 text-20 text-gray-lighter font-nunito-bold tracking uppercase">
                  Artist Name
                </div>
                <div className="text-20 text-gray-lighter font-nunito-bold tracking uppercase">
                  Gallery Name
                </div>
                <div className="flex mt-299">
                  <img src="/images/arrows/arrow-mockup.svg" alt="" />
                  <div className="ml-22 text-20 text-gray-lighter font-nunito-bold tracking uppercase">
                    Enter Gallery
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                className='className="w-100% h-100vh  sm:w-100% sm:h-100%'
                src="/images/gallery-mockup/scene2-dark.png"
              />
              <div className="absolute top-50% transform-y flex w-100% justify-evenly">
                <div className="h-222 relative  sm:h-100 ">
                  <img
                    src="/images/gallery-mockup/portrait-frame.png"
                    className="h-100% w-165 sm:w-93"
                    alt=""
                  />
                  <img
                    src="/images/gallery-mockup/dummy.png"
                    alt=""
                    className="absolute object-cover top-19 h-183 left-19 w-127 sm:w-73 sm:left-10 sm:top-8 sm:h-84 "
                  />
                </div>
                <div className="h-222 relative ">
                  <img
                    src="/images/gallery-mockup/landscape-frame.png"
                    className="h-100% w-298 "
                    alt=""
                  />
                  <img
                    src="/images/gallery-mockup/dummy3.jpg"
                    alt=""
                    className="absolute top-27 h-169 left-27 w-245 object-cover"
                  />
                </div>
                <div className="h-222 relative ">
                  <img
                    src="/images/gallery-mockup/portrait-frame.png"
                    className="h-100% w-165 "
                    alt=""
                  />
                  <img
                    src="/images/gallery-mockup/dummy2.jpg"
                    alt=""
                    className="absolute top-19 h-183 left-19 w-127 object-cover "
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                className='className="w-100% h-100vh '
                src="/images/gallery-mockup/scene3_dark.png"
                alt=""
              />
              <div className="absolute top-51%  transform-y flex w-100% justify-evenly">
                <div className="h-222 relative mr-20 ml-30  ">
                  <img
                    src="/images/gallery-mockup/portrait-frame.png"
                    className="h-100% w-165 "
                    alt=""
                  />
                  <img
                    src="/images/gallery-mockup/dummy.png"
                    alt=""
                    className="absolute object-cover top-19 h-183 left-19 w-127  "
                  />
                </div>
                <div className="h-222 relative mr-30  ">
                  <img
                    src="/images/gallery-mockup/portrait-frame.png"
                    className="h-100% w-165 "
                    alt=""
                  />
                  <img
                    src="/images/gallery-mockup/dummy2.jpg"
                    alt=""
                    className="absolute top-19 h-183 left-19 w-127 object-cover"
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      ) : (
        <div className="absolute font-bold uppercase  text-secondary font-avenir-reg text-22 left-35% top-30% ">
          there is no slider
        </div>
      )}
    </>
  );
};

export default SlickSlider;
