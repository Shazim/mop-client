import React from 'react';
import Button from 'components/atoms/buttons/Button';
import SwitchButton from 'components/atoms/buttons/SwitchButton';
import { Step } from 'components/Gallery';
import { LinkLabel } from 'components/LinkLabel';
import Header from 'components/molecules/header/Header';
import { Packages } from 'components/Packages';
import { FAQ } from 'components/FAQ';
import Footer from 'components/molecules/footer/Footer';

function CreateGallary() {
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
        <div className="max-screen pb-237 pt-158">
          <div className="ml-50 text-primary tracking-wider font-avenir-300 uppercase text-3xl leading-55 w-55%">
            showcase your work <span className="text-secondary">online </span>
            through your very own custom gallery{' '}
          </div>
          <div className="ml-50 leading-32 font-avenir-reg text-xl  text-secondary-darkest pt-16  pb-45 w-55%">
            An immersive experience which is curated and configured by the
            artist to suit the work that is on virtual display. Purchase pieces
            of work you fall in love with directly and have them shipped to you
            within days of purchase.
          </div>
          <div className="ml-50  ">
            <LinkLabel label="create a gallery" />
          </div>
        </div>
      </div>
      <div className="max-screen pt-72 pb-42">
        <div className="text-2xl font-avenir-reg uppercase text-secondary-dark tracking-wider">
          view demo
          <div className="flex">
            <div className="text-primary text-57 ml-_4 mt-_39">.</div>
            <div className="border-t w-69 border-border mt-14"></div>
          </div>
          <div className="relative w-max">
            <img
              src="/images/gallery/art-gallery.png"
              className="opacity-40 relative"
              alt=""
            />
            <img
              src="/images/gallery/play.svg"
              className="absolute top-50% left-50% transform-xy link"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-lighter py-118">
        <div className="max-screen text-center">
          <div className="font-avenir-reg uppercase text-secondary text-2xl tracking-wider">
            beginners go free<span className="text-primary text-3xl">.</span>
          </div>
          <div className="flex justify-center">
            <div className="font-nunito-light text-lg leading-32 text-center text-secondary-dark pb-26 pt-22 w-41%">
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
      <div className="pt-166 pb-123">
        <Packages />
      </div>
      <div className="flex max-screen">
        <div>
          <div className="uppercase text-2xl tracking-wider font-avenir-reg text-secondary-dark">
            create an <span className="text-primary">online presence</span> for
            your work in a few simple steps
          </div>
          <div className="flex">
            <img src="/images/gallery/steps.png" alt="" />
            <div>
              {steps.map(({ title, description }) => (
                <div className="pb-43">
                  <Step title={title} description={description} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <img src="/images/gallery.png" alt="" />
      </div>
      <div className="bg-gray-lighter pt-135 pb-157">
        <div className="text-2xl pb-47 text-center font-avenir-reg text-secondary uppercase tracking-wider">
          Sell your photos with our 24 hour printing service
        </div>
        <Button className="w-251 h-51 m-auto block">
          Start Your Free Trial
        </Button>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="text-secondary-dark">
        <div className="text-2xl tracking-wider font-avenir-reg uppercase text-center ">
          photographer reviews<span className="text-primary">.</span>
        </div>
        <div className="text-lg text-center font-nunito-light">
          See what the world’s artists think of our platform.
        </div>
        <div></div>
        <Button className="w-251 h-51 m-auto block">Get Your Free Trial</Button>
      </div>
      <div className="max-screen">
        <FAQ />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default CreateGallary;
