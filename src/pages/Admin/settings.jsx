// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
// ====================== IMPORTED COMPONENT ========================
import { AdminLayout } from 'Layout';
import SelectOptions from 'components/atoms/form/SelectOptions';
import Button from 'components/atoms/buttons/Button';
import TextArea from 'components/atoms/form/TextArea';
import RadioButton from 'components/atoms/buttons/RadioButton';
import Package from 'components/Packages/package';
import withArtistRoute from 'hoc/withArtistRoute';
import { useFetch } from 'hooks';
import { artistSetting } from 'api/api-services';
const Settings = () => {
  const { data } = useFetch(artistSetting);

  return (
    <AdminLayout title="settings">
      <div className="admin-h2 sm:text-center">current subscription</div>
      <div className="text-sm text-black font-nunito-light mt-23 mb-27 sm:text-center">
        You currently have the{' '}
        <span className="font-bold ">Plus Subscription</span> Package.
      </div>
      <div>
        <Package
          subscribeBtn={false}
          title={data?.package?.name}
          price={data?.package?.price}
          year={data?.package?.duration_type === 'monthly' ? false : true}
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
      <div className="hidden hr-b mb-88 sm:block"></div>
      <div className="hr-b pb-30 sm:hidden">
        <div className="admin-h2 mt-15 mb-20">store currency</div>
        <div className="flex justify-between">
          <SelectOptions className="w-180" label="SHOW 50" />
          <Button transform="uppercase" color="gray" className="w-141 h-33">
            Save
          </Button>
        </div>
      </div>
      <div className="admin-h2 mt-15 mb-20 sm:hidden">Self Fulfil Message</div>
      <div className="w-468 sm:hidden">
        <TextArea
          placeholder="MAX 500 CHARACTERS"
          label="Edit your message that will appear to customers.if you choose the self fulfil."
        />
      </div>
      <Button
        transform="uppercase"
        color="gray"
        className="w-215 h-33 mt-32 mb-23 sm:hidden"
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
      <div className="flex mb-12 sm:justify-center">
        <img src="/images/card/star_image.svg" alt="" className="w-40 h-40" />
        <img src="/images/card/star_image.svg" alt="" className="w-40 h-40" />
        <img src="/images/card/star_image.svg" alt="" className="w-40 h-40" />
        <img src="/images/card/star_image.svg" alt="" className="w-40 h-40" />
        <img
          src="/images/card/unfilled-star.svg"
          alt=""
          className="w-40 h-40"
        />
      </div>
      <div>
        <TextArea
          placeholder="MAX 500 CHARACTERS"
          label="Add feedback about your subscription."
        />
      </div>
      <div className="sm:text-center">
        <Button
          transform="uppercase"
          color="gray"
          className="w-215 h-33 mt-33 mb-169"
        >
          Submit review
        </Button>
      </div>
    </AdminLayout>
  );
};

export default withArtistRoute(Settings);
