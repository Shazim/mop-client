// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { getCookie } from 'cookies/Cookies';

// ====================== IMPORTED UTILS ========================
import useUserLogout from 'hooks/useUserLogout';
import { routes } from 'routes';
import { CHECK_MODEL } from 'store/actions/actionTypes';

const SideBar = () => {
  const { isCheck } = useSelector((state) => state.modals);
  const handleLogout = () => {
    dispatch({ type: CHECK_MODEL, payload: !isCheck });
  };
  const user = getCookie('user') && JSON.parse(getCookie('user'));
  const { user_type, stripe_id } = user?.user || {};
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const customerArr = [
    {
      key: 'my account',
      item: [
        {
          redIcon: '/images/sidebar/order_red.svg',
          icon: '/images/sidebar/order.svg',
          name: 'my orders',
          link: routes.ROUTE_CUSTOMER_ORDER,
        },
        {
          redIcon: '/images/sidebar/profile_red.svg',
          icon: '/images/sidebar/profile.svg',
          name: 'My Profile',
          link: routes.ROUTE_CUSTOMER_PROFILE,
        },
        {
          redIcon: '/images/sidebar/settings_red.svg',
          icon: '/images/sidebar/settings.svg',
          name: 'Payment Options',
          link: routes.ROUTE_CUSTOMER_PAYMENT,
        },
        {
          redIcon: '/images/sidebar/price_red.svg',
          icon: '/images/sidebar/price.svg',
          name: 'Logout',
          link: '/',
        },
      ],
    },
  ];
  const obj = [
    {
      key: 'my gallery',
      item: [
        {
          redIcon: '/images/sidebar/gallery_red.svg',
          icon: '/images/sidebar/gallery.svg',
          link: routes.ROUTE_GALLERY_SETTING,
          name: 'gallery',
        },
        {
          redIcon: '/images/sidebar/stockroom_red.svg',
          icon: '/images/sidebar/stockroom.svg',
          link: routes.ROUTE_STOCKROOM,
          link2: routes.ROUTE_SINGLE_STOCK,
          name: 'Stockroom',
        },
        {
          icon: '/images/sidebar/exhibitionroom.svg',
          redIcon: '/images/sidebar/exhibitionroom_red.svg',
          name: 'Exhibition Rooms',
          link: `${routes.ROUTE_EXHIBITION_ROOM}/live`,
          link2: routes.ROUTE_EXHIBITION_ROOM,
        },

        {
          redIcon: '/images/sidebar/analytics_red.svg',
          icon: '/images/sidebar/analytics.svg',

          name: 'Analytics',
          link: routes.ROUTE_ANALYTICS,
        },
        {
          redIcon: '/images/sidebar/settings_red.svg',
          icon: '/images/sidebar/settings.svg',
          name: 'settings',
          link: routes.ROUTE_SETTINGS,
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
          link: routes.ROUTE_PRICE_PRODUCTS,
          link2: routes.ROUTE_CREATE_PRICE_SHEET,
          link3: '/price-sheet',
          link4: '/edit-price-sheet',
        },

        {
          redIcon: '/images/sidebar/order_red.svg',
          icon: '/images/sidebar/order.svg',
          name: 'orders',
          link: routes.ROUTE_ORDERS,
        },
        {
          redIcon: '/images/sidebar/profile_red.svg',
          icon: '/images/sidebar/profile.svg',
          name: 'customers',
          link: routes.ROUTE_CUSTOMER,
        },
        {
          redIcon: '/images/sidebar/tax_red.svg',
          icon: '/images/sidebar/tax.svg',
          name: 'tax rates',
          link: routes.ROUTE_TAX_RATES,
        },
        {
          redIcon: '/images/sidebar/coupon_red.svg',
          icon: '/images/sidebar/coupon.svg',
          name: 'Coupons and offers',
          link: routes.ROUTE_COUPONS,
        },
      ],
    },
    // {
    //   key: 'get started',
    //   item: [
    //     {
    //       redIcon: '/images/sidebar/step_by_red.svg',
    //       icon: '/images/sidebar/step_by.svg',
    //       name: 'Step by Step',
    //       link: routes.ROUTE_HOME,
    //     },
    //   ],
    // },
    {
      key: 'account',
      item: [
        {
          redIcon: '/images/sidebar/profile_red.svg',
          icon: '/images/sidebar/profile.svg',
          name: 'My Profile',
          link: routes.ROUTE_ARTIST_PROFILE,
        },
        // {
        //   redIcon: '/images/sidebar/subscription_red.svg',
        //   icon: '/images/sidebar/subscription.svg',
        //   name: 'subscription',
        //   link: '/profile-subscription',
        // },
        {
          redIcon: '/images/sidebar/price_red.svg',
          icon: '/images/sidebar/price.svg',
          name: 'Logout',
          link: '/',
        },
      ],
    },
  ];

  const links = [routes.ROUTE_CREATE_STOCKROOM, '/exhibition-room'];

  return (
    <div className="h-100% sm:w-100% bg-gray-lighter pt-40 pr-19 overflow-auto pb-120">
      {!links.includes(window.location.pathname) ? (
        <>
          {user_type === 'artist'
            ? obj?.map((item, index) => {
                return (
                  <div>
                    <div className="font-bold text-sm text-secondary tracking uppercase mt-15 mb-18 ml-37 xl:ml-35 lg:ml-30 md:ml-26">
                      {item.key}
                    </div>
                    <>
                      {item.item.map((subItem, subIndex) => (
                        <>
                          {subItem.name == 'Logout' ? (
                            <span
                              className={`flex w-100% h-55  sm:bg-gray-lighter rounded-r-lg pl-62 xl:pl-50 lg:pl-40 md:pl-35 link ${
                                subItem.link == location.pathname
                                  ? 'bg-secondary-dim'
                                  : ''
                              }`}
                              onClick={handleLogout}
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
                          ) : (
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
                                    subItem.link == location.pathname ||
                                    location.pathname.includes(
                                      subItem?.link2
                                    ) ||
                                    location.pathname.includes(
                                      subItem?.link3
                                    ) ||
                                    location.pathname.includes(subItem?.link4)
                                      ? subItem.redIcon
                                      : subItem.icon
                                  }
                                />
                                <div
                                  className={`my-auto font-nunito-semibold capitalize text-base leading-5 ml-28 ${
                                    subItem.link == location.pathname ||
                                    location.pathname.includes(
                                      subItem?.link2
                                    ) ||
                                    location.pathname.includes(
                                      subItem?.link3
                                    ) ||
                                    location.pathname.includes(subItem?.link4)
                                      ? 'text-primary'
                                      : 'text-secondary'
                                  } `}
                                >
                                  {subItem.name}
                                </div>
                              </span>
                            </Link>
                          )}
                        </>
                      ))}
                    </>
                  </div>
                );
              })
            : customerArr.map((item, index) => {
                return (
                  <div>
                    <div className="font-bold text-sm text-secondary tracking uppercase mt-15 mb-18 ml-37 xl:ml-35 lg:ml-30 md:ml-26">
                      {item.key}
                    </div>
                    <>
                      {item.item.map((subItem, subIndex) => (
                        <>
                          {subItem.name == 'Logout' ? (
                            <span
                              className={`flex w-100% h-55  sm:bg-gray-lighter rounded-r-lg pl-62 xl:pl-50 lg:pl-40 md:pl-35 link ${
                                subItem.link == location.pathname
                                  ? 'bg-secondary-dim'
                                  : ''
                              }`}
                              onClick={handleLogout}
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
                          ) : (
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
                                    subItem.link == location.pathname ||
                                    location.pathname.includes(
                                      subItem?.link2
                                    ) ||
                                    location.pathname.includes(
                                      subItem?.link3
                                    ) ||
                                    location.pathname.includes(subItem?.link4)
                                      ? subItem.redIcon
                                      : subItem.icon
                                  }
                                />
                                <div
                                  className={`my-auto font-nunito-semibold capitalize text-base leading-5 ml-28 ${
                                    subItem.link == location.pathname ||
                                    location.pathname.includes(
                                      subItem?.link2
                                    ) ||
                                    location.pathname.includes(
                                      subItem?.link3
                                    ) ||
                                    location.pathname.includes(subItem?.link4)
                                      ? 'text-primary'
                                      : 'text-secondary'
                                  } `}
                                >
                                  {subItem.name}
                                </div>
                              </span>
                            </Link>
                          )}
                        </>
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
              src={window.location.origin + '/images/sidebar/leftArrow.svg'}
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default SideBar;
