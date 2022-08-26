import React, { forwardRef, useImperativeHandle } from 'react';
import {
  CardNumberElement,
  useElements,
  useStripe,
  CardCvcElement,
  CardExpiryElement,
} from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import Button from 'components/atoms/buttons/Button';
import { TextField } from 'components/atoms/form';

const PaymentMethod = forwardRef((props, ref) => {
  const elements = useElements();
  const stripe = useStripe();
  const stripeElementStyle = {
    base: {
      fontSize: '13px',
      color: 'black',

      letterSpacing: '0.10em',
      fontFamily: 'Nunito, sans-serif',
      '::placeholder': {
        color: '#D6D6D6',
      },
      fontWeight: 'bold',
      ':focus': {
        borderBottomColor: 'red',
      },
    },
  };
  useImperativeHandle(ref, () => ({
    getAlert() {
      const card = elements.getElement(CardNumberElement);

      stripe.createToken(card).then(function (result) {
        if (result.error) {
          toast.error(result.error.code);
        } else {
          // Send the token to your server.
          console.log('ghere', result);
        }
        console.log('there is card number', card);
      });
    },
  }));
  //   const handleSubmit = () => {
  //     const card = elements.getElement(CardNumberElement);

  //     stripe.createToken(card).then(function (result) {
  //       if (result.error) {
  //         toast.error(result.error.code);
  //       } else {
  //         // Send the token to your server.
  //         console.log('ghere', result);
  //       }
  //       console.log('there is card number', card);
  //     });
  //   };
  return (
    <div>
      <div className="flex sm:flex-col mb-20 mt-20">
        <TextField
          name="cardHolder Name"
          placeholder="ENTER CARDHOLDER NAME"
          mb="9"
          className="h-38 mr-20"
          label="CARDHOLDER Name"
          width="277"
        />
        <div className="mr-22 w-277 sm:w-full">
          <div
            className={`font-bold text-secondary text-sm leading-22 text-secondary uppercase tracking mb-11`}
          >
            Card Number
          </div>
          <CardNumberElement
            options={{
              style: stripeElementStyle,
              placeholder: 'ENTER LONG CARD NUMBER HERE',
            }}
            className="w-100% h-38 bg-white outline-none  text-secondary placeholder-gray font-bold text-sm pl-8 pt-11 tracking"
          />
        </div>

        {/* <div className="w-100% sm:flex sm:justify-center">
          <Button
            className="w-262 h-41 mt-11 sm:w-95% sm:text-secondary sm:flex justify-center sm:h-20"
            transform="uppercase"
            onClick={handleSubmit}
          >
            <span>Subscribe to this plan</span>{' '}
          </Button>
        </div> */}
      </div>
      <div className="flex sm:flex-col mb-30">
        <div className="mr-22 w-30% sm:w-full">
          <div
            className={`font-bold text-secondary text-sm leading-22 text-secondary uppercase tracking mb-11`}
          >
            Expiry Date
          </div>
          <CardExpiryElement
            options={{
              style: stripeElementStyle,
              placeholder: '00/00',
            }}
            className="w-100% h-38 bg-white outline-none  text-secondary placeholder-gray font-bold text-sm pl-8 pt-11 tracking"
          />
        </div>
        <div className="w-20% sm:w-full">
          <div
            className={`font-bold text-secondary text-sm leading-22 text-secondary uppercase tracking mb-11`}
          >
            CVC
          </div>
          <CardCvcElement
            options={{
              style: stripeElementStyle,
              placeholder: 'XXX',
            }}
            className="w-100% h-38 bg-white outline-none  text-secondary placeholder-gray font-bold text-sm pl-8 pt-11 tracking"
          />
        </div>
      </div>
    </div>
  );
});

export default PaymentMethod;
