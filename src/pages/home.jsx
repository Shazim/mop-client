import Button from 'components/atoms/buttons/Button';
import { DescriptiveIcon } from 'components/DescriptiveIcon';
import { DiscoverMore } from 'components/DiscoveMore';
import Footer from 'components/molecules/footer/Footer';
import Header from 'components/molecules/header/Header';
import { LinkLabel } from 'components/LinkLabel';
import { ReceiveInsight } from 'components/ReceiveInsight';
import React from 'react';
import { useState } from 'react';

import LoginModal from 'components/molecules/modals/LoginModal';
import SignupModal from 'components/molecules/modals/SignupModal';
import ForgotPassword from 'components/molecules/modals/ForgotPassword';
import { getCookie } from 'cookies/Cookies';
import { useEffect } from 'react';
import { Link, useHistory, useLocation, Redirect } from 'react-router-dom';
import GridLayout from 'components/atoms/cards/GridLayout';

function Home() {
  const descriptiveIcons = [
    { source: '/images/services/satisfaction.svg', title: 'Return Policy' },
    { source: '/images/services/return.svg', title: 'Satisfaction Guarantee' },
    {
      source: '/images/services/carefully-package.svg',
      title: 'Carefully Packaged Artwork',
    },
    {
      source: '/images/services/mesuem.svg',
      title: 'Museum Grade Archival Prints',
    },
    { source: '/images/services/world.svg', title: 'Worldwide Delivery' },
  ];

  const [signUp, setSignUp] = useState();

  const history = useHistory();

  return (
    <>
      <div className="bg-featured-gallery sm:bg-home-mobile bg-no-repeat bg-cover sm:bg-cover">
        <Header />
        <div className="relative">
          <img
            className="sm:hidden absolute -bottom-38 right-0"
            src="/images/cubes.png"
          />
          <div className="max-screen pb-237 sm:pb-80 pt-158 sm:pt-60 sm:px-30 sm:flex sm:flex-col sm:items-center sm:justify-center">
            <div className="ml-50 sm:ml-0 sm:text-center text-primary sm:px-40 tracking-wider font-avenir-300 uppercase text-3xl leading-55 w-61% xl:w-70% lg:w-80% md:w-86% sm:w-100% sm:leading-50 sm:text-22 sm:tracking-wider">
              Access
              <span className="text-secondary sm:hidden">
                100’s of galleries{' '}
              </span>
              <span className="text-secondary hidden sm:inline">
                {' '}
                galleries
              </span>
              <span className="hidden sm:inline"> by artists </span>
              <span className="sm:hidden">from artists and photographers </span>
              from all over the world
            </div>
            <div className="ml-50 sm:ml-0 leading-32 font-avenir-reg text-xl text-secondary-darkest pt-16 pb-45 sm:pb-15 w-55% xl:w-65% lg:w-75% md:w-80% sm:w-100% sm:text-center sm:leading-30 sm:text-lg sm:mt-90 sm:px-20">
              An <span className="sm:font-bold">immersive experience</span>
              <span className="sm:hidden">which is curated and configured</span>
              <span className="hidden sm:inline"> curated</span> by the artist
              to suit the work that is on{' '}
              <span className="hidden sm:inline font-bold">
                virtual display. Select artwork{' '}
              </span>
              <span className="sm:hidden">
                virtual display. Purchase pieces of work you fall in love with
                directly and have them shipped to you
              </span>
              <span className="hidden sm:inline">
                that you fall in love with and receive them
              </span>
              within <span className="sm:font-bold">days of purchase.</span>
            </div>
            <Button
              transform="uppercase"
              className="w-275 h-33 ml-50 sm:hidden"
            >
              create a gallery
            </Button>
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
          <GridLayout column={2} gap={5} />
        </div>
        <div className="flex sm:hidden mt-43 justify-center mb-121">
          <Button
            onClick={() => history.push('/order-detail')}
            className="w-184 mr-18 "
          >
            View More
          </Button>
          <Button type="outline" className="w-184 h-48">
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
      <div className="bg-background-gallery sm:bg-gallery-mobile bg-no-repeat bg-cover">
        <div className="max-screen items-center pb-169 pt-165 sm:py-33">
          <div className="text-center text-2xl sm:text-xl font-avenir-reg font-black uppercase text-secondary-dark mb-22 leading-38 tracking-wider">
            your blank canvas<span className="text-primary">.</span>
          </div>
          <div className="text-center text-lg font-reg text-secondary-dark mb-22 leading-32 sm:leading-35">
            Create your gallery with your{' '}
            <span className="font-black">free trial</span> and upload up to{' '}
            <span className="font-black">5 images.</span>
            <br />
            Your free trial lasts for{' '}
            <span className="font-black">10 days</span> and you can upgrade to
            unlock more features.{' '}
          </div>
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
        <div className="border-border border-b">
          <DiscoverMore />
        </div>
      </div>
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
      <ReceiveInsight />

      <Footer />
    </>
  );
}

export default Home;
