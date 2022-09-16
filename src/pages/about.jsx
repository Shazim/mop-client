// ====================== IMPORTED LIBRARIES ========================
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// ====================== IMPORTED COMPONENT ========================
import Header from 'components/molecules/header/Header';
import { DiscoverMore } from 'components/DiscoveMore';
import { ReceiveInsight } from 'components/ReceiveInsight';
import Footer from 'components/molecules/footer/Footer';
import Button from 'components/atoms/buttons/Button';
import withCustomerRoute from 'hoc/withCustomerRoute';

const About = () => {
  const { isLoginOpen, isSignupOpen, isForgotOpen } = useSelector(
    (state) => state.modals
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div
        className={`${
          isLoginOpen || isSignupOpen || isForgotOpen
            ? ''
            : 'bg-photography bg-no-repeat bg-cover'
        }  `}
      >
        <Header />
        <div className="max-screen pt-370 pb-116 sm:px-23 sm:py-80">
          <div className="ml-50 sm:ml-0 sm:text-center text-primary tracking-wider font-avenir-300 uppercase text-3xl sm:text-2xl leading-55 w-55% xl:w-60% lg:w-65% md:w-70% sm:w-100%">
            <span className="text-secondary">from the creators of </span>
            Masters of photography classes{' '}
            <span className="text-secondary"> the</span> Red Dot
            <span className="text-secondary">
              {''} Gallery offers photographers a new way to
            </span>
            {''} exhabit and sell
            <span className="text-secondary">{''} their art.</span>
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
            “GREAT PHOTOGRAPHY IN….”
          </div>
          <div className=" font-nunito-light text-lg text-dark leading-32 pt-31 sm:text-center">
            The RED DOT GALLERY provides photographers with simple yet powerful
            tools to exhibit and sell their work. We also provide the tools to
            create NFT’s from your photographs to sell on most platforms.
            Whether you want to make money from your photography or simply share
            your photos with friends and family, we offer you easy to use tools
            to create your own unique gallery and exhibitions.{' '}
          </div>
          <div className="pt-30 font-nunito-light text-lg text-dark leading-32 sm:text-center">
            The Red Dot Gallery is also a global marketplace where people buy
            and sell photographs and NFT’s.
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
            <p className="font-reg text-center text-lg sm:text-base leading-32 mt-10 mb-28 text-secondary-dark">
              We have partnered with high end printers around the world to
              deliver the photographs directly to the buyers.
            </p>
            <Button className="w-251 h-51 mx-auto block">
              Discover Galleries
            </Button>
          </div>
        </div>
      </div>
      <div className="max-screen sm:px-23 border-border border-b">
        <div
          className={`py-136 sm:py-80 sm:px-23 m-auto w-40% xl:w-50% lg:w-60% md:w-70% sm:w-100%`}
        >
          <div className="text-2xl sm:text-lg text-secondary-dark tracking-wider font-avenir-reg uppercase text-center">
            NFT MINTER AND WALLET
          </div>
          <div className="text-lg sm:text-base font-nunito-light text-center pt-28 pb-26 leading-32">
            We offer super easy and secure tools to mint your NFTs on your
            preferred blockchain. You can store your NFT on our wallet that
            support over 12 different blockchains to then sell to the main NFT
            marketplaces. Create an account for free and get started
          </div>
          <Button className="w-251 h-51 mx-auto block">Let’s Go!</Button>
        </div>
      </div>
      <div className="flex border-border  sm:border-t-0 sm:bg-offwhite ">
        <div className=" max-screen sm:px-23 sm:w-100% pt-101 w-40% xl:w-45% lg:w-50% md:w-50% xl:pb-50 lg:pb-50 md:pb-50">
          <div className="sm:w-100% sm:flex-col sm:flex sm:items-center sm:justify-center sm:pb-50">
            <div className="tracking-wider uppercase text-2xl sm:text-center font-avenir-reg text-dark leading-38">
              GET IN TOUCH!
            </div>
            <div className=" font-nunito-light text-lg text-dark leading-32 pt-31 sm:text-center">
              Questions, feedback, or simply want to chat?
            </div>
            <div className="pt-30 font-nunito-light text-lg text-dark leading-32 sm:text-center">
              We’re also always looking for blog contributors,
              <br /> affiliate partners or other partnership ideas.
            </div>
            <div className="pt-30 font-nunito-light text-lg text-dark leading-32 sm:text-center">
              Email us at:
              <span className="font-bold">support@reddot.gallery</span>
            </div>
            <div className="pt-30 font-nunito-light text-lg text-dark leading-32 sm:text-center">
              Connect with us on our social media channels:
              <br />
            </div>
            <div className="social-media-icons mt-30 flex justify-start gap-40 items-center">
              <a href="#" className="icon-facebook cursor-pointer">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 21.5C5.97715 21.5 1.5 17.0228 1.5 11.5C1.5 5.97715 5.97715 1.5 11.5 1.5C17.0228 1.5 21.5 5.97715 21.5 11.5C21.5 17.0228 17.0228 21.5 11.5 21.5ZM11.5 21.5V9.5C11.5 8.39543 12.3954 7.5 13.5 7.5H15M8 13.5H15"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </a>
              <a href="#" className="icon-instagram cursor-pointer">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 6.5H18M5.5 1.5H17.5C19.7091 1.5 21.5 3.29086 21.5 5.5V17.5C21.5 19.7091 19.7091 21.5 17.5 21.5H5.5C3.29086 21.5 1.5 19.7091 1.5 17.5V5.5C1.5 3.29086 3.29086 1.5 5.5 1.5ZM11.5 15.5C9.29086 15.5 7.5 13.7091 7.5 11.5C7.5 9.29086 9.29086 7.5 11.5 7.5C13.7091 7.5 15.5 9.29086 15.5 11.5C15.5 13.7091 13.7091 15.5 11.5 15.5Z"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </a>
              <a href="#" className="icon-twitter cursor-pointer">
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.3941 2.78564L25.3919 2.71949C25.3653 2.31835 25.1011 1.97213 24.7212 1.84064C24.3413 1.70915 23.9196 1.81796 23.6507 2.11684L24.3941 2.78564ZM23.764 7.61651C23.764 7.06422 23.3163 6.61651 22.764 6.61651C22.2117 6.61651 21.764 7.06422 21.764 7.61651H23.764ZM13.0008 9.07136V10.0714H14.0008V9.07136H13.0008ZM3.2024 2.78564L4.13891 2.435C3.99937 2.06232 3.65215 1.80785 3.25476 1.78702C2.85737 1.76618 2.48544 1.98295 2.3077 2.33898L3.2024 2.78564ZM9.57227 17.6428L10.2799 18.3493C10.5246 18.1042 10.6251 17.75 10.5455 17.4129C10.4658 17.0758 10.2175 16.8039 9.88893 16.6943L9.57227 17.6428ZM1.57227 20.7448V19.7448C1.13173 19.7448 0.743087 20.0331 0.615277 20.4547C0.487466 20.8763 0.650599 21.3319 1.01697 21.5765L1.57227 20.7448ZM21.5168 4.37484L20.7751 5.04552L21.1354 5.44401L21.6666 5.36356L21.5168 4.37484ZM23.3963 2.8518C23.4799 4.11245 23.4004 4.85402 23.2069 5.39943C23.0209 5.92394 22.6951 6.3646 22.0721 6.96158L23.4559 8.40563C24.1799 7.71182 24.7562 7.0144 25.0918 6.06808C25.4201 5.14266 25.4822 4.08065 25.3919 2.71949L23.3963 2.8518ZM23.764 8.80604V7.6836H21.764V8.80604H23.764ZM23.764 7.6836V7.61651H21.764V7.6836H23.764ZM12.0008 7.9285V9.07136H14.0008V7.9285H12.0008ZM17.9406 1.78564C14.5995 1.78564 12.0008 4.68639 12.0008 7.9285H14.0008C14.0008 5.68636 15.8059 3.78564 17.9406 3.78564V1.78564ZM21.764 8.80604C21.764 15.7688 15.9128 21.7856 9.00084 21.7856V23.7856C17.0564 23.7856 23.764 16.8339 23.764 8.80604H21.764ZM2.26589 3.13629C3.18446 5.58959 6.60542 10.0714 13.0008 10.0714V8.07136C7.65929 8.07136 4.85047 4.33544 4.13891 2.435L2.26589 3.13629ZM2.3077 2.33898C0.583363 5.79298 0.268533 9.20444 1.4912 12.1304C2.71389 15.0564 5.39246 17.3016 9.2556 18.5913L9.88893 16.6943C6.41647 15.535 4.27998 13.6169 3.33656 11.3593C2.39313 9.10155 2.56117 6.30892 4.0971 3.23231L2.3077 2.33898ZM8.86461 16.9362C7.92025 17.8821 5.16132 19.7448 1.57227 19.7448V21.7448C5.80785 21.7448 9.0508 19.5804 10.2799 18.3493L8.86461 16.9362ZM22.2586 3.70415C21.1946 2.52747 19.6536 1.78564 17.9406 1.78564V3.78564C19.0643 3.78564 20.0739 4.27008 20.7751 5.04552L22.2586 3.70415ZM21.6666 5.36356C22.9519 5.16889 24.2014 4.49507 25.1376 3.45445L23.6507 2.11684C23.0121 2.82666 22.1768 3.26348 21.3671 3.38611L21.6666 5.36356ZM1.01697 21.5765C3.67868 23.3537 6.2427 23.7856 9.00084 23.7856V21.7856C6.4907 21.7856 4.35626 21.4013 2.12756 19.9132L1.01697 21.5765Z"
                    fill="black"
                  />
                </svg>
              </a>
              <a href="#" className="icon-youtube cursor-pointer">
                <svg
                  width="27"
                  height="25"
                  viewBox="0 0 27 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.62059 21.2381L3.42448 22.2186H3.42448L3.62059 21.2381ZM23.3803 21.2381L23.5765 22.2186L23.3803 21.2381ZM23.516 3.93165L23.7255 2.95385L23.516 3.93165ZM3.48494 3.93165L3.69447 4.90946L3.48494 3.93165ZM11.1195 8.92833L11.634 8.07083C11.3251 7.88548 10.9403 7.88062 10.6268 8.05813C10.3133 8.23563 10.1195 8.56806 10.1195 8.92833H11.1195ZM11.1195 16.0712H10.1195C10.1195 16.4315 10.3133 16.7639 10.6268 16.9414C10.9403 17.1189 11.3251 17.114 11.634 16.9287L11.1195 16.0712ZM17.0719 12.4998L17.5864 13.3572C17.8876 13.1765 18.0719 12.851 18.0719 12.4998C18.0719 12.1485 17.8876 11.823 17.5864 11.6423L17.0719 12.4998ZM0.595703 6.26861V18.7681H2.5957V6.26861H0.595703ZM26.4052 18.7681V6.26861H24.4052V18.7681H26.4052ZM3.42448 22.2186C10.0759 23.5489 16.925 23.5489 23.5765 22.2186L23.1842 20.2575C16.7917 21.536 10.2092 21.536 3.81671 20.2575L3.42448 22.2186ZM23.7255 2.95385C16.9853 1.50952 10.0156 1.50952 3.27541 2.95385L3.69447 4.90946C10.1584 3.52432 16.8425 3.52432 23.3065 4.90946L23.7255 2.95385ZM26.4052 6.26861C26.4052 4.67009 25.2886 3.28879 23.7255 2.95385L23.3065 4.90946C23.9474 5.04679 24.4052 5.61317 24.4052 6.26861H26.4052ZM24.4052 18.7681C24.4052 19.4921 23.8942 20.1155 23.1842 20.2575L23.5765 22.2186C25.2213 21.8897 26.4052 20.4455 26.4052 18.7681H24.4052ZM0.595703 18.7681C0.595703 20.4455 1.77967 21.8897 3.42448 22.2186L3.81671 20.2575C3.10675 20.1155 2.5957 19.4921 2.5957 18.7681H0.595703ZM2.5957 6.26861C2.5957 5.61317 3.05357 5.04679 3.69447 4.90946L3.27541 2.95385C1.71237 3.28879 0.595703 4.67009 0.595703 6.26861H2.5957ZM10.1195 8.92833V16.0712H12.1195V8.92833H10.1195ZM11.634 16.9287L17.5864 13.3572L16.5574 11.6423L10.605 15.2137L11.634 16.9287ZM17.5864 11.6423L11.634 8.07083L10.605 9.78582L16.5574 13.3572L17.5864 11.6423Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <img
          className="sm:hidden  flex xl:w-55% lg:w-50% md:w-50% object-fill"
          src="/images/girl.png"
          alt=""
        />
      </div>

      <Footer />
    </>
  );
};

export default withCustomerRoute(About);
