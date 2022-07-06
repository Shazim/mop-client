import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from 'components/molecules/header/Header';
import { DiscoverMore } from 'components/DiscoveMore';
import { ReceiveInsight } from 'components/ReceiveInsight';
import Footer from 'components/molecules/footer/Footer';
import Button from 'components/atoms/buttons/Button';
import { useLocation, useHistory } from 'react-router-dom';
import LoginModal from 'components/molecules/modals/LoginModal';
import SignupModal from 'components/molecules/modals/SignupModal';
import ForgotPassword from 'components/molecules/modals/ForgotPassword';

function About() {
  const [signUp, setSignUp] = useState();
  const search = useLocation().search;
  const [signIn, setSignIn] = useState();
  const [forgot, setForgot] = useState();
  const history = useHistory();

  useEffect(() => {
    if (!signIn) {
      const login = new URLSearchParams(search).get('login');
      login && setSignIn((prv) => !prv);
    }
    scrollOff();
  }, [signUp, signIn, forgot]);

  const scrollOff = () => {
    signUp || signIn || forgot
      ? (window.document.body.style.overflow = 'hidden')
      : (window.document.body.style.overflow = 'scroll');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="bg-photography bg-no-repeat bg-cover ">
        <Header />
        <div className="max-screen pt-370 pb-116 sm:px-23 sm:py-80">
          <div className="ml-50 sm:ml-0 sm:text-center text-primary tracking-wider font-avenir-300 uppercase text-3xl sm:text-2xl leading-55 w-55% xl:w-60% lg:w-65% md:w-70% sm:w-100%">
            <span className="text-secondary">from the creators of </span>
            Masters of photography classes{' '}
            <span className="text-secondary"> the</span> Red Dot
            <span className="text-secondary">
              Gallery offers photographers a new way to
            </span>
            exhabit and sell
            <span className="text-secondary">their art.</span>
          </div>
          <div className="ml-50  mt-25">
            <Button className="w-275 h-48" transform="uppercase">
              discover our offers
            </Button>
          </div>
        </div>
      </div>
      <div className="flex max-screen justify-between pt-126 pb-156 sm:flex-col-reverse sm:py-80 sm:px-23">
        <div className="ml-50 w-40% lg:w-50% lg:ml-40 md:ml-30 md:w-50% sm:mt-43 sm:w-100% sm:ml-0">
          <div className="tracking-wider uppercase text-2xl sm:text-center font-avenir-reg text-dark leading-38">
            “Great Art in 2022 requires a different type of showcase”
            <span className="text-primary">.</span>
          </div>
          <div className=" font-nunito-light text-lg text-dark leading-32 pt-31 sm:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            viverra pharetra ultricies elementum. Tellus ullamcorper sit in
            scelerisque maecenas elit, viverra eu. Suspendisse ut netus mauris
            gravida viverra vel nunc facilisis scelerisque. Ultrices lobortis
            donec volutpat viverra.{' '}
          </div>
          <div className="pt-30 font-nunito-light text-lg text-dark leading-32 sm:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            viverra pharetra ultricies elementum. Tellus ullamcorper sit in
            scelerisque maecenas elit,
          </div>
        </div>
        <div className="w-40% sm:w-100%">
          <img className="sm:w-100%" src="/images/girl.png" alt="" />
        </div>
      </div>
      <div className="bg-background-gallery bg-cover bg-no-repeat">
        <div className="max-screen sm:px-23">
          <div className="py-131 px-250 xl:px-200 lg:px-170 md:px-130 sm:px-0 sm:py-80">
            <p className="uppercase font-avenir-reg font-black text-center text-2xl sm:text-xl leading-38 tracking-wider text-secondary-dark">
              using the latest technology to drive artist growth and art
              exploration
              <span className="text-primary">
                . <br />
                view, browse, buy, enjoy, love and own.
              </span>
            </p>
            <p className="font-reg text-center text-lg sm:text-base leading-38 mt-10 mb-28 text-secondary-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              viverra pharetra ultricies elementum. Tellus ullamcorper sit in
              scelerisque maecenas elit,
            </p>
            <Button className="w-251 h-51 mx-auto block">
              Discover Galleries
            </Button>
          </div>
        </div>
      </div>
      <div className="max-screen sm:px-23 border-border border-b">
        <DiscoverMore />
      </div>
      <div>
        <ReceiveInsight image="/images/desert.png" />
      </div>
      <LoginModal
        isOpen={signIn}
        openHandler={setSignIn}
        signUpHandler={setSignUp}
        forgotHandler={setForgot}
      />
      <SignupModal
        isOpen={signUp}
        openHandler={setSignUp}
        signInHandler={setSignIn}
        forgotHandler={setForgot}
      />
      <ForgotPassword
        isOpen={forgot}
        openHandler={setForgot}
        signInHandler={setSignIn}
        signUpHandler={setSignUp}
      />
      <Footer />
    </>
  );
}

export default About;
