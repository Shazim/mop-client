import React from 'react';
import { AdminLayout } from 'Layout';
import SubHeader from 'components/molecules/header/SubHeader';
import RadioButton from 'components/atoms/buttons/RadioButton';
import Button from 'components/atoms/buttons/Button';

function OrderSettings() {
  return (
    <AdminLayout>
      <SubHeader title="orders" subtitle="settings" />
      <div className="px-43">
        <div className="admin-h2 mt-34 mb-20">your payment details</div>
        <div className="admin-label mb-20">payments going to</div>
        <div className="flex mb-15">
          <div className="w-115 mr-26">
            <RadioButton value="Paypal" name="card" className="text-sm " />
          </div>
          <div className="w-214">
            <RadioButton
              value="Card ending in 0876"
              name="card"
              className="text-sm "
            />
          </div>
        </div>
        <div className="hr-b pb-23 flex justify-between">
          <div className="card-link ">Add Cards</div>
          <Button transform="uppercase" color="gray" className="w-141 h-33">
            Save
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
}

export default OrderSettings;
