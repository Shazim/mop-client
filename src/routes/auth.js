import Home from 'pages/home';
import About from 'pages/about';
import Login from 'pages/Login';
import GalleryDetail from 'pages/gallery-detail';
import Gallery from 'pages/gallery';
import CreateGallary from 'pages/create-gallary';
import Pricing from 'pages/pricing';
import OrderDetail from 'pages/order-detail';
import BrowseArtwork from 'pages/browse-artwork';
import StockRoom from 'pages/stock-room';
import GallerySetting from 'pages/gallery-setting';
import ExhibitionRoom from 'pages/exhibition-room';
import Exhibitions from 'pages/exhibitions';
import SinglePhoto from 'pages/single-photo';
import MyProfile from 'pages/my-profile';
import Stocks from 'pages/stocks';
import Checkout from 'pages/checkout';
import Subscribe from 'pages/subscribe';

// List of Routes name using for links and route
export const authRoutes = Object.freeze({
  ROUTE_FORGOT_PASSWORD: '/forgot-password',
  ROUTE_LOGIN: '/login',
  ROUTE_SIGNUP: '/signup',
  ROUTE_HOME: '/',
  ROUTE_ABOUT: '/about',
  ROUTE_CHECKOUT: '/checkout',
  ROUTE_GALLERY_DETAIL: '/gallery-detail',
  ROUTE_GALLERY: '/gallery',
  ROUTE_BROWSE_ARTWORK: '/browse-artwork',
  ROUTE_CREATE_GALLERY: '/create-gallery',
  ROUTE_PRICE: '/price',
  ROUTE_MY_PROFILE: '/my-profile',
  ROUTE_ORDER_DETAIL: '/order-detail',
  ROUTE_STOCK_ROOM: '/stock-room',
  ROUTE_STOCKS: '/stocks',
  ROUTE_GALLERY_SETTING: '/gallery-setting',
  ROUTE_EXHIBITIONS: '/exhibitions',
  ROUTE_EXHIBITION_ROOM: '/exhibition-room',
  ROUTE_SINGLE_PHOTO: '/single-photo',
  ROUTE_LOGOUT: '/logout',
  ROUTE_SUBSCRIBE: '/subscribe',
});
// List of route object which will be rendered under Router component
export default Object.freeze([
  { path: authRoutes.ROUTE_HOME, component: Home },
  { path: authRoutes.ROUTE_CREATE_GALLERY, component: CreateGallary },
  { path: authRoutes.ROUTE_PRICE, component: Pricing },
  { path: authRoutes.ROUTE_GALLERY_DETAIL, component: GalleryDetail },
  { path: authRoutes.ROUTE_GALLERY, component: Gallery },
  { path: authRoutes.ROUTE_ORDER_DETAIL, component: OrderDetail },
  { path: authRoutes.ROUTE_BROWSE_ARTWORK, component: BrowseArtwork },
  { path: authRoutes.ROUTE_CHECKOUT, component: Checkout },
  { path: authRoutes.ROUTE_SUBSCRIBE, component: Subscribe },
  {
    path: authRoutes.ROUTE_EXHIBITIONS,
    component: Exhibitions,
    privateRoute: true,
  },
  {
    path: authRoutes.ROUTE_MY_PROFILE,
    component: MyProfile,
    privateRoute: true,
  },
  {
    path: authRoutes.ROUTE_STOCKS,
    component: Stocks,
    privateRoute: true,
  },
  {
    path: authRoutes.ROUTE_STOCK_ROOM,
    component: StockRoom,
    privateRoute: true,
  },
  {
    path: authRoutes.ROUTE_EXHIBITION_ROOM,
    component: ExhibitionRoom,
    privateRoute: true,
  },
  {
    path: authRoutes.ROUTE_GALLERY_SETTING,
    component: GallerySetting,
    privateRoute: true,
  },
  { path: authRoutes.ROUTE_SINGLE_PHOTO, component: SinglePhoto },
  { path: authRoutes.ROUTE_ABOUT, component: About },
  { path: authRoutes.ROUTE_LOGIN, component: Login },
  { path: authRoutes.ROUTE_SIGNUP, component: Login },
]);
