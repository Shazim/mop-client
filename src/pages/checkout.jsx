// ====================== IMPORTED LIBRARIES ========================
import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'routes';
import { usePost } from 'hooks';
import { toast } from 'react-toastify';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import {
  CardNumberElement,
  useElements,
  useStripe,
  CardCvcElement,
  CardExpiryElement,
} from '@stripe/react-stripe-js';
// ====================== IMPORTED COMPONENT ========================
import Button from 'components/atoms/buttons/Button';
import Cart from 'components/Cart/Cart';
import { TextField } from 'components/atoms/form';
import { Form } from 'components/app/forms';
import RadioButton from 'components/atoms/buttons/RadioButton';
import { getCookie } from 'cookies/Cookies';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import { SubHeaderLayout } from 'Layout';
import { Item } from 'components/Cart';
// ====================== IMPORTED API ========================
import { createOrder } from 'api/api-services';
import { createOrderSchema } from 'validation';
import PaymentMethod from './PaymentMethod';
import { LOGIN_MODAL } from 'store/actions/actionTypes';

const Checkout = () => {
  const { isLoginOpen } = useSelector((state) => state.modals)
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const [disable, setDisable] = useState(false);

  const total_Price = useSelector((state) => state?.cart?.totalPrice);
  const history = useHistory();
  const childRef = useRef();
  const [handleCreateOrder, { data: dataPost }] = usePost(createOrder);
  const { user, access_token, refresh_token } =
    (getCookie('user') && JSON.parse(getCookie('user'))) || {};
  const localData = (getCookie('obj') && JSON.parse(getCookie('obj'))) || [];
  const [initial, setInitial] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    address_1: '',
    address_2: '',
    address_3: '',
    postcode: '',
    country: '',
    shipping_address_1: '',
    shipping_address_2: '',
    shipping_address_3: '',
    shipping_postcode: '',
    shipping_country: '',
    total_price: '',
    order_items_attributes: [],
  });
  // const elements = useElements();
  // const stripe = useStripe();
  // const stripeElementStyle = {
  //   base: {
  //     fontSize: '13px',
  //     color: 'black',

  //     letterSpacing: '0.10em',
  //     fontFamily: 'Nunito, sans-serif',
  //     '::placeholder': {
  //       color: '#D6D6D6',
  //     },
  //     fontWeight: 'bold',
  //     ':focus': {
  //       borderBottomColor: 'red',
  //     },
  //   },
  // };

  const handleLoginToggle = () => {
    dispatch({ type: LOGIN_MODAL, payload: !isLoginOpen });
  }
  useEffect(() => {
    const data = localData?.map(
      ({ artwork_id, size, paper, price, frame, quantity }) => {
        return {
          artwork_id: artwork_id,
          size: size,
          paper: paper,
          frame: frame,
          price: price,
          quantity: quantity,
          user_id: user?.id,
          mount_size: '1',
        };
      }
    );

    setInitial({
      ...initial,
      order_items_attributes: data,
      total_price: total_Price,
    });
  }, []);

  useEffect(() => {
    if (dataPost) {
      toast.success('your order is Completed');
    }
  }, [dataPost]);
  useEffect(() => {
    if (!checked) {
      setInitial({
        ...initial,
        shipping_address_1: '',
        shipping_address_2: '',
        shipping_address_3: '',
        shipping_postcode: '',
        shipping_country: '',
      });
    }
  }, [checked]);
  useEffect(() => {
    if (!access_token) setDisable(true);
    else setDisable(false);
  }, [access_token]);
  //console.log({ childRef });

  const onSubmit = (data) => {
    //childRef.current.getAlert();
    const {
      first_name,
      last_name,
      phone_number,
      address_1,
      address_2,
      address_3,
      postcode,
      country,
      shipping_address_1,
      shipping_address_2,
      shipping_address_3,
      shipping_postcode,
      shipping_country,
      total_price,
    } = data;

    handleCreateOrder({
      variables: {
        token: 'tok_mastercard',
        order: {
          first_name,
          last_name,
          phone_number,
          address_1,
          address_2,
          address_3,
          postcode,
          country,
          shipping_address_1,
          shipping_address_2,
          shipping_address_3,
          shipping_country,
          shipping_postcode,
          total_price,
          order_items_attributes: [],
        },
      },
    });
  };

  const onChange = (data) => {
    setChecked(!checked);

    setInitial({
      ...initial,
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone_number,
      address_1: data.address_1,
      address_2: data.address_2,
      address_3: data.address_3,
      postcode: data.postcode,
      country: data.country,
      shipping_address_1: data.address_1,
      shipping_address_2: data.address_2,
      shipping_address_3: data.address_3,
      shipping_postcode: data.postcode,
      shipping_country: data.country,
    });
  };

  const ship = [
    { heading: 'Shipping', price: '£' },
    { heading: 'Estimated Delivery', price: '' },
    { heading: 'Delivered from', price: '24-48 Hours' },
  ];

  return (
    <>
      <SubHeaderLayout title="My cart">
        {localData.length > 0 ? (
          <>
            <div className="pt-50 flex pb-182 sm:flex-col-reverse">
              <div className="w-100% mr-33">
                <div className="admin-h2 mt-20 pb-33">Your Details</div>
                {!access_token && (
                  <>
                    <div className="flex sm:flex-col ">
                      <Button
                        color="gray"
                        className="w-190 h-33  mr-22  sm:w-234 sm:ml-auto sm:mr-auto"
                        onClick={handleLoginToggle}
                      >
                        LOGIN
                      </Button>
                      <Button
                        color="gray"
                        className="w-234 h-33  sm:mt-12 sm:ml-auto sm:mr-auto"
                        // onClick={() =>
                        //   //history.push(routes.ROUTE_CREATE_GALLERY)
                        // }
                      >
                        CREATE AN ACCOUNT
                      </Button>

                      <Button className="w-234 h-33 sm:mt-12 sm:ml-auto sm:mr-auto hidden">
                        CONTINUE AS GUEST
                      </Button>
                    </div>
                    <div className="flex mt-21  mb-22">
                      <img
                        src="/images/icons/info-icon.svg"
                        alt=""
                        className="mr-7"
                      />
                      <div className="text-primary font-bold tracking uppercase mt-3">
                        Please login to fill the form
                      </div>
                    </div>
                  </>
                )}
                <div className="hidden sm:block hr-b mt-24"></div>
                <Form
                  initialValues={initial}
                  onSubmit={onSubmit}
                  validationSchema={createOrderSchema}
                  enableReinitialize={true}
                >
                  {({ values, handleSubmit, setFieldValue }) => (
                    <>
                      <div className="flex mb-8 mt-24 sm:flex-col">
                        <div>
                          {' '}
                          <TextField
                            name="first_name"
                            placeholder="ENTER FIRST NAME"
                            mb="9"
                            height="38"
                            label="First Name"
                            //width="277"
                            value={values.first_name}
                            className="sm:w-full w-277"
                            readOnly={disable}
                          />
                        </div>
                        <div className="ml-30 sm:ml-0 sm:mt-10">
                          <TextField
                            name="last_name"
                            placeholder="ENTER LAST NAME"
                            mb="9"
                            height="38"
                            label="Last Name"
                            value={values.last_name}
                            className="sm:w-full w-277"
                            readOnly={disable}
                          />
                        </div>
                      </div>
                      <div className="pb-35 hr-b">
                        <TextField
                          name="phone_number"
                          placeholder="ENTER PHONE NUMBER"
                          mb="9"
                          height="38"
                          label="Phone Number"
                          className="sm:w-full w-277"
                          value={values.phone_number}
                          readOnly={disable}
                        />
                      </div>
                      <div className="admin-h2 pt-35 pb-18">
                        Billing Address
                      </div>
                      <div className="mb-11">
                        <TextField
                          name="address_1"
                          placeholder="ENTER ADDRESS LINE 1"
                          mb="11"
                          height="38"
                          label="Address Line 1"
                          value={values.address_1}
                          readOnly={disable}
                        />
                      </div>
                      <div className="mb-11">
                        <TextField
                          name="address_2"
                          placeholder="ENTER ADDRESS LINE 2"
                          mb="11"
                          height="38"
                          label="Address Line 2"
                          value={values.address_2}
                          readOnly={disable}
                        />
                      </div>
                      <div className="mb-11">
                        <TextField
                          name="address_3"
                          placeholder="ENTER ADDRESS LINE 3"
                          mb="11"
                          height="38"
                          label="Address line 3"
                          value={values.address_3}
                          readOnly={disable}
                        />
                      </div>
                      <div className="flex hr-b pb-35 sm:flex-col">
                        <div className="w-199 sm:w-full">
                          <TextField
                            name="postcode"
                            placeholder="ENTER POST CODE"
                            mb="9"
                            height="38"
                            label="POST CODE"
                            value={values.postcode}
                            readOnly={disable}
                          />
                        </div>
                        <div className="w-199 ml-30 sm:w-full sm:ml-0 sm:mt-10">
                          <TextField
                            name="country"
                            placeholder="ENTER COUNTRY"
                            mb="9"
                            height="38"
                            label="country"
                            value={values.country}
                            readOnly={disable}
                          />
                        </div>
                      </div>
                      <div className="admin-h2 pt-35 pb-18">
                        Shipping Address
                      </div>
                      <div className="flex">
                        <CheckBox
                          className={'mt-5'}
                          onChange={() => onChange(values)}
                          checked={checked}
                        />
                        <div className="ml-15 font-nunito-bold font-bold text-sm text-secondary leading-32 uppercase tracking pb-20">
                          billing address same as shipping address
                        </div>
                      </div>
                      <div className="mb-11">
                        <TextField
                          name="shipping_address_1"
                          placeholder="ENTER ADDRESS LINE 1"
                          mb="11"
                          height="38"
                          label="Shipping Address Line 1"
                          value={values.shipping_address_1}
                          readOnly={checked}
                        />
                      </div>
                      <div className="mb-11">
                        <TextField
                          name="shipping_address_2"
                          placeholder="ENTER ADDRESS LINE 2"
                          mb="11"
                          height="38"
                          label="Shipping Address Line 2"
                          value={values.shipping_address_2}
                          readOnly={checked}
                        />
                      </div>
                      <div className="mb-11">
                        <TextField
                          name="shipping_address_3"
                          placeholder="ENTER ADDRESS LINE 3"
                          mb="11"
                          height="38"
                          label="Shipping Address line 3"
                          value={values.shipping_address_3}
                          readOnly={checked}
                        />
                      </div>
                      <div className="flex hr-b pb-35 sm:flex-col">
                        <div className="w-199 sm:w-full">
                          <TextField
                            name="shipping_postcode"
                            placeholder="ENTER POST CODE"
                            mb="9"
                            height="38"
                            label=" Shipping POST CODE"
                            value={values.shipping_postcode}
                            readOnly={checked}
                          />
                        </div>
                        <div className="w-199 ml-30 sm:w-full sm:ml-0 sm:mt-10">
                          <TextField
                            name="shipping_country"
                            placeholder="ENTER COUNTRY"
                            mb="9"
                            height="38"
                            label="shipping country"
                            value={values.shipping_country}
                            readOnly={checked}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between mt-20">
                        <div className="text-sm tracking uppercase font-nunito-bold">
                          <div className="mb-10">Shipping Address</div>
                          <div className="pt-10 hidden mb-35 sm:block">
                            <CheckBox value="billing address same as shipping address" />
                          </div>
                          <div className="sm:hidden">
                            delivered from 24-48 hours
                          </div>
                        </div>
                        <div>
                          <div className="text-sm tracking uppercase font-nunito-bold mb-10 sm:hidden">
                            estimated delivery:
                          </div>
                          <div className="flex justify-end text-primary font-avenir-reg font-medium text-xl uppercase sm:hidden">
                            £0.00
                          </div>
                        </div>
                      </div>
                      <div className="hidden sm:block">
                        <div className="mb-11">
                          <TextField
                            name="address_1"
                            placeholder="ENTER ADDRESS LINE 1"
                            mb="11"
                            height="38"
                            label="Address Line 1"
                          />
                        </div>
                        <div className="mb-11">
                          <TextField
                            name="address_2"
                            placeholder="ENTER ADDRESS LINE 2"
                            mb="11"
                            height="38"
                            label="Address Line 2"
                          />
                        </div>
                        <div className="mb-11">
                          <TextField
                            name="address_3"
                            placeholder="ENTER ADDRESS LINE 3"
                            mb="11"
                            height="38"
                            label="Address line 3"
                          />
                        </div>
                        <div className="flex hr-b pb-35 sm:flex-col">
                          <div className="w-199 sm:w-full">
                            <TextField
                              name="postcode"
                              placeholder="ENTER POST CODE"
                              mb="9"
                              height="38"
                              label="POST CODE"
                            />
                          </div>
                          <div className="w-199 ml-30 sm:w-full sm:ml-0 sm:mt-10">
                            <TextField
                              name="country"
                              placeholder="ENTER COUNTRY"
                              mb="9"
                              height="38"
                              label="country"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="hidden sm:block">
                        <div className="mt-20 pb-20 hr-b">
                          {ship.map((item) => (
                            <div className="flex justify-between">
                              <div className="text-secondary uppercase tracking font-bold">
                                {item.heading}
                              </div>
                              <div className="text-primary tracking font-bold">
                                {item.price}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* <Elements
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
                        <div>
                          <div className="admin-h2 py-18">
                            your payment details
                          </div>
                          <div className="admin-label">payments going to </div>
                          <div className="flex pt-14 pb-9">
                            <div className="w-87 mr-26">
                              <RadioButton
                                className="text-sm mt-12"
                                name="payment"
                                value="Paypal"
                                // value={item.name}
                                // checked={item.select}
                                // onChange={() => setData(title, index, '')}
                              />
                            </div>
                            <RadioButton
                              className="text-sm mt-12"
                              name="payment"
                              value="Paypal"
                            // value={item.name}
                            // checked={item.select}
                            // onChange={() => setData(title, index, '')}
                            />
                          </div>
                          <RadioButton
                            className="text-sm mt-12"
                            name="payment"
                            value="Card ending in 0876"
                          // value={item.name}
                          // checked={item.select}
                          // onChange={() => setData(title, index, '')}
                          />
                        </div>
                        <div className="card-link sm:hidden">Add Card</div>
                        <div className="flex mb-8 mt-24 sm:hidden">
                          <TextField
                            name="cardHolder Name"
                            placeholder="ENTER CARDHOLDER NAME"
                            mb="9"
                            height="38"
                            label="CARDHOLDER Name"
                            width="277"
                          />
                          <div className="ml-30">
                            <TextField
                              name="CARD NUMBER"
                              placeholder="ENTER CARD NUMBER"
                              mb="9"
                              height="38"
                              label="CARD NUMBER"
                              width="277"
                            />
                          </div>
                        </div>
                        <div className="flex mb-8 mt-24 pb-30 sm:hidden">
                          <TextField
                            name="EXPIRY DATE"
                            placeholder="05/25"
                            mb="9"
                            height="38"
                            label="EXPIRY DATE"
                            width="140"
                          />
                          <div className="ml-30">
                            <TextField
                              name="CSV"
                              placeholder="456"
                              mb="9"
                              height="38"
                              label="CSV"
                              width="70"
                            />
                          </div>
                        </div>
                        {/* <div className="hidden sm:block hr-b mt-303"></div>
                    <div className="mb-30 mt-25">
                      {prices.map((item) => (
                        <div className="flex justify-between">
                          <div className="text-secondary uppercase tracking font-bold">
                            {item.heading}
                          </div>
                          <div className="text-primary tracking font-bold">
                            {item.price}
                          </div>
                        </div>
                        <div className="sm:flex justify-center">
                          <Button
                            className="w-318 h-33 sm:w-275 sm:h-44"
                            transform="uppercase"
                            disabled={`${access_token ? false : true}`}
                            onClick={Submit}
                          >
                            complete purchase
                          </Button>
                        </div>{' '}
                      </Elements> */}
                    </>
                  )}
                </Form>
              </div>

              <div className="sm:hidden">
                <Cart />
              </div>
              <div className="hidden sm:block mt-10">
                <div className="w-full  bg-white h-fit pt-31 pb-27 pl-27 pr-33">
                  {[...Array(3)].map(() => (
                    <Item />
                  ))}
                </div>
                <div className="card-link flex justify-end mt-7">EDIT</div>
              </div>
            </div>
          </>
        ) : (
          <div className="h-100vh text-center justify-center pt-112">
            <p className="font-avenir-reg text-primary text-4xl uppercase leading-55 tracking-wider">
              No Products Found Yet
            </p>
            <p className="font-avenir-reg text-secondary text-xl uppercase leading-55 tracking-wider">
              Add to cart your Products{' '}
            </p>
            {/* <p className="font-reg text-black text-base leading-snug">
              When uploaded, you can edit your image details by clicking the
              pencil icon. Adding this will
              <br /> make your images more visible for search engines.
            </p> */}
            <img
              className="mx-auto w-180 h-180 mt-56 mb-491"
              src="/images/galleryIcon.svg"
            />
          </div>
        )}
      </SubHeaderLayout>
    </>
  );
};

export default Checkout;
