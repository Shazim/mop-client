import React from 'react';
import { ReactComponent as Facebook } from '../../../assets/images/fbIcon.svg';
import { ReactComponent as Twitter } from '../../../assets/images/twitterIcon.svg';
import { ReactComponent as Instagram } from '../../../assets/images/instaIcon.svg';
import { ReactComponent as Youtube } from '../../../assets/images/youtubeIcon.svg';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';

function Footer() {
  const socialIcons = [
    '/images/social/twitter-icon.svg',
    '/images/social/fb-icon.svg',
    '/images/social/insta-icon.svg',
    '/images/social/youtube-icon.svg',
  ];

  return (
    <div>
      {/* Gray section of Footer */}

      <div className="bg-gray">
        <div className="max-screen pl-147 pr-100 flex flex-row pt-75 pb-75">
          <div className="w-1/4">
            <img src="/images/Logo/logo.svg" alt="" />
          </div>
          <div className="w-3/4 flex flex-row">
            <div className="w-1/4 pl-40">
              <div className="text-primary font-bold text-sm tracking uppercase mb-40">
                create a gallery
              </div>
              <div className="footer-links">my gallery</div>
              <div className="footer-links">my exhibitions</div>
              <div className="footer-links">analytics</div>
            </div>
            <div className="w-1/4 pl-40">
              <div className="text-primary font-bold text-sm tracking uppercase mb-40">
                browser
              </div>
              <div className="footer-links">view by exhibition</div>
              <div className="footer-links">View by Artist</div>
              <div className="footer-links">View by Galleries</div>
            </div>
            <div className="w-1/4 pl-40">
              <div className="text-primary font-bold text-sm tracking uppercase mb-40">
                Store
              </div>
              <div className="footer-links">Stockroom</div>
              <div className="footer-links">Orders</div>
              <div className="footer-links">Checkout</div>
            </div>
            <div className="w-1/4 pl-40">
              <div className="text-primary font-bold text-sm tracking uppercase mb-40">
                contact
              </div>
              <div className="footer-links">Get in touch</div>
              <div className="footer-links">About</div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark section of Footer */}
      <div className="bg-secondary">
        <div className="max-screen flex flex-row text-white pl-147 pr-175 pt-38 pb-38">
          <div className="w-1/2">
            <div className="mb-8 text-base font-nunito-semibold font-semibold ">
              &copy; Masters Of Photography 2021
            </div>
            <div className="flex flex-row items-center">
              <div className="mr-45 text-sm font-bold uppercase tracking">
                Privacy Policy
              </div>
              <div className="text-sm font-bold uppercase tracking">
                Terms & Conditions
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-row justify-end items-center">
            {socialIcons.map((item) => (
              <img src={item} alt="" className="w-22 h-22 mr-22" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
