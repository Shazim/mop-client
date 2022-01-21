import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useStore } from '../src/store';
import authRouter from 'routes/auth';
import './index.css';
import SignupModal from 'components/molecules/modals/SignupModal';
import LoginModal from 'components/molecules/modals/LoginModal';
import ForgotPassword from 'components/molecules/modals/ForgotPassword';
import Tables from 'components/molecules/tables/Tables';
import RangeSlider from 'components/atoms/rangeslider/RangeSlider';

function App() {
  const { store } = useStore();

  return (
    <>
      <Tables filter={true} />
      <RangeSlider />
      {/* <Table /> */}
      {/* <Provider store={store}>
        <Router>
          <Switch>
            {authRouter.map((item) => (
              <Route
                exact
                key={item.path}
                path={item.path}
                component={item.component}
              />
            ))}
          </Switch>
        </Router>
      </Provider> */}

    </>
  );
}

export default App;
