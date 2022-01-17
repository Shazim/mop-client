import Button from 'components/atoms/buttons/Button';
import RadioButton from 'components/atoms/buttons/RadioButton';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import { TextField } from 'components/atoms/form';
import Cart from 'components/Cart/Cart';
import TitleBar from 'components/Menu/TitleBar';
import Header from 'components/molecules/header/Header';
import React from 'react';

function Checkout() {
  return (
    <div className="bg-backgroundColor ">
      <Header />
      <TitleBar />

      <div className="pt-50 pb-182 max-screen flex justify-between">
        <div className="w-70%">
          <div className="text-secondary tracking-wider uppercase text-lg  font-avenir-reg font-medium pb-33">
            Your Details
          </div>
          <div className="pb-24">
            <Button>Login</Button>
            <Button>Create an account</Button>
            <Button>continue as guest</Button>
          </div>
          <div className="pb-35 border-b border-border">
            <div className="flex mb-10">
              <div className="w-30% mr-30">
                <TextField mb="9" label="First Name" />
              </div>
              <div className="w-30%">
                <TextField mb="9" label="Last Name" />
              </div>
            </div>
            <div className="w-30%">
              <TextField mb="9" label="Phone Number" />
            </div>
          </div>
          <div className="text-secondary mt-30 text-lg font-avenir-reg uppercase tracking-wider font pb-18">
            Address
          </div>
          <div className="mb-10">
            <TextField mb="9" label="Address Line 1" />
          </div>
          <div className="mb-10">
            <TextField mb="9" label="Address Line 2" />
          </div>
          <TextField mb="9" label="Address Line 3" />
          <div className="flex mt-10 pb-39 border-b border-border">
            <div className="w-25%  mr-30">
              <TextField mb="9" label="Post code" />
            </div>
            <div className="w-25%">
              <TextField mb="9" label="Country" />
            </div>
          </div>
          <div className="border-border border-b pb-20 pt-20">
            <div className="flex justify-between pb-6">
              <div className="text-black uppercase font-bold tracking text-sm">
                Shipping
              </div>
              <div className="text-black uppercase font-bold tracking text-sm">
                estimated delivery: 2nd June 2021
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-black uppercase font-bold tracking text-sm">
                delivered from 24-48 hours
              </div>
              <div className="text-primary tracking-wider  font-avenir-reg font-medium text-lg uppercase">
                £20.00
              </div>
            </div>
          </div>
          <div>
            <div className="uppercase pb-19 pt-18 tracking-wider text-secondary font-avenir-reg font-medium uppercase">
              your payment details
            </div>
            <div className="font-bold text-secondary text-sm uppercase ">
              payments going to{' '}
            </div>
            <div className="flex pt-14 pb-9">
              <div className="pr-26">
                <RadioButton label="PAYPAL" />
              </div>
              <div>
                <RadioButton label="Card ending in 0876" />
              </div>
            </div>
            <div className="underline text-primary uppercase tracking text-sm font-bold pb-10">
              Add Card
            </div>
            <div className="border-b border-border pb-31">
              <CheckBox label="billing address same as shipping address" />
            </div>
          </div>
          <Button className="mt-35 w-30% h-33">COMPLETE PURCHASE</Button>
        </div>
        <div className="w-312">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
