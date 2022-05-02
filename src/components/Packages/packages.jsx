import React from 'react';
import { Package } from 'components/Packages';
import SwitchButton from 'components/atoms/buttons/SwitchButton';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Packages({
  packages = [
    {
      popular: false,
      title: 'Starter',
      price: 8,
      description: 'beginners package',
    },
    {
      popular: true,
      title: 'Plus',
      price: 15,
      description: 'advanced package',
    },
    {
      popular: false,
      title: 'Pro',
      price: 25,
      description: 'advanced package',
    },
  ],
}) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    // slidesToScroll: 1,
    initialSlide: 1,
    centerMode: true,
    centerPadding: '0%',
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
        },
      },
      {
        breakpoint: 459,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: false,
          dots: true,
          centerPadding: '0%',
          transformEnabled: true,
        },
      },
    ],
  };

  return (
    <div className="pt-85 pb-114 sm:pt-30 ms:pb-48 flex flex-col sm:px-23 items-center">
      <div className="w-50% sm:w-100% uppercase text-2xl sm:text-xl text-center tracking-wider text-secondary font-avenir-reg ">
        subscription options to suit every level of photographer, from
        <span className="text-primary"> hobbyist</span> to a{' '}
        <span className="text-primary">professional</span>
      </div>
      <div className="flex justify-center uppercase font-bold tracking text-sm pt-52 pb-69">
        <div>monthly</div>
        <div className="mx-24">
          <SwitchButton />
        </div>
        <div>Yearly</div>
      </div>
      <div className="flex sm:hidden justify-between">
        {packages.map(({ popular, title, price, description }) => (
          <div className="mr-41 md:mr-20 lg:mr-20 xl:mr-20">
            <Package
              className="sm:mx-auto"
              popular={popular}
              description={description}
              price={price}
              title={title}
            />
          </div>
        ))}
      </div>
      <div className="packages-slider w-100% sm:block hidden">
        <Slider {...settings}>
          {packages.map(({ popular, title, price, description }) => (
            <div className="pt-40">
              <Package
                popular={popular}
                description={description}
                price={price}
                title={title}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Packages;
