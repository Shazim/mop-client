import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useStore } from '../src/store';
import authRouter from 'routes/auth';
import './index.css';
import Layout from 'components/common/Layout';
import SearchBar from 'components/atoms/searchbar/SearchBar';
import Button from 'components/atoms/buttons/Button';
import SwitchButton from 'components/atoms/buttons/SwitchButton';
import RadioButton from 'components/atoms/buttons/RadioButton';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import { useState } from 'react';
import VideoCard from 'components/atoms/cards/VideoCard';
function App() {
  const { store } = useStore();
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };
  return (
    <>
      {/* <div>
        <Button className="w-251 h-42" type="outline" color="primary">
          BROWSE
        </Button>
        <Button className="w-251 h-42" type="outline" color="primary-dim">
          BROWSE
        </Button>
        <Button className="w-251 h-42" type="outline" color="primary-light">
          BROWSE
        </Button>
        <Button className="w-251 h-42" color="primary">
          LIVE
        </Button>
        <Button className="w-251 h-42" color="primary-dim">
          LIVE
        </Button>
        <Button className="w-251 h-42" color="primary-light">
          LIVE
        </Button>
        <Button className="w-251 h-42" color="gray">
          DRAFTS
        </Button>
        <Button className="w-251 h-42" color="gray-dim">
          DRAFTS
        </Button>
        <Button className="w-251 h-42" color="gray-light">
          DRAFTS
        </Button>

        <SwitchButton />
        <SearchBar
          placeholder="search for an artist"
          transform="uppercase"
          bgColor="bg-default-dark"
        />
        <CheckBox value="My Gallery" checked={checked} onChange={handleClick} />
      </div> */}

      <VideoCard />

      {/* <Provider store={store}>
        <Router>
          {authRouter.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              component={item.component}
            />
          ))}
     
        </Router>
      </Provider> */}
    </>
  );
}

export default App;
