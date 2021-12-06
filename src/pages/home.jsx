import Button from 'components/atoms/buttons/Button';
import { DescriptiveIcon } from 'components/DescriptiveIcon';
import { DiscoverMore } from 'components/DiscoveMore';
import Footer from 'components/molecules/footer/Footer';
import Header from 'components/molecules/header/Header';
import React from 'react';

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

  return (
    <>
      <div className="bg-featured-gallery bg-no-repeat bg-cover">
        <Header />
        <div className="bg-cubes bg-no-repeat bg-right-bottom">
          <div className="max-screen pb-237 pt-158">
            <div className="ml-50 text-primary tracking-wider font-avenir-300 uppercase text-3xl leading-55 w-55%">
              Access <span className="text-secondary">100’s of galleries</span>{' '}
              from artists and photographers from all over the world
            </div>
            <div className="ml-50 leading-32 font-avenir-reg text-xl  text-secondary-darkest pt-16  pb-45 w-55%">
              An immersive experience which is curated and configured by the
              artist to suit the work that is on virtual display. Purchase
              pieces of work you fall in love with directly and have them
              shipped to you within days of purchase.
            </div>
            <div className="ml-50  ">
              <img src="/images/Home/blocks.svg" />
              <div className="pl-14  text-primary text-xl tracking uppercase font-avenir-800">
                View Featured Galleries
                <div className="border-b-2 border-secondary w-111 pt-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-screen">
        <div className="text-2xl font-avenir-reg uppercase text-secondary-dark tracking-wider">
          Featured
          <div className="flex">
            <div className="text-primary text-57 ml-_4 mt-_39">.</div>
            <div className="border-t w-69 border-border mt-14"></div>
          </div>
        </div>
        <div className="flex mt-100">
          <Button className="w-184 mr-18">View More</Button>
          <Button type="outline" className="w-184 h-48">
            Browse
          </Button>
        </div>
      </div>
      <div>
        <div>your blank canvas.</div>
        <div>
          Create your gallery with your free trial and upload up to 5 images.
          Your free trial lasts for 10 days and you can upgrade to unlock more
          features.{' '}
        </div>
        <Button className="w-251 mr-18">start your free trial</Button>
      </div>
      <div className="max-screen border-border border-b">
        <DiscoverMore />
      </div>
      <div className="flex justify-between max-screen pt-130 pb-122">
        {descriptiveIcons.map(({ source, title }) => (
          <DescriptiveIcon source={source} title={title} />
        ))}
      </div>
      <div className="flex border-border border-t ">
        <div className=" max-screen pt-101 w-40% ">
          <div>
            <div className="tracking-wider text-2xl uppercase font-avenir-reg pb-34">
              Receive insights and news from the worlds leading voices
            </div>
            <div>input</div>
            <div>input</div>
            <Button className="w-251 mr-18 h-42 mt-44 mb-14">Subscribe</Button>
            <div className="text-primary capitalize font-light text-base link">
              See Terms & Conditions
            </div>
          </div>
        </div>
        <img src="/images/girl.png" alt="" />
      </div>
      <Footer />
    </>
  );
}

export default Home;
