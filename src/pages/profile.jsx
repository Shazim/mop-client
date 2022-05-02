import React from 'react';
import Button from 'components/atoms/buttons/Button';
import RadioButton from 'components/atoms/buttons/RadioButton';

function Profile() {
  return (
    <div>
      <div>
        <div>subscribe to this plan</div>
        <img src="" alt="" />
      </div>
      <div>
        <div>
          <div>Login</div>
          <div>Don’t have an account? Sign Up</div>
          <div>
            <Button className="w-184 mr-18">Login with Facebook</Button>
            <Button className="w-184 mr-18">Login with Instagram</Button>
            <Button className="w-184 mr-18">login with pinterest</Button>
          </div>
          <div>or</div>
          <div>input</div>
          <div>
            <div>input</div>
            <div>input</div>
          </div>
          <Button className="w-184 mr-18">Login</Button>
        </div>
        <div>reusable component</div>
      </div>
      <div>
        <div>You are logged in</div>
        <div>Your Payment Details</div>
        <div>pay for subcription via</div>
        <div>
          <RadioButton
            className="text-sm mt-12"
            // name={title}
            // value={item.name}
            // checked={item.select}
            // onChange={() => setData(title, index, '')}
          />
          <RadioButton
            className="text-sm mt-12"
            // name={title}
            // value={item.name}
            // checked={item.select}
            // onChange={() => setData(title, index, '')}
          />
        </div>
        <div>
          <div>input</div>
          <div>input</div>
          <div>input</div>
        </div>
        <div>checkbox</div>
        <Button></Button>
      </div>
    </div>
  );
}

export default Profile;
