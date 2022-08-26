// ====================== IMPORTED LIBRARIES ========================
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
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

function App() {
  const { store } = useStore();

  return (
    <Provider store={store}>
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
        <LoginModal />
        <SignupModal />
        <ForgotPassword />
      </Router>
    </Provider>
  );
}

export default App;
