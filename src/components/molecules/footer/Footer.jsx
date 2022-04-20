import Facebook from 'assets/images/svgs/Facebook';
import Instagram from 'assets/images/svgs/Instagram';
import Twitter from 'assets/images/svgs/Twitter';
import Youtube from 'assets/images/svgs/Youtube';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';

function Footer() {
  const socialIcons = [
    '/images/social/twitter-icon.svg',
    '/images/social/fb-icon.svg',
    '/images/social/insta-icon.svg',
    '/images/social/youtube-icon.svg',
  ];
  const [year, setYear] = useState('');
  useEffect(() => {
    getYear();
  }, []);

  const getYear = () => {
    const y = new Date();
    setYear(y.getFullYear());
  };

  return (
    <div>
      {/* Gray section of Footer */}

      <div className="bg-gray">
        <div className="max-screen pl-147 pr-100 sm:px-23 flex flex-row pt-75 pb-75 sm:flex-col sm:justify-center">
          <div className="w-1/4 sm:w-100% sm:h-32 sm:flex sm:justify-center">
            <img src="/images/Logo/logo.svg" alt="" />
          </div>
          <div className="w-3/4 flex justify-between sm:mb-63 flex-row sm:grid sm:pl-43 sm:grid-cols-2 sm:justify-center sm:items-center sm:flex sm:w-100%">
            <div className="w-auto pl-40 xl:pl-13 lg:pl-0 md:pl-0 md:w-auto sm:w-100% sm:pl-0 sm:mb-30 sm:h-50%">
              <div className="text-primary font-bold sm:text-tiny text-sm tracking uppercase mb-40 sm:mb-14">
                create a gallery
              </div>
              <div className="footer-links">my gallery</div>
              <div className="footer-links">my exhibitions</div>
              <div className="footer-links">analytics</div>
            </div>
            <div className="w-auto pl-40 xl:pl-30 lg:pl-20 md:pl-15 md:w-auto sm:w-100% sm:mb-30 sm:pl-0 sm:h-50%">
              <div className="text-primary font-bold text-sm sm:text-tiny tracking uppercase mb-40 sm:mb-14">
                browser
              </div>
              <div className="footer-links">view by exhibition</div>
              <div className="footer-links">View by Artist</div>
              <div className="footer-links">View by Galleries</div>
            </div>
            <div className="w-auto pl-40 xl:pl-30 lg:pl-20 md:pl-15 md:w-auto sm:w-100% sm:pl-0 sm:h-50%">
              <div className="text-primary font-bold text-sm sm:text-tiny tracking uppercase mb-40 sm:mb-14">
                Store
              </div>
              <div className="footer-links">Stockroom</div>
              <div className="footer-links">Orders</div>
              <div className="footer-links">Checkout</div>
            </div>
            <div className="w-auto pl-40 xl:pl-30 lg:pl-20 md:pl-15 md:w-auto sm:w-100% sm:pl-0 sm:h-50%">
              <div className="text-primary font-bold text-sm sm:text-tiny tracking uppercase mb-40 sm:mb-14">
                contact
              </div>
              <div className="footer-links">Get in touch</div>
              <div className="footer-links">About</div>
            </div>
          </div>
          <div className="hidden sm:pl-43 sm:pr-23 sm:flex w-100% sm:justify-between social-links sm:block">
            <Twitter className="w-22 h-22 mr-22 fill-primary link" />
            <Facebook className="w-22 h-22 mr-22 link stroke-primary" />
            <Instagram className="w-22 h-22 mr-22 link stroke-primary" />
            <Youtube className="w-22 h-22 mr-22 link fill-primary" />
          </div>
        </div>
      </div>

      {/* Dark section of Footer */}
      <div className="bg-secondary">
        <div className="max-screen sm:px-23  flex flex-row text-white pl-147 pr-175 pt-38 pb-38">
          <div className="w-1/2 sm:w-100% sm:text-center sm:flex sm:flex-col-reverse">
            <div className="mb-8 text-base sm:text-tiny sm:leading-22 font-nunito-semibold font-semibold ">
              &copy; Masters Of Photography {year}
            </div>
            <div className="flex flex-row items-center sm:justify-between sm:mb-17">
              <div className="mr-45 text-sm sm:text-tiny sm:leading-32 font-bold sm:font-reg uppercase tracking link">
                Privacy Policy
              </div>
              <div className="text-sm font-bold uppercase tracking sm:text-tiny sm:font-reg sm:leading-32 link">
                Terms & Conditions
              </div>
            </div>
          </div>
          <div className="w-1/2  sm:hidden flex flex-row justify-end items-center">
            <Twitter className="w-22 h-22 mr-22 link fill-white" />
            <Facebook className="w-22 h-22 mr-22 link stroke-white" />
            <Instagram className="w-22 h-22 mr-22 link stroke-white" />
            <Youtube className="w-22 h-22 mr-22 link fill-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
