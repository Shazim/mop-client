import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { useStore } from "../src/store";
import authRouter from "routes/auth";
import './index.css'
import Layout from "components/common/Layout";
import SearchBar from "components/app/searchbar/SearchBar";
import Button from "components/app/buttons/Button";
import SwitchButton from "components/atoms/switchbutton/SwitchButton";
import RadioButton from "components/atoms/radiobutton/RadioButton";
import RadioGroupButton from "components/atoms/radiobutton/RadioGroupButton";
import CheckBox from "components/atoms/checkbox/CheckBox";
function App() {
  const { store } = useStore();
  return (
    <div>
      <Button className="w-251 h-42" type="outlined" color='primary-light'>Live</Button>
      <SwitchButton />
      <RadioGroupButton />
      <CheckBox text="Female" />
    </div>


    // <Provider store={store}>
    //   <Router>
    //     <Layout>
    //       {authRouter.map((item) => (
    //         <Route
    //           key={item.path}
    //           path={item.path}
    //           component={item.component}
    //         />
    //       ))}
    //     </Layout>
    //   </Router>
    // </Provider>
  );
}

export default App;
