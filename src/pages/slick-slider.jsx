import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from 'components/atoms/slider/Arrow/Arrow';
import { useFetch, usePost } from 'hooks';
import { galleryMock } from 'api';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Bars } from 'react-loader-spinner';
import PreloadImage from 'react-preload-image';
import Resizer from 'react-image-file-resizer';

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
  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(file, 300, 300, 'PNG', 100, 0, (images) => {
        resolve(images);
      });
    });
  const onChange = async (event) => {
    try {
      const file = event.target.files[0];
      const image = await resizeFile(file);
      console.log(image);
    } catch (err) {
      console.log(err);
    }
  };

  const width = window.innerWidth;
  const height = window.innerHeight;

  const { data, error } = useFetch(galleryMock, {
    variables: `?key=${params.id}`,
  });
  const { exhibition_detail, artwork_images } = data || {};
  const [images, setImages] = useState([]);

  const getImagesArray = () => {
    if (data) {
      let copyImages = [...images];
      copyImages.length == 0 &&
        artwork_images.map(({ images }) => {
          copyImages = [...copyImages, ...images];
        });
      setImages(copyImages);
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
  const length = images.length;

  const mod = length % 5;
  const divide = length / 5;
  const totalScene2Length = Math.floor(divide) + mod;
  const totalScene3Length = totalScene2Length - (mod > 3 ? 0 : 1);

  const backgroundImage = `${exhibition_detail?.style?.toLowerCase()}.png`;
  let a = 0;
  let b = 0;

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
              <div className="w-100% h-100vh flex items-center justify-center">
                <Bars
                  color="#000000"
                  height={80}
                  width={80}
                  ariaLabel="loading"
                />
              </div>
            ) : (
              <Slider ref={(c) => (slider.current = c)} {...settings}>
                <div className="relative">
                  <LazyLoadImage
                    className="w-100% h-100vh  "
                    src={`/images/gallery-mockup/scene1-${backgroundImage}`}
                    width={'100%'}
                    height={'100vh'}
                    alt={<Bars />}
                  />

                  <div className="w-100% h-100% absolute sm:left-30 left-50 top-0 flex flex-col items-center justify-center">
                    <div className="w-65%">
                      <div className="mb-16 text-heading text-white sm:tracking font-avenir-300 tracking-wider lg:text-xl xl:text-22 md:text-xl sm:text-xl tab:text-base uppercase">
                        {exhibition_detail?.room_name}
                        <span className="text-primary">.</span>
                      </div>
                      <div className="mb-6 text-20 text-gray-lighter font-nunito-bold sm:font-nunito-medium sm:tracking-tight   tracking uppercase">
                        {exhibition_detail?.artist_name}
                      </div>
                      <div className="text-20 text-gray-lighter font-nunito-bold sm:font-nunito-medium sm:tracking-tight tracking uppercase sm:text-xl ">
                        {exhibition_detail?.gallery_name}
                      </div>
                      <div className="flex mt-25%" onClick={next}>
                        <img src="/images/arrows/arrow-mockup.svg" alt="" />
                        <div className="ml-22 sm:ml-10 sm:mt-8 sm:text-sm sm:font-nunito-medium text-20 text-gray-lighter font-nunito-bold tracking uppercase">
                          Enter Gallery
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {Array.from(
                  Array(totalScene2Length + 1 + totalScene3Length).keys()
                )
                  .slice(1)
                  .map((index) => {
                    if (index % 2 != 0) {
                      a = a + 1;
                    }
                    const imageIndexScene2 = 3 * a + 2 * (a - 1);
                    return (
                      <>
                        {index % 2 != 0 ? (
                          <div className="relative">
                            <LazyLoadImage
                              className="w-100% h-100vh  "
                              src={`/images/gallery-mockup/scene2-${backgroundImage}`}
                              width={'100%'}
                              height={'100vh'}
                              alt={<Bars />}
                            />
                            <div className="absolute top-50% transform-y flex w-100% justify-evenly">
                              <div className="h-222 relative  ">
                                <img
                                  src="/images/gallery-mockup/portrait-frame.png"
                                  className="h-100% w-165 "
                                  alt=""
                                />
                                <LazyLoadImage
                                  src={images[imageIndexScene2 - 3]?.image}
                                  alt={<Bars />}
                                  className="absolute object-cover top-19 h-183 left-19 w-127 "
                                  onChange={onChange}
                                />
                              </div>
                              <div className="h-222 relative ">
                                <img
                                  src="/images/gallery-mockup/landscape-frame.png"
                                  className="h-100% w-298 "
                                  alt=""
                                />
                                <img
                                  src={images[imageIndexScene2 - 2]?.image}
                                  alt=""
                                  className="absolute top-27 h-169 left-27 w-245 object-cover"
                                  onChange={onChange}
                                />
                              </div>
                              <div className="h-222 relative ">
                                <img
                                  src="/images/gallery-mockup/portrait-frame.png"
                                  className="h-100% w-165 "
                                  alt=""
                                />
                                <img
                                  src={images[imageIndexScene2 - 1]?.image}
                                  alt=""
                                  className="absolute top-19 h-183 left-19 w-127 object-cover "
                                  onChange={onChange}
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="relative">
                            <LazyLoadImage
                              className="w-100% h-100vh "
                              src={`/images/gallery-mockup/scene3-${backgroundImage}`}
                              effect="blur"
                              width={'100%'}
                              height={'100vh'}
                              alt={`/images/gallery-mockup/scene3-${backgroundImage}`}
                            />

                            <div className="absolute top-51%  transform-y flex w-100% justify-evenly">
                              <div className="h-222 relative mr-20 ml-30  ">
                                <img
                                  src="/images/gallery-mockup/portrait-frame.png"
                                  className="h-100% w-165 "
                                  alt=""
                                />
                                <img
                                  src={images[imageIndexScene2]?.image}
                                  alt=""
                                  className="absolute object-cover top-19 h-183 left-19 w-127  "
                                  onChange={onChange}
                                />
                              </div>
                              <div className="h-222 relative mr-30  ">
                                <img
                                  src="/images/gallery-mockup/portrait-frame.png"
                                  className="h-100% w-165 "
                                  alt=""
                                />
                                <img
                                  src={images[imageIndexScene2 + 1]?.image}
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
