// ====================== IMPORTED LIBRARIES ========================
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// ====================== IMPORTED COMPONENTS ========================
import SignupModal from 'components/molecules/modals/SignupModal';
import LoginModal from 'components/molecules/modals/LoginModal';
import ForgotPassword from 'components/molecules/modals/ForgotPassword';
import PrivateRoute from 'routes/PrivateRoute';
import { useStore } from '../src/store';
import router from 'routes';
import './index.css';

export const LoginModalContext = createContext();
function App() {
  const { store } = useStore();

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isForgotOpen, setIsForgotOpen] = useState(false);



  const handleLoginToggle = () => setIsLoginOpen(!isLoginOpen);
  const handleSignupToggle = () => setIsSignupOpen(!isSignupOpen);
  const handleForgotToggle = () => setIsForgotOpen(!isForgotOpen);

  const scrollOff = () => {
    isLoginOpen || isSignupOpen || isForgotOpen
      ? (window.document.body.style.overflow = 'hidden')
      : (window.document.body.style.overflow = 'scroll');
  };

  useEffect(() => {
    scrollOff()
  }, [isLoginOpen, isSignupOpen, isForgotOpen]);


  return (
    <Provider store={store}>
      <LoginModalContext.Provider value={{ handleLoginToggle, handleSignupToggle, handleForgotToggle }} >
        <ToastContainer />
        <Router>
          <Switch>
            {router.map((item) => {
              if (item.privateRoute) {
                return (
                  <PrivateRoute
                    key={item.path}
                    path={item.path}
                    component={item.component}
                    exact
                    privateRoute={item.privateRoute}
                  />
                );
              } else {
                return (
                  <Route
                    exact
                    key={item.path}
                    path={item.path}
                    component={item.component}
                  />
                );
              }
            })}
          </Switch>
          <LoginModal
            isOpen={isLoginOpen}
          />
          <SignupModal
            isOpen={isSignupOpen}
          />
          <ForgotPassword
            isOpen={isForgotOpen}
          />
        </Router>
      </LoginModalContext.Provider>
    </Provider>
  );
}

export default App;
