import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useStore } from '../src/store';
import authRouter from 'routes/auth';
import './index.css';

function App() {
  const { store } = useStore();

  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

export default App;
