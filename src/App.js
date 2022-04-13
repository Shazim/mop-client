import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useStore } from '../src/store';
import authRouter from 'routes/auth';
import './index.css';
import SignupModal from 'components/molecules/modals/SignupModal';
import LoginModal from 'components/molecules/modals/LoginModal';
import ForgotPassword from 'components/molecules/modals/ForgotPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from 'routes/PrivateRoute';

function App() {
  const { store } = useStore();

  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Switch>
          {authRouter.map((item) => {
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
      </Router>
      <LoginModal
      // isOpen={signIn}
      // openHandler={setSignIn}
      // signUpHandler={setSignUp}
      // forgotHandler={setForgot}
      />
      <SignupModal
      // isOpen={signUp}
      // openHandler={setSignUp}
      // signInHandler={setSignIn}
      // forgotHandler={setForgot}
      />
      <ForgotPassword
      // isOpen={forgot}
      // openHandler={setForgot}
      // signInHandler={setSignIn}
      // signUpHandler={setSignUp}
      />
    </Provider>
  );
}

export default App;
