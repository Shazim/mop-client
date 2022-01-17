import Home from 'pages/home';
import About from 'pages/about';
import Login from 'pages/Login';
import GalleryDetail from 'pages/gallery-detail';
import Gallery from 'pages/gallery';
import GallerySetting from 'pages/gallery-setting';
import CreateGallary from 'pages/create-gallary';
import Pricing from 'pages/pricing';
import Subscription from 'pages/subscription';
import ProfileSubscription from 'pages/profile-subscription';
import Checkout from 'pages/checkout';
import Order from 'pages/order';
import Profile from 'pages/profile';
import Settings from 'pages/settings';
import SinglePhoto from 'pages/single-photo';

// List of Routes name using for links and route
export const authRoutes = Object.freeze({
  ROUTE_FORGOT_PASSWORD: '/forgot-password',
  ROUTE_LOGIN: '/login',
  ROUTE_SIGNUP: '/signup',
  ROUTE_HOME: '/',
  ROUTE_ABOUT: '/about',
  ROUTE_GALLERY_DETAIL: '/gallery-detail',
  ROUTE_GALLERY_SETTING: '/gallery-setting',
  ROUTE_ORDER: '/order',
  ROUTE_GALLERY: '/gallery',
  ROUTE_CREATE_GALLERY: '/create-gallery',
  ROUTE_PROFILE_SUBSCRIPTION: '/profile-subscription',
  ROUTE_PRICE: '/price',
  ROUTE_SINGLE_PHOTO: '/single-photo',
  ROUTE_PROFILE: '/profile',
  ROUTE_SETTINGS: '/settings',
  ROUTE_SUBSCRIPTION: '/subscription',
  ROUTE_CHECKOUT: '/checkout',
});

// List of route object which will be rendered under Router component
export default Object.freeze([
  { path: authRoutes.ROUTE_HOME, component: Home },
  { path: authRoutes.ROUTE_CREATE_GALLERY, component: CreateGallary },
  { path: authRoutes.ROUTE_CHECKOUT, component: Checkout },
  { path: authRoutes.ROUTE_PRICE, component: Pricing },
  { path: authRoutes.ROUTE_GALLERY_SETTING, component: GallerySetting },
  { path: authRoutes.ROUTE_SUBSCRIPTION, component: Subscription },
  { path: authRoutes.ROUTE_PROFILE, component: Profile },
  {
    path: authRoutes.ROUTE_PROFILE_SUBSCRIPTION,
    component: ProfileSubscription,
  },
  {
    path: authRoutes.ROUTE_SINGLE_PHOTO,
    component: SinglePhoto,
  },
  { path: authRoutes.ROUTE_ORDER, component: Order },
  { path: authRoutes.ROUTE_GALLERY_DETAIL, component: GalleryDetail },
  { path: authRoutes.ROUTE_GALLERY, component: Gallery },
  { path: authRoutes.ROUTE_ABOUT, component: About },
  { path: authRoutes.ROUTE_SETTINGS, component: Settings },
  { path: authRoutes.ROUTE_LOGIN, component: Login },
]);
