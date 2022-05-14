import { AdminLayout } from 'Layout';
import React from 'react';
import SubHeader from 'components/molecules/header/SubHeader';
import SelectOptions from 'components/atoms/form/SelectOptions';
import Button from 'components/atoms/buttons/Button';
import TextArea from 'components/atoms/form/TextArea';
import RadioButton from 'components/atoms/buttons/RadioButton';

function Settings() {
  return (
    <AdminLayout title="settings">
      <div className="admin-h2">subscription</div>
      <div className="text-sm text-black font-nunito-light mt-23 mb-27">
        You currently have the{' '}
        <span className="font-bold ">Plus Subscription</span> Package.
      </div>
      <div className="hr-b pb-30">
        <Button transform="uppercase" color="gray" className="w-312 h-33">
          upgrade subscription
        </Button>
      </div>
      <div className="admin-h2 mt-10 mb-20">your payment details</div>
      <div className="admin-label mb-20">payments going to</div>
      <div className="flex mb-15">
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
      <div className="hr-b pb-23 flex justify-between">
        <div className="card-link ">Add Cards</div>
        <Button transform="uppercase" color="gray" className="w-141 h-33">
          Save
        </Button>
      </div>
      <div className="hr-b pb-30">
        <div className="admin-h2 mt-15 mb-20">store currency</div>
        <div className="flex justify-between">
          <SelectOptions width="180" label="SHOW 50" />
          <Button transform="uppercase" color="gray" className="w-141 h-33">
            Save
          </Button>
        </div>
      </div>
      <div className="admin-h2 mt-15 mb-20">Self Fulfil Message</div>
      <div className="w-468">
        <TextArea
          placeholder="MAX 500 CHARACTERS"
          label="Edit your message that will appear to customers.if you choose the self fulfil."
        />
      </div>
      <Button
        transform="uppercase"
        color="gray"
        className="w-215 h-33 mt-32 mb-243"
      >
        Save
      </Button>
    </AdminLayout>
  );
}

export default Settings;
