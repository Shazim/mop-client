import Button from 'components/atoms/buttons/Button';
import Cart from 'components/Cart/Cart';
import React, { useState } from 'react';
import { TextField } from 'components/atoms/form';
import { Form } from 'components/app/forms';
import RadioButton from 'components/atoms/buttons/RadioButton';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import { SubHeaderLayout } from 'Layout';

function Checkout() {
  const [initial, setInitial] = useState({
    firstName: '',
    surname: '',
    bio: '',
    companyName: 'private_gallery',
    phoneNumber: '',
    imageFile: {},
    styleIds: {},
    facebook: '',
    linkedin: '',
    instagram: '',
    customParam: '',
  });
  const onSubmit = (values) => {
    const { firstName } = values;
  };
  return (
    <SubHeaderLayout title="My cart">
      <div className="pt50 flex pb-182">
        <div className="w-100% mr-33">
          <div className="admin-h2  pb-33">Your Details</div>
          <div className="flex">
            <Button color="gray" className="w-190 h-33 mr-22">
              LOGIN
            </Button>
            <Button color="gray" className="w-234 h-33 mr-22">
              CREATE AN ACCOUNT
            </Button>
            <Button className="w-234 h-33">CONTINUE AS GUEST</Button>
          </div>
          <Form
            initialValues={initial}
            onSubmit={onSubmit}
            // validationSchema={gallerySchema}
            enableReinitialize={true}
          >
            {({ values, handleSubmit, setFieldValue }) => (
              <>
                <div className="flex mb-8 mt-24">
                  <TextField
                    name="firstName"
                    placeholder="ENTER FIRST NAME"
                    mb="9"
                    height="38"
                    label="First Name"
                    width="277"
                  />
                  <div className="ml-30">
                    <TextField
                      name="lastName"
                      placeholder="ENTER LAST NAME"
                      mb="9"
                      height="38"
                      label="Last Name"
                      width="277"
                    />
                  </div>
                </div>
                <div className="pb-35 hr-b">
                  <TextField
                    name="phone"
                    placeholder="ENTER PHONE NUMBER"
                    mb="9"
                    height="38"
                    label="Phone Number"
                    width="277"
                  />
                </div>
                <div className="admin-h2 pt-35 pb-18">Address</div>
                <div className="mb-11">
                  <TextField
                    name="address1"
                    placeholder="ENTER ADDRESS LINE 1"
                    mb="11"
                    height="38"
                    label="Address Line 1"
                  />
                </div>
                <div className="mb-11">
                  <TextField
                    name="address2"
                    placeholder="ENTER ADDRESS LINE 2"
                    mb="11"
                    height="38"
                    label="Address Line 2"
                  />
                </div>
                <div className="mb-11">
                  <TextField
                    name="address3"
                    placeholder="ENTER ADDRESS LINE 3"
                    mb="11"
                    height="38"
                    label="Address line 3"
                  />
                </div>
                <div className="flex hr-b pb-35">
                  <div className="w-199">
                    <TextField
                      name="postcode"
                      placeholder="ENTER POST CODE"
                      mb="9"
                      height="38"
                      label="POST CODE"
                    />
                  </div>
                  <div className="w-199 ml-30">
                    <TextField
                      name="country"
                      placeholder="ENTER COUNTRY"
                      mb="9"
                      height="38"
                      label="country"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-20">
                  <div className="text-sm tracking uppercase font-nunito-bold">
                    <div className="mb-10">Shipping</div>
                    <div>delivered from 24-48 hours</div>
                  </div>
                  <div>
                    <div className="text-sm tracking uppercase font-nunito-bold mb-10">
                      estimated delivery: 2nd June 2021
                    </div>
                    <div className="flex justify-end text-primary font-avenir-reg font-medium text-xl uppercase">
                      £20.00
                    </div>
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
                  <div className="card-link">Add Card</div>
                  <div className="pt-10 pb-31 hr-b mb-35">
                    <CheckBox
                      // onChange={() => handleFeature(id)}
                      // checked={artwork_ids[id] == id}
                      value="billing address same as shipping address"
                    />
                  </div>
                </div>
                <Button className="w-318 h-33" transform="uppercase">
                  complete purchase
                </Button>{' '}
              </>
            )}
          </Form>
        </div>
        <Cart />
      </div>
    </SubHeaderLayout>
  );
}

export default Checkout;
