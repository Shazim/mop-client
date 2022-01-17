import Button from 'components/atoms/buttons/Button';
import RadioButton from 'components/atoms/buttons/RadioButton';
import { Package } from 'components/Packages';
import React from 'react';

function ProfileSubscription() {
  return (
    <div>
      <div>current subscription</div>
      <div>
        You currently have the <span>Plus Subscription</span> Package.
      </div>
      <div>
        <Package />
      </div>
      <div>your payment details</div>
      <div>payments going to</div>
      <div className="flex">
        <RadioButton label="Paypal" />
        <RadioButton label="Payoneer" />
        <RadioButton label="Stripe" />
        <RadioButton label="Card ending in 0876" />
      </div>
      <div className="flex">
        <div>aDD CARD</div>
        <Button>save</Button>
      </div>
    </div>
  );
}

export default ProfileSubscription;
