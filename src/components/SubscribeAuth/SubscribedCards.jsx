import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripeElements from './StripeElements';

function SubscribedCards({ title }) {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

  return (
    <div className="w-100%">
      <p className="font-avenir-300 text-2xl text-secondary leading-38 tracking-wider uppercase sm:leading-20 sm:tracking-tight sm:font-medium sm:text-base ">
        {title}
      </p>
      <p className="admin-h2 pt-14 sm:text-xl sm:font-normal sm:leading-20 sm:tracking-tight ">
        your payment details
      </p>
      <div className="admin-label  pt-19 ">pay for subcription via</div>
      <Elements
        stripe={stripePromise}
        options={{
          fonts: [
            {
              src: '../../../src/fonts/Nunito-Bold.ttf',
              family: 'Nunito',
              style: 'normal',
            },
          ],
        }}
      >
        <StripeElements />
      </Elements>
    </div>
  );
}

export default SubscribedCards;
