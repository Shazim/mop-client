import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useStore } from '../src/store';
import authRouter from 'routes/auth';
import './index.css';
import SignupModal from 'components/molecules/modals/SignupModal';
import LoginModal from 'components/molecules/modals/LoginModal';
import ForgotPassword from 'components/molecules/modals/ForgotPassword';
import FilterTable from 'components/atoms/tables/FilterTable';
import Table from 'components/atoms/tables/Table';

function App() {
  const { store } = useStore();

  return (
    <>

      <FilterTable />
      <Table />
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
