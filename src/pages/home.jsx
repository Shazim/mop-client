// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { routes } from 'routes';
// ====================== IMPORTED COMPONENTS ========================
import Button from 'components/atoms/buttons/Button';
import { DescriptiveIcon } from 'components/DescriptiveIcon';
import { DiscoverMore } from 'components/DiscoveMore';
import Footer from 'components/molecules/footer/Footer';
import Header from 'components/molecules/header/Header';
import { LinkLabel } from 'components/LinkLabel';
import { ReceiveInsight } from 'components/ReceiveInsight';
import GridLayout from 'components/atoms/cards/GridLayout';
import CreateGallary from './create-gallary';
import { useSelector } from 'react-redux';

const Home = () => {
  const { isLoginOpen, isSignupOpen, isForgotOpen } = useSelector((state) => state.modals);
  const descriptiveIcons = [
    {
      source: '/images/services/satisfaction.svg',
      title: 'Independent artists and original photography',
    },
    {
      source: '/images/services/return.svg',
      title: 'Buyers protection: Money back Guarantee',
    },
    {
      source: '/images/services/carefully-package.svg',
      title: 'Carefully Packaged Artwork',
    },
    {
      source: '/images/services/mesuem.svg',
      title: 'High-End Quality Prints',
    },
    { source: '/images/services/world.svg', title: 'Worldwide Delivery' },
  ];

  const [showBg, setShowBg] = useState(false);

  const history = useHistory();

  return (
    <>
      <div className={`${(isLoginOpen || isSignupOpen || isForgotOpen) ? '' : 'bg-featured-gallery'} sm:bg-home-mobile bg-no-repeat bg-cover`}>
        <Header />
        <div className="relative">
          <img
            className="sm:hidden absolute -bottom-38 right-0"
            src="/images/cubes.png"
          />
          <div className="max-screen pb-237 sm:pb-80 pt-158 sm:pt-60 sm:px-30 sm:flex sm:flex-col sm:items-center sm:justify-center">
            <div className="w-100% sm:border-border sm:border-brown sm:shadow-3xl sm:flex sm:items-center sm:justify-center sm:border-6 pt-0 pb-0">
              <div className="w-100% h-100% sm:flex sm:items-center sm:justify-center sm:p-30">
                <div className="ml-50 sm:ml-0 sm:text-center text-primary sm:px-40 tracking-wider font-nunito-light uppercase text-3xl leading-55 w-61% xl:w-70% lg:w-80% md:w-86% sm:w-100% sm:leading-50 sm:text-22 sm:tracking-wider sm:bg-gradient-to-t from-transparent to-offwhite ">
                  {' '}
                  <span className="text-secondary sm:hidden">
                    Access hundreds of independent
                  </span>
                  <span className="text-secondary hidden sm:inline">
                    {' '}
                    galleries
                  </span>
                  <span className="hidden sm:inline"> by artists </span>
                  <span className="sm:hidden"> artists and photographers </span>
                  photography galleries. Discover and buy from the best
                  photographers around the world or create your own gallery.
                </div>
              </div>
            </div>
            <div className="hidden ml-50 sm:ml-0 leading-32 font-avenir-300 text-xl text-secondary-darkest pt-0 pb-45 sm:pb-15 w-55% xl:w-65% lg:w-75% md:w-80% sm:w-100% sm:text-center sm:leading-30 sm:text-lg sm:mt-20 sm:mb-20 sm:px-20">
              An <span className="sm:font-bold">immersive experience </span>
              <span className="sm:hidden">which is curated and configured</span>
              <span className="hidden sm:inline"> curated</span> by the artist
              to suit the work that is on{' '}
              <span className="hidden sm:inline font-bold">
                virtual display. Select artwork{' '}
              </span>
              <span className="sm:hidden">
                virtual display. Purchase pieces of work you fall in love with
                directly and have them shipped to you{' '}
              </span>
              <span className="hidden sm:inline">
                that you fall in love with and receive them
              </span>
              within <span className="sm:font-bold">days of purchase.</span>
            </div>
            <div className="flex mt-30">
              <Button
                type="outline"
                className="w-275 h-48 mr-18 ml-50 sm:hidden"
                onClick={() => history.push(routes.ROUTE_BROWSE_ARTWORK)}
              >
                BROWSE ART
              </Button>
              <Button
                transform="uppercase"
                className="w-275 h-48  sm:hidden"
                onClick={() => history.push(routes.ROUTE_CREATE_GALLERY)}
              >
                create a gallery
              </Button>
            </div>
            <div className="hidden ml-50">
              <LinkLabel label=" View Featured Galleries" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-screen pt-72 sm:px-23">
        <div className="text-2xl sm:text-center font-avenir-reg uppercase text-secondary-dark tracking-wider mb-42 sm:text-xl sm:leading-38 sm:mb-20">
          Featured
          <div className="flex">
            <div className="text-primary sm:hidden text-57 -mt-18 text-heading font-bold">
              .
            </div>
            <div className="border-t w-69 sm:hidden border-border mt-14"></div>
          </div>
        </div>
        <div className="block">
          <GridLayout column={3} gap={5} />
        </div>
        <div className="flex sm:hidden mt-43 justify-center mb-121">
          <Button className="w-184 mr-18 ">View More</Button>
          <Button
            type="outline"
            className="w-184 h-48"
            onClick={() => history.push(routes.ROUTE_BROWSE_ARTWORK)}
          >
            Browse
          </Button>
        </div>

        <div className="text-center hidden sm:block pt-30 pb-60 border-border border-t mt-30">
          <p className="font-avenir-reg font-medium mb-35 text-base uppercase text-secondary-dark leading-38 tracking-wider">
            If you are a photographer looking to exhibit we have the tools and
            support to help you reach more clients.
          </p>
          <p className="font-reg text-lg text-secondary-dark leading-35 mb-35">
            Using our suite of tools and mentorship program we can help you grow
            in terms of skills and reach. Click below to find out how much we
            offer and the different ways we can help you.
          </p>
          <Button className="w-275 h-51 mt-34">Discove More Today</Button>
        </div>
      </div>
      <div className="hr-b"></div>
      <div className="flex justify-between max-screen pt-130 pb-122 sm:pb-0 sm:pt-60 sm:w-100% sm:flex-col sm:items-center">
        <div className="text-center hidden sm:block mb-50">
          <p className="text-secondary-dark font-avenir-reg text-xl tracking-wider leading-15 uppercase">
            why the
          </p>
          <p className="text-primary font-avenir-800 text-xl tracking-wider leading-15 uppercase mt-10">
            red dot gallery?
          </p>
        </div>
        {descriptiveIcons.map(({ source, title }) => (
          <DescriptiveIcon source={source} title={title} />
        ))}
      </div>
      <div className="bg-background-gallery sm:bg-gallery-mobile bg-no-repeat bg-cover">
        <div className="max-screen items-center pb-169 pt-165 sm:py-33">
          <div className="text-center text-2xl sm:text-xl font-avenir-reg font-black uppercase text-secondary-dark mb-22 leading-38 tracking-wider">
            CREATE YOUR OWN GALLERY
          </div>
          <div className="text-center text-lg font-reg text-secondary-dark mb-22 leading-32 sm:leading-35">
            <p>And start selling your photographs:</p>{' '}
          </div>
          <ul className="w-40% ml-40% sm:w-100% sm:ml-0">
            <li className="text-lg font-reg text-secondary-dark mb-10 leading-32 sm:leading-35">
              - One exhibition room with 15 photographs
            </li>
            <li className="w-300 text-lg font-reg text-secondary-dark mb-10 leading-32 sm:leading-35">
              - 10GB storage (max 500 images)
            </li>
            <li className=" text-lg font-reg text-secondary-dark mb-10 leading-32 sm:leading-35">
              - Sell your work (sale fee of 12%)
            </li>
            <li className=" text-lg font-reg text-secondary-dark mb-10 leading-32 sm:leading-35">
              - Personal naming, logo, video{' '}
            </li>
            <li className=" text-lg font-reg text-secondary-dark mb-10 leading-32 sm:leading-35">
              - Protect photos with a watermark
            </li>
          </ul>

          <div className="flex justify-center mt-26">
            <Button
              transform="capitalize"
              className="w-251 h-51 sm:w-275 mr-18 sm:mr-0"
            >
              start your free trial
            </Button>
          </div>
        </div>
      </div>
      <div className="max-screen sm:hidden">
        <div className="border-border  ">
          <DiscoverMore />
        </div>
      </div>

      <ReceiveInsight />

      <Footer />
    </>
  );
};

export default Home;
