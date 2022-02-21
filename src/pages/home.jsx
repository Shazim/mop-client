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
import { useEffect } from 'react';
import ForgotPassword from 'components/molecules/modals/ForgotPassword';
import { Link, useHistory } from 'react-router-dom';

function Home() {
  const [signUp, setSignUp] = useState()
  const [signIn, setSignIn] = useState()
  const [forgot, setForgot] = useState()
  const history = useHistory()
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

  useEffect(() => {
    scrollOff()
  },[signUp, signIn, forgot])

  const scrollOff = () => {
    (signUp || signIn || forgot) 
    ? window.document.body.style.overflow = "hidden" 
    : window.document.body.style.overflow = "scroll"
  } 
  return (
    <>
      <div className="bg-featured-gallery bg-no-repeat bg-cover">
        <Header signUpHandler={setSignUp} signInHandler={setSignIn} />
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
            <div className="ml-50">
              <LinkLabel label=" View Featured Galleries" />
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
          <Button onClick={() => history.push("/order-detail")} className="w-184 mr-18">View More</Button>
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
      <LoginModal isOpen={signIn} openHandler={setSignIn} signUpHandler={setSignUp} forgotHandler={setForgot} />
      <SignupModal isOpen={signUp} openHandler={setSignUp} signInHandler={setSignIn} forgotHandler={setForgot}/>
      <ForgotPassword isOpen={forgot} openHandler={setForgot} signInHandler={setSignIn} signUpHandler={setSignUp} />
      <ReceiveInsight />
      <Footer />
    </>
  );
}

export default Home;
