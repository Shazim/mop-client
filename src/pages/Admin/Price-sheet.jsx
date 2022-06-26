import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PriceSheetCollection } from 'api/api-services';
import { useFetch } from 'hooks';
import { AdminLayout } from 'Layout';

const PriceSheet = () => {
  const { data: getData } = useFetch(PriceSheetCollection);
  const { price_sheets = [] } = getData || [];

  const settings = {
    dots: true,
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 959,
        settings: {
          arrows: false,
          slidesToShow: 1.5,
          centerMode: true,
          dots: true,
          centerPadding: '0%',

          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <AdminLayout
      title="pricing and products"
      buttonText="create new"
      button={true}
    >
      <div className="font-avenir-reg font-medium text-xl text-secondary uppercase tracking-wider leading-54">
        Price sheets
      </div>
      <div className="font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking ">
        available price sheets:
      </div>

      <div className="hidden sm:block">
        <Slider {...settings}>
          {price_sheets.map((price) => (
            <div className="mr-35">
              <div className="w-186 h-186 bg-gray "></div>
              <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
                {price.name}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-17 grid grid-cols-4 sm:hidden">
        {price_sheets.map((price) => (
          <div className="">
            <div className="w-186 h-186 bg-gray "></div>
            <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
              {price.name}
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-24 hr-b"></div>
    </AdminLayout>
  );
};

export default PriceSheet;
