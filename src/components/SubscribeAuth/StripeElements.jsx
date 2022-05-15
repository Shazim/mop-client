import { Form } from 'components/app/forms';
import Button from 'components/atoms/buttons/Button';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import RadioButton from 'components/atoms/buttons/RadioButton';
import {
  CardNumberElement,
  useElements,
  useStripe,
  CardCvcElement,
  CardExpiryElement,
} from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import { subscription } from 'api';
import { usePost } from 'hooks';
import { getCookie } from 'cookies/Cookies';
import { useEffect } from 'react';

function StripeElements() {
  const elements = useElements();
  const stripe = useStripe();

  const [subscribe, { data: dataSubscription }] = usePost(subscription);

  const stripeElementStyle = {
    base: {
      fontSize: '13px',
      color: 'black',

      letterSpacing: '0.13em',
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

  const selectedPackage =
    getCookie('package') && JSON.parse(getCookie('package'));
  const { id } = selectedPackage || {};

  useEffect(() => {
    // toast.success("")
    if (dataSubscription) {
      console.log('dataToken', dataSubscription);
    }
  }, [dataSubscription]);

  const handleSubmit = () => {
    const card = elements.getElement(CardNumberElement);
    stripe.createToken(card).then(function (result) {
      if (result.error) {
        toast.error(result.error.code);
      } else {
        // Send the token to your server.
        subscribe({
          variables: {
            package_id: id,
            token: result?.token?.id,
          },
        });
        console.log('result: ', result.token);
      }
    });
  };

  return (
    <div className="mt-14 h-100%">
      <Form initialValues={{ email: '', password: '', confirm: '' }}>
        <>
          <div className="w-100% flex mb-23">
            <div className="w-87 lg:w-100% md:w-100% sm:w-100% mr-18">
              <RadioButton name="card" value="Paypal" className="text-sm " />
            </div>
            <div className="w-100% lg:w-100% md:w-100% sm:w-100%">
              <RadioButton name="card" value="Card" className="text-sm" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-22 w-50%">
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
            <div className="mr-22 w-30%">
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
            <div className="w-20%">
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
          <div className="w-100% border-b border-border opacity-1 my-27 "></div>
          <div className="sm:hidden mb-19">
            <CheckBox value="I would like to receive insightful updates and emails. " />
          </div>
          <div className="w-100% sm:flex sm:justify-center">
            <Button
              className="w-262 h-41 mt-11 sm:w-95%"
              transform="uppercase"
              onClick={handleSubmit}
            >
              Subscribe to this plan
            </Button>
          </div>
        </>
      </Form>
    </div>
  );
}

export default StripeElements;
