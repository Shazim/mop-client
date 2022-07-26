import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PriceSheetCollection } from 'api/api-services';
import { useFetch } from 'hooks';
import { AdminLayout } from 'Layout';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { routes } from 'routes';
import { useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';

const PriceSheet = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const { data: getData } = useFetch(PriceSheetCollection);
  const { price_sheets = [] } = getData || [];

  useEffect(() => {
    if (getData) setIsLoading(false);
  }, [getData]);
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
          dots: false,
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
      {isLoading ? (
        <div className="w-100% h-100vh flex items-center justify-center ">
          <TailSpin
            color="#C71118"
            height={80}
            width={80}
            ariaLabel="loading"
          />
        </div>
      ) : (
        <>
          {price_sheets.length > 0 ? (
            <>
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

              <div className="mt-17 grid grid-cols-4 sm:hidden md:grid-cols-3">
                {price_sheets.map(({ name, id }) => (
                  <Link to={`/price-sheet/${id}`}>
                    <div className="w-186 h-186 bg-gray "></div>
                    <div className="mt-7 mb-30 font-nunito-reg font-bold  text-secondary text-sm uppercase leading-32 tracking">
                      {name}
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center justify-center pt-112">
              <p className="font-avenir-reg text-primary text-4xl uppercase leading-55 tracking-wider">
                You have no Price Sheets
              </p>
              <p className="font-avenir-reg text-secondary text-xl uppercase leading-55 tracking-wider">
                Drag your images here to start uploading.{' '}
              </p>
              <p className="font-reg text-black text-base leading-snug">
                When uploaded, you can edit your image details by clicking the
                pencil icon. Adding this will
                <br /> make your images more visible for search engines.
              </p>
              <img
                className="mx-auto w-180 h-180 mt-56 mb-491"
                src="/images/galleryIcon.svg"
              />
            </div>
          )}
        </>
      )}
    </AdminLayout>
  );
};

export default PriceSheet;
