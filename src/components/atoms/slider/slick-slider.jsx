import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from './Arrow/Arrow';
import { useFetch, usePost } from 'hooks';
import { galleryMock } from 'api';
import { useState, useEffect } from 'react';

const SlickSlider = () => {
  // const images = [
  //   { image: '/images/gallery-mockup/scene1-dark.png' },
  //   { image: '/images/gallery-mockup/scene2-dark.png' },
  // ];

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

  const { data, error } = useFetch(galleryMock, { variables: `?key=6lrruk95` });
  const { exhibition_detail, artwork_images } = data || {};
  const [images, setImages] = useState([]);

  const getImagesArray = () => {
    if (data) {
      let copyImages = [...images];
      copyImages.length == 0 &&
        artwork_images.map(({ images }) => {
          console.log('kju', [...copyImages, ...images]);
          copyImages = [...copyImages, ...images];
        });
      setImages(copyImages);
    }
  };

  useEffect(() => {
    getImagesArray();
  }, [data]);

  const length = images.length;
  const mod = length % 5;
  const divide = length / 5;
  const totalScene2Length = Math.floor(divide) + mod;
  const totalScene3Length = totalScene2Length - (mod > 3 ? 0 : 1);

  const backgroundImage = `/images/gallery-mockup/scene1-${exhibition_detail?.style?.toLowerCase()}.png`;
  let a = 0;
  let b = 0;
  return (
    <>
      {width < 700 ? (
        <></>
      ) : width > height ? (
        <div className="w-100% h-100vh slider-dots">
          <Slider {...settings}>
            <div className="relative">
              <img
                className='className="w-100% h-100vh  sm:w-100% sm:h-100%'
                src={backgroundImage}
              />
              <div className="absolute left-20% top-40%">
                <div className="mb-16 text-heading text-white font-avenir-300 tracking-wider lg:text-22 xl:text-2xl md:text-22 sm:text-20 tab:text-base uppercase">
                  {exhibition_detail?.room_name}
                  <span className="text-primary">.</span>
                </div>
                <div className="mb-6 text-20 text-gray-lighter font-nunito-bold tracking uppercase">
                  {exhibition_detail?.artist_name}
                </div>
                <div className="text-20 text-gray-lighter font-nunito-bold tracking uppercase">
                  {exhibition_detail?.gallery_name}
                </div>
                <div className="flex mt-299">
                  <img src="/images/arrows/arrow-mockup.svg" alt="" />
                  <div className="ml-22 text-20 text-gray-lighter font-nunito-bold tracking uppercase">
                    Enter Gallery
                  </div>
                </div>
              </div>
            </div>
            {Array.from(Array(totalScene2Length + 1 + totalScene3Length).keys())
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
                        <img
                          className='className="w-100% h-100vh  sm:w-100% sm:h-100%'
                          src={backgroundImage}
                        />
                        <div className="absolute top-50% transform-y flex w-100% justify-evenly">
                          <div className="h-222 relative  sm:h-100 ">
                            <img
                              src="/images/gallery-mockup/portrait-frame.png"
                              className="h-100% w-165 sm:w-93"
                              alt=""
                            />
                            <img
                              src={images[imageIndexScene2 - 3]?.image}
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
                              src={images[imageIndexScene2 - 2]?.image}
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
                              src={images[imageIndexScene2 - 1]?.image}
                              alt=""
                              className="absolute top-19 h-183 left-19 w-127 object-cover "
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        <img
                          className='className="w-100% h-100vh '
                          src={backgroundImage}
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
                              src={images[imageIndexScene2]?.image}
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

            {/* {Array.from(Array(totalScene3Length + 1).keys())
              .slice(1)
              .map((index) => (
                <div className="relative">
                  <img
                    className='className="w-100% h-100vh '
                    src={backgroundImage}
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
              ))} */}
          </Slider>
        </div>
      ) : (
        <div className="absolute font-bold uppercase  text-secondary font-avenir-reg text-heading left-30% top-30% ">
          there is no slider
        </div>
      )}
    </>
  );
};

export default SlickSlider;
