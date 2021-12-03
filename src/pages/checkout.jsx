import Button from 'components/atoms/buttons/Button';
import Cart from 'components/Cart/Cart';
import React from 'react';

function Checkout() {
  return (
    <div>
      <div>
        <div>Your Details</div>
        <div>
          <Button>Login</Button>
          <Button>Create an account</Button>
          <Button>continue as guest</Button>
        </div>
        <div>
          <div>input</div>
          <div>input</div>
        </div>
        <div>input</div>
        <div>Address</div>
        <div>input</div>
        <div>input</div>
        <div>input</div>
        <div>
          <div>input</div>
          <div>input</div>
        </div>
        <div>
          <div>
            <div>Shipping</div>
            <div>delivered from 24-48 hours</div>
          </div>
          <div>
            <div>estimated delivery: 2nd June 2021</div>
            <div>£20.00</div>
          </div>
        </div>
        <div>
          <div>your payment details</div>
          <div>payments going to </div>
          <div>
            <div>radio</div>
            <div>radio</div>
          </div>
          <div>Add Card</div>
          <div>checkbox</div>
        </div>
      </div>
      <Cart />
    </div>
  );
}

export default Checkout;
