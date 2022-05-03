import React from 'react';
import { AdminLayout } from 'Layout';
import SubHeader from 'components/molecules/header/SubHeader';
import Tables from 'components/molecules/tables/Tables';
import SelectOptions from 'components/atoms/form/SelectOptions';

function CouponsOffers() {
  return (
    <AdminLayout>
      <SubHeader title="coupons and offers" />
      <div className="pl-43 pt-46">
        <SelectOptions className="w-178" label="2020-2021" />
      </div>
      <div className=" pt-28 px-43">
        <Tables filter={true} />
      </div>
    </AdminLayout>
  );
}

export default CouponsOffers;
