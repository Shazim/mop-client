// ====================== IMPORTED LIBRARIES ========================
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { routes } from 'routes';
import { usePost } from 'hooks';
import { toast } from 'react-toastify';
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
import LoginModal from 'components/molecules/modals/LoginModal';
import SignupModal from 'components/molecules/modals/SignupModal';
import ForgotPassword from 'components/molecules/modals/ForgotPassword';
// ====================== IMPORTED API ========================
import { createOrder } from 'api/api-services';
import { createOrderSchema } from 'validation';

const Checkout = () => {
  const [signIn, setSignIn] = useState();
  const [forgot, setForgot] = useState();
  const [signUp, setSignUp] = useState();
  const [value, setValue] = useState({});
  const history = useHistory();
  const [handleCreateOrder, { data: dataPost, loading }] = usePost(createOrder);

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
    order_items_attributes: {},
  });
  const { user, access_token, refresh_token } =
    (getCookie('user') && JSON.parse(getCookie('user'))) || {};

  useEffect(() => {
    const localData = getCookie('obj') && JSON.parse(getCookie('obj'));
    console.log('here is my local', localData);

    setInitial({
      ...initial,
      order_items_attributes: {
        artwork_id: localData?.artwork_id,
        user_id: user?.id,
        size: localData?.size,
        paper: localData?.paper,
        frame: localData?.frame,

        price: localData?.price,
      },
    });
  }, []);

  const onSubmit = (data) => {
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
      order_items_attributes = [],
    } = data;
    toast.success('your order is Completed');

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
  // const handleChange = () => {
  //   (shipping_address_1 = 'address_1'),
  //     (shipping_address_2 = 'address_2'),
  //     (shipping_address_3 = 'address_3'),
  //     (shipping_postcode = 'postcode'),
  //     (shipping_country = 'country');
  // };

  const scrollOff = () => {
    signUp || signIn || forgot
      ? (window.document.body.style.overflow = 'hidden')
      : (window.document.body.style.overflow = 'scroll');
  };

  const prices = [
    { heading: 'subtotal', price: '£525.00' },
    { heading: 'vet', price: '£20.00' },
    { heading: 'total', price: '£525.00' },
  ];
  const ship = [
    { heading: 'Shipping', price: '£20.00' },
    { heading: 'Estimated Delivery', price: '02/06/2021' },
    { heading: 'Delivered from', price: '24-48 Hours' },
  ];
  console.log('shdhd', initial);

  return (
    <>
      <LoginModal
        isOpen={signIn}
        openHandler={setSignIn}
        signUpHandler={setSignUp}
        forgotHandler={setForgot}
      />
      <SignupModal
        isOpen={signUp}
        openHandler={setSignUp}
        signInHandler={setSignIn}
        forgotHandler={setForgot}
      />
      <ForgotPassword
        isOpen={forgot}
        openHandler={setForgot}
        signInHandler={setSignIn}
        signUpHandler={setSignUp}
      />
      <SubHeaderLayout title="My cart">
        <div className="pt-50 flex pb-182 sm:flex-col-reverse">
          <div className="w-100% mr-33">
            <div className="admin-h2 mt-20 pb-33">Your Details</div>
            <div className="flex sm:flex-col ">
              {!access_token && (
                <>
                  <Button
                    color="gray"
                    className="w-190 h-33  mr-22  sm:w-234 sm:ml-auto sm:mr-auto"
                    onClick={() => setSignIn((prv) => !prv)}
                  >
                    LOGIN
                  </Button>
                  <Button
                    color="gray"
                    className="w-234 h-33  sm:mt-12 sm:ml-auto sm:mr-auto"
                    onClick={() => history.push(routes.ROUTE_CREATE_GALLERY)}
                  >
                    CREATE AN ACCOUNT
                  </Button>
                </>
              )}

              <Button className="w-234 h-33 sm:mt-12 sm:ml-auto sm:mr-auto hidden">
                CONTINUE AS GUEST
              </Button>
            </div>
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
                        className="sm:w-full w-277"
                      />
                    </div>
                    <div className="ml-30 sm:ml-0 sm:mt-10">
                      <TextField
                        name="last_name"
                        placeholder="ENTER LAST NAME"
                        mb="9"
                        height="38"
                        label="Last Name"
                        className="sm:w-full w-277"
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
                    />
                  </div>
                  <div className="admin-h2 pt-35 pb-18">Billing Address</div>
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
                  <div className="admin-h2 pt-35 pb-18">Shipping Address</div>
                  <div className="flex">
                    <CheckBox
                      className={'mt-5'}
                      //onChange={() => handleChange}
                      // checked={
                      //   ((shipping_address_1 = 'address_1'),
                      //   (shipping_address_2 = 'address_2'),
                      //   (shipping_address_3 = 'address_3'),
                      //   (shipping_postcode = 'postcode'),
                      //   (shipping_country = 'country'))
                      // }
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
                    />
                  </div>
                  <div className="mb-11">
                    <TextField
                      name="shipping_address_2"
                      placeholder="ENTER ADDRESS LINE 2"
                      mb="11"
                      height="38"
                      label="Shipping Address Line 2"
                    />
                  </div>
                  <div className="mb-11">
                    <TextField
                      name="shipping_address_3"
                      placeholder="ENTER ADDRESS LINE 3"
                      mb="11"
                      height="38"
                      label="Shipping Address line 3"
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
                      />
                    </div>
                    <div className="w-199 ml-30 sm:w-full sm:ml-0 sm:mt-10">
                      <TextField
                        name="shipping_country"
                        placeholder="ENTER COUNTRY"
                        mb="9"
                        height="38"
                        label="shipping country"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mt-20">
                    <div className="text-sm tracking uppercase font-nunito-bold">
                      <div className="mb-10">Shipping Address</div>
                      <div className="pt-10 hidden mb-35 sm:block">
                        <CheckBox
                          // onChange={() => handleChange}
                          // checked={
                          //   ((shipping_address_1 = 'address_1'),
                          //   (shipping_address_2 = 'address_2'),
                          //   (shipping_address_3 = 'address_3'),
                          //   (shipping_postcode = 'postcode'),
                          //   (shipping_country = 'country'))
                          // }
                          value="billing address same as shipping address"
                        />
                      </div>
                      <div className="sm:hidden">
                        delivered from 24-48 hours
                      </div>
                    </div>
                    <div>
                      <div className="text-sm tracking uppercase font-nunito-bold mb-10 sm:hidden">
                        estimated delivery: 2nd June 2021
                      </div>
                      <div className="flex justify-end text-primary font-avenir-reg font-medium text-xl uppercase sm:hidden">
                        £20.00
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
                  <div>
                    <div className="admin-h2 py-18">your payment details</div>
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
                    <div className="flex mb-8 mt-24 hr-b pb-30 sm:hidden">
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
                    <div className="hidden sm:block hr-b mt-303"></div>
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
                      ))}
                    </div>

                    {/* <div className="pt-10 pb-31 hr-b mb-35">
                    <CheckBox
                      // onChange={() => handleFeature(id)}
                      // checked={artwork_ids[id] == id}
                      value="billing address same as shipping address"
                    />
                  </div> */}
                  </div>
                  <div className="sm:flex justify-center">
                    {access_token && (
                      <Button
                        className="w-318 h-33 sm:w-275 sm:h-44"
                        transform="uppercase"
                        onClick={handleSubmit}
                      >
                        complete purchase
                      </Button>
                    )}
                  </div>{' '}
                </>
              )}
            </Form>
          </div>
          <div className="sm:hidden">
            <Cart prices={prices} />
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
      </SubHeaderLayout>
    </>
  );
};

export default Checkout;
