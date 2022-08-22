import Home from 'pages/home';
import About from 'pages/about';
import Login from 'pages/Login';
import GalleryDetail from 'pages/gallery-detail';
import ArtistDetail from 'pages/artist-detail';
import Gallery from 'pages/gallery';
import CreateGallary from 'pages/create-gallary';
import Pricing from 'pages/pricing';
import OrderDetail from 'pages/Admin/order-detail';
import BrowseArtwork from 'pages/browse-artwork';
import StockRoom from 'pages/Admin/stock-room';
import GallerySetting from 'pages/Admin/gallery-setting';
import ExhibitionRoom from 'pages/Admin/exhibition-room';
import Exhibitions from 'pages/Admin/exhibitions';
import SinglePhoto from 'pages/single-photo';
import MyProfile from 'pages/Admin/my-profile';
import Stocks from 'pages/Admin/stocks';
import Checkout from 'pages/checkout';
import ProfileSubscription from 'pages/Admin/profile-subscription';
import SubscribeLogin from 'pages/subscribe-login';
import SubscribeSignup from 'pages/subscribe-signup';
import SubscribeSigned from 'pages/subscribe-signed';
import SubscribeLogged from 'pages/subscribe-logged';
import Settings from 'pages/Admin/settings';
import OrderSettings from 'pages/Admin/orders-settings';
import Customers from 'pages/Admin/customers';
import CouponsOffers from 'pages/Admin/coupons-offers';
import Orders from 'pages/Admin/orders';
import PricingSheet from 'pages/Admin/create-price-sheet';
import TaxRates from 'pages/Admin/tax-rates';
import SlickSlider from 'pages/slick-slider';
import PricingSheetDetails from 'pages/Admin/price-sheet-detail';
import PriceSheet from 'pages/Admin/price-sheets';
import editPriceSheet from 'pages/Admin/edit-price-sheet';
import PageNotFound from 'pages/PageNotFound';
// List of Routes name using for links and route
export const routes = Object.freeze({
  ROUTE_FORGOT_PASSWORD: '/forgot-password',
  ROUTE_LOGIN: '/login',
  ROUTE_SIGNUP: '/signup',
  ROUTE_HOME: '/',
  ROUTE_ABOUT: '/about',
  ROUTE_CHECKOUT: '/cart',
  ROUTE_GALLERY_DETAIL: '/gallery-detail',
  ROUTE_ARTIST_DETAIL: '/artist-detail',
  ROUTE_GALLERY: '/galleries',
  ROUTE_EXHIBITIONS: '/exhibitions',
  ROUTE_ARTISTS: '/artists',
  ROUTE_BROWSE_ARTWORK: '/artworks',
  ROUTE_CREATE_GALLERY: '/create-gallery',
  ROUTE_STORE: '/store',
  ROUTE_MY_PROFILE: '/my-profile',
  ROUTE_ORDER_DETAIL: '/order-detail',
  ROUTE_STOCK_ROOM: '/stock-room',
  ROUTE_STOCKS: '/stocks',
  ROUTE_GALLERY_SETTING: '/gallery-setting',
  ROUTE_EXHIBITION_ROOM: '/exhibition-rooms',
  ROUTE_SINGLE_PHOTO: '/single-photo',
  ROUTE_LOGOUT: '/logout',
  ROUTE_PROFILE_SUBSCRIPTION: '/profile-subscription',
  ROUTE_SETTINGS: '/settings',
  ROUTE_SUBSCRIBE_LOGIN: '/subscribe-login',
  ROUTE_SUBSCRIBE_SIGNUP: '/subscribe-signup',
  ROUTE_SUBSCRIBE_LOGGED: '/subscribe-logged',
  ROUTE_SUBSCRIBE_SIGNED: '/subscribe-signed',
  ROUTE_ORDER_SETTINGS: '/order-settings',
  ROUTE_CUSTOMER: '/customers',
  ROUTE_COUPONS: '/coupons',
  ROUTE_ORDERS: '/orders',
  ROUTE_CREATE_PRICE_SHEET: '/create-price-sheet',
  ROUTE_TAX_RATES: '/tax-rates',
  ROUTE_SLICK_SLIDER: '/exhibition-demo/:id',
  ROUTE_PRICING_SHEET_DETAILS: '/price-sheet/:id',
  ROUTE_PRICE_SHEETS: '/price-sheets',
  ROUTE_EDIT_PRICE_SHEET: '/edit-price-sheet/:id',
  ROUTE_PAGE_NOT_FOUND: '/*',
});
// List of route object which will be rendered under Router component
export default Object.freeze([
  { path: routes.ROUTE_HOME, component: Home },
  { path: routes.ROUTE_CREATE_GALLERY, component: CreateGallary },
  { path: routes.ROUTE_STORE, component: Pricing },
  { path: routes.ROUTE_GALLERY_DETAIL, component: GalleryDetail },
  { path: routes.ROUTE_ARTIST_DETAIL, component: ArtistDetail },
  { path: routes.ROUTE_GALLERY, component: Gallery },
  { path: routes.ROUTE_EXHIBITIONS, component: Gallery },
  { path: routes.ROUTE_ARTISTS, component: Gallery },
  {
    path: routes.ROUTE_ORDER_DETAIL,
    component: OrderDetail,
    privateRoute: true,
  },
  { path: routes.ROUTE_BROWSE_ARTWORK, component: BrowseArtwork },
  { path: routes.ROUTE_CHECKOUT, component: Checkout },
  { path: routes.ROUTE_COUPONS, component: CouponsOffers, privateRoute: true },
  { path: routes.ROUTE_ORDERS, component: Orders, privateRoute: true },
  {
    path: routes.ROUTE_CREATE_PRICE_SHEET,
    component: PricingSheet,
    privateRoute: true,
  },

  {
    path: routes.ROUTE_PRICING_SHEET_DETAILS,
    component: PricingSheetDetails,
    privateRoute: true,
  },
  {
    path: routes.ROUTE_EDIT_PRICE_SHEET,
    component: editPriceSheet,
    privateRoute: true,
  },
  {
    path: routes.ROUTE_PRICE_SHEETS,
    component: PriceSheet,
    privateRoute: true,
  },
  { path: routes.ROUTE_TAX_RATES, component: TaxRates, privateRoute: true },

  { path: routes.ROUTE_CUSTOMER, component: Customers, privateRoute: true },
  { path: routes.ROUTE_SUBSCRIBE_LOGIN, component: SubscribeLogin },
  { path: routes.ROUTE_SUBSCRIBE_SIGNUP, component: SubscribeSignup },
  {
    path: routes.ROUTE_SLICK_SLIDER,
    component: SlickSlider,
  },

  {
    path: routes.ROUTE_SUBSCRIBE_SIGNED,
    component: SubscribeSigned,
    privateRoute: true,
  },
  {
    path: routes.ROUTE_SUBSCRIBE_LOGGED,
    component: SubscribeLogged,
    privateRoute: true,
  },
  { path: routes.ROUTE_SETTINGS, component: Settings, privateRoute: true },
  {
    path: routes.ROUTE_ORDER_SETTINGS,
    component: OrderSettings,
    privateRoute: true,
  },
  {
    path: routes.ROUTE_PROFILE_SUBSCRIPTION,
    component: ProfileSubscription,
    privateRoute: true,
  },
  // {
  //   path: routes.ROUTE_EXHIBITIONS,
  //   component: Exhibitions,
  //   privateRoute: true,
  // },
  {
    path: routes.ROUTE_MY_PROFILE,
    component: MyProfile,
    privateRoute: true,
  },
  {
    path: routes.ROUTE_STOCKS,
    component: Stocks,
    privateRoute: true,
  },
  {
    path: routes.ROUTE_STOCK_ROOM,
    component: StockRoom,
    privateRoute: true,
  },
  {
    path: routes.ROUTE_EXHIBITION_ROOM,
    component: ExhibitionRoom,
    privateRoute: true,
  },
  {
    path: routes.ROUTE_GALLERY_SETTING,
    component: GallerySetting,
    privateRoute: true,
  },
  { path: routes.ROUTE_SINGLE_PHOTO, component: SinglePhoto },
  { path: routes.ROUTE_ABOUT, component: About },
  { path: routes.ROUTE_LOGIN, component: Login },
  { path: routes.ROUTE_SIGNUP, component: Login },
  {
    path: routes.ROUTE_PAGE_NOT_FOUND,
    component: PageNotFound,
  },
]);
