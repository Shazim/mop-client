import React from 'react';
import { Package } from 'components/Packages';
import SwitchButton from 'components/atoms/buttons/SwitchButton';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFetch } from 'hooks';
import { getPackages } from 'api';
import { setCookie } from 'cookies/Cookies';
import { routes } from 'routes';

function Packages(
  {
    // packages = [
    //   {
    //     popular: false,
    //     title: 'Starter',
    //     price: 8,
    //     description: 'beginners package',
    //   },
    // ],
  }
) {
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

  const [switchActive, setSwitchActive] = useState(false);

  const handleSwitch = () => {
    setSwitchActive((prev) => !prev);
  };

  const { data: packagesData } = useFetch(getPackages);

  const history = useHistory();
  const packages = switchActive
    ? packagesData?.yearly_packages
    : packagesData?.monthly_packages || [];

  const handleSelectPackage = (data) => {
    history.push(routes.ROUTE_SUBSCRIBE_LOGIN);
    setCookie('package', JSON.stringify(data));
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
          <SwitchButton onChange={handleSwitch} active={switchActive} />
        </div>
        <div>Yearly</div>
      </div>
      <div className="flex sm:hidden justify-between">
        {packages.map(({ popular, name, price, description, id }) => (
          <div className="mr-41 md:mr-20 lg:mr-20 xl:mr-20">
            <Package
              className="sm:mx-auto"
              popular={popular}
              description={description}
              price={price}
              title={name}
              onClickSubscribeBtn={() => {
                handleSelectPackage({
                  name,
                  price,
                  description,
                  id,
                  year: switchActive,
                });
              }}
              year={switchActive}
            />
          </div>
        ))}
      </div>
      <div className="packages-slider w-100% sm:block hidden">
        <Slider {...settings}>
          {packages.map(({ popular, name, price, description, id }) => (
            <div className="pt-40">
              <Package
                popular={popular}
                description={description}
                price={price}
                title={name}
                onClickSubscribeBtn={() =>
                  handleSelectPackage({
                    name,
                    price,
                    description,
                    id,
                    year: switchActive,
                  })
                }
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Packages;
