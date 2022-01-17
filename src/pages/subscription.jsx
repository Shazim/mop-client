import React from 'react';
import Button from 'components/atoms/buttons/Button';
import { TitleBar } from 'components/Menu';
import { Package } from 'components/Packages';
import { TextField } from 'components/atoms/form';
import Footer from 'components/molecules/footer/Footer';
import RadioButton from 'components/atoms/buttons/RadioButton';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import { LoggedIn, Login } from 'components/Profile';

function Subscription() {
  let login = 2;

  const renderSwitch = () => {
    switch (login) {
      case 0:
        return <Login />;
      case 1:
        return (
          <Login title="SIGN UP" description="Already have an account? Login" />
        );
      case 2:
        return <LoggedIn />;
      case 3:
        return <LoggedIn title="You have signed up" />;
    }
  };

  return (
    <div>
      <TitleBar title="Subscribe to this plan" />
      {renderSwitch()}
      <Footer />
    </div>
  );
}

export default Subscription;
