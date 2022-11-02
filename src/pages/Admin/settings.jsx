// ====================== IMPORTED LIBRARIES ========================
import React, { useEffect, useState } from 'react';
// ====================== IMPORTED COMPONENT ========================
import { AdminLayout } from 'Layout';
import SelectOptions from 'components/atoms/form/SelectOptions';
import Button from 'components/atoms/buttons/Button';
import TextArea from 'components/atoms/form/TextArea';
import RadioButton from 'components/atoms/buttons/RadioButton';
import Package from 'components/Packages/package';
import withArtistRoute from 'hoc/withArtistRoute';
import { useFetch, usePost } from 'hooks';
import {
  artistSetting,
  getCurrency,
  updateArtistSetting,
} from 'api/api-services';
import { Form } from 'components/app/forms';

import { toast } from 'react-toastify';
const Settings = () => {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [option, setOption] = useState([]);
  const [hoverValue, setHoverValue] = useState(undefined);
  const { data } = useFetch(artistSetting);
  const { data: store_currencies = [] } = useFetch(getCurrency);
  const [update, { data: artist_setting = {}, status }] =
    usePost(updateArtistSetting);
  const id = data?.id;

  const [initial, setInitial] = useState({
    store_currency_id: '',
    payment_method: '',
    self_fullfill_msg: '',
    star_review: '',
    feedback: '',
    //customParam: '',
    order_delay: 1,
  });
  useEffect(() => {
    const testData = store_currencies?.store_currencies?.map((data) => {
      return { value: data.id, label: data.name };
    });
    setOption(testData);
  }, [store_currencies]);

  useEffect(() => {
    setInitial((prev) => {
      return {
        ...prev,
        self_fullfill_msg: data?.self_fullfill_msg,
        feedback: data?.feedback,
        payment_method: data?.payment_method,
        //        store_currency: data?.store_currency,
        star_review: data?.star_review,
      };
    });
    setCurrentValue(data?.star_review);
  }, [data]);
  const handleClick = (value) => {
    setCurrentValue(value);
    setInitial((prev) => {
      return {
        ...prev,
        star_review: value,
      };
    });
  };
  const handleMouseHover = (value) => {
    setHoverValue(value);
  };
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  const handleChange = (value, name) => {
    setInitial((prev) => {
      return {
        ...prev,
        store_currency_id: value,
      };
    });
  };
  const onSubmit = (data) => {
    const {
      payment_method,

      store_currency_id,
      order_delay,

      self_fullfill_msg,
      star_review,
      feedback,
      //customParam,
    } = data;
    update({ variables: { artist_setting: data } }, id);
    console.log({ data });
    toast.success('Your setting Saved Successfully');

    // if (customParam === 'payment-details') {
    //   let copySubmit = {
    //     payment_method,
    //   };

    //   update({ variables: copySubmit }, id);
    //   toast.success('Your setting Saved Successfully');
    // }
    // if (customParam === 'store-currency') {
    //   let copySubmit = {
    //     store_currency_id,
    //   };

    //   update({ variables: data }, id);
    //   toast.success('Your setting Saved Successfully');
    // }
    // if (customParam === 'self_fullfill_message') {
    //   let copySubmit = {
    //     self_fullfill_msg,
    //   };

    //   update({ artist_setting: { variables: copySubmit } }, id);

    //   toast.success('Your setting Saved Successfully');
    // } else {
    //   let copySubmitData = {
    //     star_review: star_review,
    //     feedback: feedback,
    //   };
    //   update({ artist_setting: { variables: copySubmitData } }, id);
    //   toast.success('Your setting Saved Successfully');
    // }
  };
  return (
    <AdminLayout title="settings">
      <Form
        initialValues={initial}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <>
            <div className="admin-h2 sm:text-center">current subscription</div>
            <div className="text-sm text-black font-nunito-light mt-23 mb-27 sm:text-center">
              You currently have the{' '}
              <span className="font-bold ">Plus Subscription</span> Package.
            </div>
            <div>
              <Package
                subscribeBtn={false}
                title={data?.subscription?.name}
                price={data?.subscription?.price}
                year={
                  data?.subscription?.duration_type === 'monthly' ? false : true
                }
              />
            </div>
            <div className="sm:text-center ">
              <Button className="w-312 h-33 mt-33 mb-19 " transform="uppercase">
                upgrade subscription
              </Button>
            </div>
            <div className="hr-b pb-33 sm:text-center">
              <Button className="w-312 h-33" transform="uppercase" color="gray">
                cancel subscription
              </Button>
            </div>
            {/* <div className="admin-h2 sm:text-center">subscription</div>
      <div className="text-sm text-black font-nunito-light mt-23 mb-27">
        You currently have the{' '}
        <span className="font-bold ">Plus Subscription</span> Package.
      </div>
      <div className="hr-b pb-30 sm:text-center">
        <Button transform="uppercase" color="gray" className="w-312 h-33">
          upgrade subscription
        </Button>
      </div> */}

            <div className="admin-h2 mt-10 mb-20 sm:text-center">
              your payment details
            </div>
            <div className="admin-label mb-20">payments going to</div>
            <div className="flex mb-15 sm:flex-col">
              <div className="w-115 mr-12 hidden">
                <RadioButton value="Paypal" name="card" className="text-sm " />
              </div>
              <div className="w-115 mr-12 hidden">
                <RadioButton
                  value="Payoneer"
                  name="card"
                  className="text-sm "
                />
              </div>
              <div className="w-115 mr-51">
                <RadioButton
                  value={data?.payment_method}
                  name="payment_method"
                  className="text-sm "
                  checked={true}
                />
              </div>
              <RadioButton
                value="Card ending in 0876"
                name="card"
                className="text-sm hidden"
              />
            </div>
            <div className="hr-b pb-23 flex justify-between sm:flex-col">
              <div className="card-link ">Add Cards</div>
              <div className="sm:ml-auto sm:mr-auto sm:mt-20">
                <Button
                  transform="uppercase"
                  color="gray"
                  className="w-141 h-33"
                  onClick={() => {
                    // setFieldValue('customParam', 'payment-details');
                    handleSubmit();
                  }}
                >
                  Save
                </Button>
              </div>
            </div>
            <div className="hidden hr-b mb-88 sm:block"></div>
            <div className="hr-b pb-30 sm:hidden">
              <div className="admin-h2 mt-15 mb-20">store currency</div>
              <div className="flex justify-between">
                <SelectOptions
                  className="w-180"
                  label="select"
                  option={option || []}
                  onChange={handleChange}
                  name="store_currency"
                />
                <Button
                  transform="uppercase"
                  color="gray"
                  className="w-141 h-33"
                  onClick={() => {
                    // setFieldValue('customParam', 'store-currency');
                    handleSubmit();
                  }}
                >
                  Save
                </Button>
              </div>
            </div>
            <div className="admin-h2 mt-15 mb-20 sm:hidden">
              Self Fulfil Message
            </div>
            <div className="w-468 sm:hidden">
              <TextArea
                placeholder="MAX 500 CHARACTERS"
                label="Edit your message that will appear to customers.if you choose the self fulfil."
                name="self_fullfill_msg"
              />
            </div>
            <Button
              transform="uppercase"
              color="gray"
              className="w-215 h-33 mt-32 mb-23 sm:hidden"
              onClick={() => {
                //setFieldValue('customParam', 'self_fullfill_message');
                handleSubmit();
              }}
            >
              Save
            </Button>
            <div className="hr-b"></div>
            <div className="admin-h2 mt-15 mb-20 sm:text-center">
              Review your Subscription
            </div>
            <div className="admin-label mb-15 sm:text-center">
              Use the stars to add a rating about your subscription.
            </div>

            {/* <img src="/images/card/star_image.svg" alt="" className="w-40 h-40" />
        <img src="/images/card/star_image.svg" alt="" className="w-40 h-40" />
        <img src="/images/card/star_image.svg" alt="" className="w-40 h-40" />
        <img src="/images/card/star_image.svg" alt="" className="w-40 h-40" /> */}
            <div className="flex mb-12 sm:justify-center">
              {stars.map((_, index) => {
                return (
                  <img
                    src={` ${
                      (hoverValue || currentValue) > index
                        ? '/images/card/star_image.svg'
                        : '/images/card/unfilled-star.svg'
                    }`}
                    alt=""
                    className="w-40 h-40"
                    key={index}
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseHover(index + 1)}
                    onMouseLeave={handleMouseLeave}
                  />
                );
              })}
            </div>
            <div>
              <TextArea
                placeholder="MAX 500 CHARACTERS"
                label="Add feedback about your subscription."
                name="feedback"
              />
            </div>
            <div className="sm:text-center">
              <Button
                transform="uppercase"
                color="gray"
                className="w-215 h-33 mt-33 mb-169"
                onClick={handleSubmit}
              >
                Submit review
              </Button>
            </div>
          </>
        )}
      </Form>
    </AdminLayout>
  );
};

export default withArtistRoute(Settings);
