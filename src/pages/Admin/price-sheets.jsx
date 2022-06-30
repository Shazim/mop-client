import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PriceSheetCollection } from 'api/api-services';
import { useFetch } from 'hooks';
import { AdminLayout } from 'Layout';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { routes } from 'routes';

const PriceSheet = () => {
  const history = useHistory();

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
      buttonText="CREATE NEW"
      button={true}
      handler={() => history.push(routes.ROUTE_CREATE_PRICE_SHEET)}
    >
      <div className="font-avenir-reg font-medium text-xl text-secondary uppercase tracking-wider leading-54">
        Price sheets
      </div>
      <div className="font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking ">
        available price sheets:
      </div>

      <div className="hidden sm:block">
        <Slider {...settings}>
          {price_sheets.map(({ name, id }) => (
            <Link to={`/price-sheet/${id}`}>
              <div className="mr-35">
                <div className="w-186 h-186 bg-gray "></div>
                <div className="mt-7 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
                  {name}
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>

      <div className="mt-17 grid grid-cols-4 sm:hidden">
        {price_sheets.map(({ name, id }) => (
          <Link to={`/price-sheet/${id}`}>
            <div className="w-186 h-186 bg-gray "></div>
            <div className="mt-7 mb-30 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
              {name}
            </div>
          </Link>
        ))}
      </div>
    </AdminLayout>
  );
};

export default PriceSheet;
