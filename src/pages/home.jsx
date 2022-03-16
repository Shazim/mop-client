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
import { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
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
  
  const [signUp, setSignUp] = useState()
  const search = useLocation().search
  const [signIn, setSignIn] = useState()
  const [forgot, setForgot] = useState()
  const history = useHistory()
  
  useEffect(() => {
    if(!signIn){
      const login = new URLSearchParams(search).get('login');
      (login) && setSignIn(prv => !prv)
    }
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
        <div className="relative">
          <img className='absolute -bottom-38 right-0' src='/images/cubes.png'/>
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
      <div className="max-screen pt-72">
        <div className="text-2xl font-avenir-reg uppercase text-secondary-dark tracking-wider mb-42">
          Featured
          <div className="flex">
            <div className="text-primary text-57 -mt-18 text-heading font-bold">.</div>
            <div className="border-t w-69 border-border mt-14"></div>
          </div>
        </div>
        <div className='block'>
          <GridLayout column={2} gap={5} /> 
        </div>
        <div className="flex mt-43 justify-center mb-121">
          <Button onClick={() => history.push("/order-detail")} className="w-184 mr-18 ">View More</Button>
          <Button type="outline" className="w-184 h-48">
            Browse
          </Button>
        </div>
      </div>
      <div className='bg-background-gallery bg-no-repeat bg-cover'>
        <div className='max-screen items-center pb-169 pt-165'>
          <div className='text-center text-2xl font-avenir-reg font-black uppercase text-secondary-dark mb-22 leading-38 tracking-wider'>your blank canvas<span className='text-primary'>.</span></div>
          <div className='text-center text-lg font-reg text-secondary-dark mb-22 leading-32'>
            Create your gallery with your <span className='font-black'>free trial</span> and upload up to <span className='font-black'>5 images.</span><br/>
            Your free trial lasts for <span className='font-black'>10 days</span> and you can upgrade to unlock more
            features.{' '}
          </div>
          <div className='flex justify-center mt-26'>
            <Button transform='capitalize' className="w-251 h-51 mr-18">start your free trial</Button>
          </div>
        </div>
      </div>
      <div className="max-screen">
        <div className='border-border border-b'>
          <DiscoverMore />
        </div>
      </div>
      <div className="flex justify-between max-screen pt-130 pb-122">
        {descriptiveIcons.map(({ source, title }) => (
          <DescriptiveIcon source={source} title={title} />
        ))}
      </div>
      <ReceiveInsight />
      <LoginModal isOpen={signIn} openHandler={setSignIn} signUpHandler={setSignUp} forgotHandler={setForgot} />
      <SignupModal isOpen={signUp} openHandler={setSignUp} signInHandler={setSignIn} forgotHandler={setForgot}/>
      <ForgotPassword isOpen={forgot} openHandler={setForgot} signInHandler={setSignIn} signUpHandler={setSignUp} />
      <Footer />
    </>
  );
}

export default Home;
