import Home from 'pages/home';
import About from 'pages/about';
import Login from 'pages/Login';
import GalleryDetail from 'pages/gallary-detail';

// List of Routes name using for links and route
export const authRoutes = Object.freeze({
  ROUTE_FORGOT_PASSWORD: '/forgot-password',
  ROUTE_LOGIN: '/login',
  ROUTE_SIGNUP: '/signup',
  ROUTE_HOME: '/',
  ROUTE_ABOUT: '/about',
  ROUTE_GALLERY_DETAIL: '/gallery-detail',
});

// List of route object which will be rendered under Router component
export default Object.freeze([
  { path: authRoutes.ROUTE_HOME, component: Home },
  { path: authRoutes.ROUTE_GALLERY_DETAIL, component: GalleryDetail },
  { path: authRoutes.ROUTE_ABOUT, component: About },
  { path: authRoutes.ROUTE_LOGIN, component: Login },
  { path: authRoutes.ROUTE_SIGNUP, component: Login },
]);
