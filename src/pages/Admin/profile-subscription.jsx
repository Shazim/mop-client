import { AdminLayout } from 'Layout';
import React from 'react';
import Package from 'components/Packages/package';
import Button from 'components/atoms/buttons/Button';
import TextArea from 'components/atoms/form/TextArea';
import RadioButton from 'components/atoms/buttons/RadioButton';

function ProfileSubscription() {
  return (
    <AdminLayout title="profile" subtitle="subscription">
      <div className="admin-h2 sm:text-center">current subscription</div>
      <div className="text-sm text-black font-nunito-light mt-23 mb-27 sm:text-center">
        You currently have the{' '}
        <span className="font-bold ">Plus Subscription</span> Package.
      </div>
      <div>
        <Package subscribeBtn={false} />
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
        <Button
          transform="uppercase"
          color="gray"
          className="w-141 h-33 sm:ml-auto sm:mr-auto"
        >
          Save
        </Button>
      </div>
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
}

export default ProfileSubscription;
