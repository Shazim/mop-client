// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { useFetch, usePost } from 'hooks';
import Skeleton from 'react-loading-skeleton';
// ====================== IMPORTED COMPONENTS ========================
import Arrow from 'components/atoms/slider/Arrow/Arrow';
import loader from '../assets/images/loader.gif';
// ====================== IMPORTED API ========================
import { galleryMock } from 'api';

const SlickSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };

  const params = useParams();

  const settings = {
    dots: false,
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    lazyLoad: true,
    nextArrow: <Arrow dir="right" type="next" />,
    prevArrow: <Arrow dir="left" type="prev" />,
    arrows: currentSlide == 0 ? false : true,
    afterChange: (indexOfCurrentSlide) => {
      setCurrentSlide(indexOfCurrentSlide);
    },
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 959,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true,
          dots: false,
          centerPadding: '0%',

          swipeToSlide: true,
        },
      },
    ],
  };

  const width = window.innerWidth;
  const height = window.innerHeight;

  const { data, error } = useFetch(galleryMock, {
    variables: `?key=${params.id}`,
  });
  console.log('data', data);
  const { exhibition_detail, artwork_images } = data || {};
  const [images, setImages] = useState([]);

  const getImagesArray = () => {
    if (data) {
      const { artwork_images } = data || [];
      let newArray = artwork_images.slice(2);
      let myResultArr = [];
      let isSecond = true;

      for (let i = 0; i < newArray.length; i--) {
        if (i % 5 === 0 && isSecond) {
          myResultArr.push([newArray[i], newArray[i + 1], newArray[i + 2]]);
          isSecond = false;
          i = i + 4;
        } else {
          myResultArr.push([newArray[i], newArray[i + 1]]);
          isSecond = true;
          i = i + 3;
        }
      }
      setImages(myResultArr);
    }
  };

  useEffect(() => {
    getImagesArray();
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      if (isLoading) setIsLoading(false);
    }, 5000);
  }, [isLoading]);

  const backgroundImage = `${exhibition_detail?.style?.toLowerCase()}.png`;

  return (
    <>
      {width <= 700 && width <= height ? (
        <div className="w-100% h-100vh font-bold uppercase  text-secondary font-avenir-reg text-heading flex items-center justify-center">
          Not Available in potrait mode
        </div>
      ) : (
        <>
          <div className="w-100% h-100vh slider-dots overflow-hidden">
            {isLoading ? (
              <div className="w-100% h-100vh flex items-center justify-center bg-black">
                {/* <Bars
                  color="#000000"
                  height={80}
                  width={80}
                  ariaLabel="loading"
                /> */}
                <img src={loader} />
              </div>
            ) : (
              <Slider ref={(c) => (slider.current = c)} {...settings}>
                <div className="relative">
                  <img
                    className="w-100% h-100vh  "
                    src={
                      `/images/gallery-mockup/scene1-${backgroundImage}` || (
                        <Skeleton />
                      )
                    }
                    // width={'100%'}
                    // height={'100vh'}
                    //alt={<Bars />}
                  />

                  <div className="w-100% h-100% absolute sm:left-30 left-50 top-0 flex flex-col items-center justify-center">
                    <div className="w-65%">
                      <div className="mb-16 text-heading text-white sm:tracking font-avenir-300 tracking-wider lg:text-xl xl:text-22 md:text-xl sm:text-xl tab:text-base uppercase">
                        {exhibition_detail?.room_name || <Skeleton />}
                        <span className="text-primary">.</span>
                      </div>
                      <div className="mb-6 text-20 text-gray-lighter font-nunito-bold sm:font-nunito-medium sm:tracking-tight   tracking uppercase">
                        {exhibition_detail?.artist_name || <Skeleton />}
                      </div>
                      <div className="text-20 text-gray-lighter font-nunito-bold sm:font-nunito-medium sm:tracking-tight tracking uppercase sm:text-xl ">
                        {exhibition_detail?.gallery_name || <Skeleton />}
                      </div>
                      <div className="flex mt-25%" onClick={next}>
                        <img src="/images/arrows/arrow-mockup.svg" alt="" />
                        <div className="ml-22 sm:ml-10 sm:mt-8 sm:text-sm sm:font-nunito-medium text-20 text-gray-lighter font-nunito-bold tracking uppercase">
                          Enter Gallery
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-73% absolute top-54% left-32% transform-y flex  justify-evenly">
                    <div className="h-200 relative mr-20 ml-30  ">
                      <img
                        src="/images/gallery-mockup/portrait-frame.png"
                        className="h-100% w-140 "
                        alt=""
                      />
                      <img
                        src={artwork_images[0]?.image || <Skeleton />}
                        alt=""
                        className="absolute object-cover top-17 h-165 left-17 w-107  "
                      />
                    </div>
                    <div className="h-200 relative mr-30  ">
                      <img
                        src="/images/gallery-mockup/portrait-frame.png"
                        className="h-100% w-140 "
                        alt=""
                      />
                      <img
                        src={artwork_images[1]?.image || <Skeleton />}
                        alt=""
                        className="absolute top-17 h-165 left-17 w-107 object-cover"
                      />
                    </div>
                  </div>
                </div>
                {images.map((val, index) => {
                  return (
                    <>
                      {index % 2 == 0 ? (
                        <div className="relative">
                          <img
                            className="w-100% h-100vh  "
                            src={
                              `/images/gallery-mockup/scene2-${backgroundImage}` || (
                                <Skeleton />
                              )
                            }
                            // width={'100%'}
                            // height={'100vh'}
                            // alt={<Bars />}
                          />
                          <div className="absolute top-50% transform-y flex w-100% justify-evenly">
                            <div className="h-222 relative  ">
                              <img
                                src="/images/gallery-mockup/portrait-frame.png"
                                className="h-100% w-165 "
                                alt=""
                              />
                              <img
                                src={val[0]?.image || <Skeleton />}
                                // alt={<Bars />}
                                className="absolute object-cover top-19 h-183 left-19 w-127 "
                              />
                            </div>
                            <div className="h-222 relative ">
                              <img
                                src="/images/gallery-mockup/landscape-frame.png"
                                className="h-100% w-298 "
                                alt=""
                              />
                              <img
                                src={val[1]?.image || <Skeleton />}
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
                                src={val[2]?.image || <Skeleton />}
                                alt=""
                                className="absolute top-19 h-183 left-19 w-127 object-cover "
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative">
                          <img
                            className="w-100% h-100vh "
                            src={
                              `/images/gallery-mockup/scene3-${backgroundImage}` || (
                                <Skeleton />
                              )
                            }
                            // width={'100%'}
                            // height={'100vh'}
                            //alt={`/images/gallery-mockup/scene3-${backgroundImage}`}
                          />

                          <div className="absolute top-51%  transform-y flex w-100% justify-evenly">
                            <div className="h-222 relative mr-20 ml-30  ">
                              <img
                                src="/images/gallery-mockup/portrait-frame.png"
                                className="h-100% w-165 "
                                alt=""
                              />
                              <img
                                src={val[0]?.image || <Skeleton />}
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
                                src={val[1]?.image || <Skeleton />}
                                alt=""
                                className="absolute top-19 h-183 left-19 w-127 object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
              </Slider>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default SlickSlider;
