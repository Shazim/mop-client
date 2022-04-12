import React from 'react';
import Button from 'components/atoms/buttons/Button';
import SwitchButton from 'components/atoms/buttons/SwitchButton';
import { Step } from 'components/Gallery';
import { LinkLabel } from 'components/LinkLabel';
import Header from 'components/molecules/header/Header';
import { Packages } from 'components/Packages';
import { FAQ } from 'components/FAQ';
import Footer from 'components/molecules/footer/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { DescriptiveIcon } from 'components/DescriptiveIcon';
import GalleryCard from 'components/atoms/cards/GalleryCard';
import ProfileCard from 'components/atoms/cards/ProfileCard';

function CreateGallary() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 2,
  };
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
  const steps = [
    {
      title: 'Create',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt viverra pharetra ultricies elementum. ',
    },
    {
      title: 'Style',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt viverra pharetra ultricies elementum. ',
    },
    {
      title: 'Launch',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt viverra pharetra ultricies elementum. ',
    },
  ];

  return (
    <>
      <div className="bg-featured-gallery bg-no-repeat bg-cover">
        <Header />
        <div className="relative">
          <img
            className="hidden w-230 sm:block absolute -bottom-18 right-0"
            src="/images/cubes.png"
          />
          <div className="max-screen relative pb-237 pt-158 sm:px-23 sm:pt-80 sm:pb-130">
            <div className="ml-50 text-primary tracking-wider font-avenir-300 uppercase text-3xl sm:text-2xl leading-55 w-55% xl:w-60% lg:w-65% md:w-70% sm:w-100% sm:ml-0">
              showcase your work <span className="text-secondary">online </span>
              through your very own custom gallery{' '}
            </div>
            <div className="ml-50 leading-32 sm:leading-35 font-avenir-reg text-xl  text-secondary-darkest pt-16  pb-45 w-55% xl:w-60% lg:w-65% md:w-70% sm:w-100% sm:ml-0">
              An immersive experience which is curated and configured by the
              artist to suit the work that is on virtual display. Purchase
              pieces of work you fall in love with directly and have them
              shipped to you within days of purchase.
            </div>
            <div className="ml-50 sm:hidden">
              <LinkLabel label="create a gallery" />
            </div>
            <div className="hidden sm:block">
              <Button className="w-275 h-44" transform="uppercase">
                create a gallary
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-screen pt-72 pb-42 justify-center items-center sm:py-49 sm:px-23">
        <div className="text-2xl sm:mb-18 leading-38 font-avenir-reg uppercase text-secondary-dark tracking-wider sm:text-center">
          view demo
          <div className="flex sm:hidden mb-42">
            <div className="text-primary text-57 ml-_4">.</div>
            <div className="border-b w-69 border-border mb-13"></div>
          </div>
          <div className="relative">
            <img
              src="/images/gallery/art-gallery.png"
              className="opacity-40 w-100% relative"
              alt=""
            />
            <img
              src="/images/gallery/play.svg"
              className="absolute top-50% left-50% sm:w-22 sm:h-27 transform-xy link"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-lighter py-118 sm:pb-71 sm:pt-56 sm:bg-gofree-mobile sm:bg-no-repeat sm:bg-cover">
        <div className="max-screen text-center sm:px-23">
          <div className="font-avenir-reg uppercase text-secondary text-2xl sm:text-xl tracking-wider">
            beginners go free<span className="text-primary text-3xl">.</span>
          </div>
          <div className="flex justify-center">
            <div className="font-nunito-light text-lg leading-32 text-center text-secondary-dark pb-26 pt-22 w-41% sm:w-100%">
              Create your gallery with your{' '}
              <span className="font-bold">free trial</span> and upload up to{' '}
              <span className="font-bold">5 images.</span>
              Your free trial lasts for{' '}
              <span className="font-bold">10 days</span> and you can upgrade to
              unlock more features.{' '}
            </div>
          </div>
          <Button className="w-251 h-51 mr-18">Start Your Free Trial</Button>
        </div>
      </div>
      <div className="bg-bg-gallery bg-no-repeat bg-cover sm:bg-none">
        <div className="max-screen pt-130 pb-122">
          <div className="text-center mb-53">
            <p className="font-avenir-reg text-2xl text-secondary-dark uppercase mb-47 leading-38 tracking-wider">
              giving you the tools to create <br /> galleries, earn extra income
              and more<span className="text-primary">.</span>
            </p>
            <Button className="w-251 h-51 m-auto block">
              Start Your Free Trial
            </Button>
          </div>
          <div className="flex sm:flex-col justify-between">
            {descriptiveIcons.map(({ source, title }) => (
              <DescriptiveIcon source={source} title={title} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex max-screen py-115 sm:px-23 sm:pt-42 sm:pb-67 sm:bg-off-white">
        <div>
          <div className="uppercase text-2xl sm:leading-38 sm:text-xl tracking-wider font-avenir-reg text-secondary-dark">
            create an <span className="text-primary">online presence</span> for
            your work in a few simple steps
          </div>
          <div className="flex mt-56">
            {/* <img src="/images/gallery/steps.png" className='h-299' alt="" /> */}
            <div className="relative pl-20">
              {steps.map(({ title, description }, index) => (
                <>
                  <div className="flex w-41 h-41 sm:w-34 sm:h-34 text-avenir-reg text-2xl sm:text-20 font-medium bg-secondary items-center absolute -left-0 text-center justify-center rounded-full text-white">
                    {index + 1}
                  </div>
                  <div
                    className={`pb-43 pt-5 pl-30 ${
                      index != 2 ? 'border-l-3 border-border' : ''
                    }`}
                  >
                    <Step title={title} description={description} />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <img className="sm:hidden" src="/images/gallery.png" alt="" />
      </div>
      <div className="bg-gray-lighter">
        <div className="max-screen pt-135 pb-157">
          <div className="text-2xl mb-47 text-center font-avenir-reg text-secondary uppercase tracking-wider">
            Sell your photos with our 24 hour <br />
            printing service
          </div>
          <Button className="w-251 h-51 m-auto block">
            Start Your Free Trial
          </Button>
          <div className="flex sm:flex-col justify-around mt-60">
            <div className="w-15% sm:flex text-center sm:w-100%">
              <img
                className="m-auto mb-30 font-reg text-base leading-10 text-secondary-dark"
                src="/images/clock.svg"
              />
              <p>24 hour Printing Service to manage your orders</p>
            </div>
            <div className="w-15% text-center">
              <img
                className="m-auto mb-30 font-reg text-base leading-10 text-secondary-dark"
                src="/images/pound.svg"
              />
              <p>Sell your photos through your gallery</p>
            </div>
            <div className="w-15% text-center">
              <img
                className="m-auto mb-30 font-reg text-base leading-10 text-secondary-dark"
                src="/images/sms.svg"
              />
              <p>Print & send automatically or use your own print lab</p>
            </div>
          </div>
        </div>
      </div>
      <Packages />

      <div className="bg-gray-lighter">
        <div className="max-screen items-center py-136">
          <div className="text-2xl tracking-wider font-avenir-reg uppercase text-center mb-2 ">
            photographer reviews<span className="text-primary">.</span>
          </div>
          <div className="text-lg text-center font-nunito-light leading-35 mb-48">
            See what the world’s artists think of our platform.
          </div>
          <div className="w-100% mx-auto">
            <Slider {...settings}>
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </Slider>
          </div>
          <Button className="w-251 h-51 m-auto block mt-50">
            Get Your Free Trial
          </Button>
        </div>
      </div>
      <div className="max-screen py-67">
        <FAQ />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default CreateGallary;
