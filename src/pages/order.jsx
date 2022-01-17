import Button from 'components/atoms/buttons/Button';
import RadioButton from 'components/atoms/buttons/RadioButton';
import React from 'react';

function Order() {
  return (
    <div>
      <div className="text-xl tracking-wider uppercase text-secondary font-avenir-reg">
        Your Payment Details
      </div>
      <div>payments going to </div>
      <div className="flex">
        <RadioButton label="PAYPAL" />
        <RadioButton label="Card ending in 0876" />
      </div>
      <div className="flex">
        <div className="">add card</div>
        <Button className="">Save</Button>
      </div>
    </div>
  );
}

export default Order;
