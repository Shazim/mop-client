import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

const obj = [
  {
    key: 'my gallery',
    item: [
      {
        icon: '/images/sidebar/exhibitionroom.svg',
        redIcon: '/images/sidebar/exhibitionroom_red.svg',
        name: 'Exhibition Rooms',
        link: '/exhibition',
      },
      {
        redIcon: '/images/sidebar/stockroom_red.svg',
        icon: '/images/sidebar/stockroom.svg',
        name: 'Stockrooms',
        link: '/stock-room',
      },
      {
        redIcon: '/images/sidebar/gallery_red.svg',
        icon: '/images/sidebar/gallery.svg',
        link: '/gallery',
        name: 'gallery',
      },
      {
        redIcon: '/images/sidebar/analytics_red.svg',
        icon: '/images/sidebar/analytics.svg',
        link: '/Analytic',
        name: 'Analytic',
      },
      {
        redIcon: '/images/sidebar/settings_red.svg',
        icon: '/images/sidebar/settings.svg',
        name: 'settings',
        link: '/settings',
      },
    ],
  },
  {
    key: 'store',
    item: [
      {
        redIcon: '/images/sidebar/price_red.svg',
        icon: '/images/sidebar/price.svg',
        name: 'pricing and products',
        link: '/coupon',
      },
      {
        redIcon: '/images/sidebar/order_red.svg',
        icon: '/images/sidebar/order.svg',
        name: 'orders',
        link: '/orders',
      },
      {
        redIcon: '/images/sidebar/profile_red.svg',
        icon: '/images/sidebar/profile.svg',
        name: 'customers',
        link: '/customers',
      },
      {
        redIcon: '/images/sidebar/tax_red.svg',
        icon: '/images/sidebar/tax.svg',
        name: 'tax rates',
        link: '/tax',
      },
      {
        redIcon: '/images/sidebar/coupon_red.svg',
        icon: '/images/sidebar/coupon.svg',
        name: 'Coupons and offers',
        link: '/coupon',
      },
    ],
  },
  {
    key: 'get started',
    item: [
      {
        redIcon: '/images/sidebar/price_red.svg',
        icon: '/images/sidebar/price.svg',
        name: 'Step by Step',
        link: '/coupon',
      },
    ],
  },
  {
    key: 'account',
    item: [
      {
        redIcon: '/images/sidebar/price_red.svg',
        icon: '/images/sidebar/price.svg',
        name: 'My Profile',
        link: '/coupon',
      },
      {
        redIcon: '/images/sidebar/price_red.svg',
        icon: '/images/sidebar/price.svg',
        name: 'subscription',
        link: '/coupon',
      },
      {
        redIcon: '/images/sidebar/price_red.svg',
        icon: '/images/sidebar/price.svg',
        name: 'Logout',
        link: '/coupon',
      },
    ],
  },
];

function SideBar({ routBack = false }) {
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="h-100% sm:w-100% bg-gray-lighter pt-40 pr-19 overflow-auto ">
      {!routBack ? (
        <>
          {obj.map((item, index) => {
            return (
              <div>
                <div className="font-bold text-sm text-secondary tracking uppercase mt-15 mb-18 ml-37 xl:ml-35 lg:ml-30 md:ml-26">
                  {item.key}
                </div>
                <>
                  {item.item.map((subItem, subIndex) => (
                    <Link to={`${subItem.link}`}>
                      <span
                        className={`flex w-100% h-55  sm:bg-gray-lighter rounded-r-lg pl-62 xl:pl-50 lg:pl-40 md:pl-35 link ${
                          subItem.link == location.pathname
                            ? 'bg-secondary-dim'
                            : ''
                        }`}
                      >
                        <img
                          className="w-19 h-19 my-auto text-primary"
                          src={
                            subItem.link == location.pathname
                              ? subItem.redIcon
                              : subItem.icon
                          }
                        />
                        <div
                          className={`my-auto font-nunito-semibold capitalize text-base leading-5 ml-28 ${
                            subItem.link == location.pathname
                              ? 'text-primary'
                              : 'text-secondary'
                          } `}
                        >
                          {subItem.name}
                        </div>
                      </span>
                    </Link>
                  ))}
                </>
              </div>
            );
          })}
        </>
      ) : (
        <div className="link" onClick={() => history.goBack()}>
          <span className="flex h-55 bg-secondary-dim justify-between rounded-r-lg pl-37 link pr-15">
            <div
              className={`my-auto font-bold uppercase text-base leading-5 text-secondary `}
            >
              Back
            </div>
            <img
              className="w-14 h-13 my-auto text-primary"
              src="images/sidebar/leftArrow.svg"
            />
          </span>
        </div>
      )}
    </div>
  );
}

export default SideBar;
