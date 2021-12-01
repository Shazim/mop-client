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
function App() {
  const { store } = useStore();
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };
  return (
    <>
      {/* <div>
      <Button className="w-251 h-42" type='outline' color="primary" >LIVE</Button>
      <Button className="w-251 h-42" type='outline' color="primary-dim" >LIVE</Button>
      <Button className="w-251 h-42" type='outline' color="primary-light" >LIVE</Button>
      <Button className="w-251 h-42" color="primary" >LIVE</Button>
      <Button className="w-251 h-42" color="primary-dim" >LIVE</Button>
      <Button className="w-251 h-42" color="primary-light" >LIVE</Button>
      <Button className="w-251 h-42" color="gray" >LIVE</Button>
      <Button className="w-251 h-42" color="gray-dim" >LIVE</Button>
      <Button className="w-251 h-42" color="gray-light" >LIVE</Button>
      <SwitchButton />
      <SearchBar placeholder="search for an artist" transform="uppercase" bgColor='bg-default-dark' />
      <CheckBox value="My Gallery" checked={checked} onChange={handleClick} />
    </div> */}

      <Provider store={store}>
        <Router>
          {/* <Layout> */}
          {authRouter.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              component={item.component}
            />
          ))}
          {/* </Layout> */}
        </Router>
      </Provider>
    </>
  );
}

export default App;
