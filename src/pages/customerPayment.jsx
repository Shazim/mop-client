import { AdminLayout } from 'Layout';
import React from 'react';
import Button from 'components/atoms/buttons/Button';
import RadioButton from 'components/atoms/buttons/RadioButton';

const customerPayment = () => {
  return (
    <AdminLayout title="Payment Options">
      <div className="font-Avenir-reg font-medium text-xl text-secondary leading-54 tracking-wider uppercase">
        subscription
      </div>
      <div className="mt-22 font-nunito-light font-light text-base leading-22 text-secondary ">
        You currently have a customer account. Click upgrade subscription if
        you’d like to change to an artist account (sell your own work and make
        galleries and NFTs).{' '}
      </div>
      <Button
        className="w-312 h-33 mt-20 mb-19 "
        transform="uppercase"
        color="gray"
      >
        upgrade subscription
      </Button>
      <div className="mt-30 hr-b"></div>
      <div className="font-Avenir-reg font-medium text-xl text-secondary leading-54 tracking-wider uppercase">
        Your payment details
      </div>
      <div className="font-nunito-light font-medium text-xl leading-32 text-secondary ">
        payments going to{' '}
      </div>
      <div className="flex mb-15 sm:flex-col">
        <div className="w-115 mr-12">
          <RadioButton value="Paypal" name="card" className="text-sm " />
        </div>
        <div className="w-115 mr-12">
          <RadioButton value="Payoneer" name="card" className="text-sm " />
        </div>
        <div className="w-115 mr-51">
          <RadioButton value="Stripe" name="card" className="text-sm " />
        </div>
        <RadioButton
          value="Card ending in 0876"
          name="card"
          className="text-sm "
        />
      </div>
      <div className="hr-b pb-23 flex justify-between sm:flex-col">
        <div className="card-link ">Add Cards</div>
        <div className="sm:ml-auto sm:mr-auto sm:mt-20">
          <Button transform="uppercase" color="gray" className="w-141 h-33">
            Save
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default customerPayment;
