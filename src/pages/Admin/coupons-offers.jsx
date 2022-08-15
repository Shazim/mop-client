// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
// ====================== IMPORTED COMPONENTS ========================
import Tables from 'components/molecules/tables/Tables';
import SelectOptions from 'components/atoms/form/SelectOptions';
import { AdminLayout } from 'Layout';

const CouponsOffers = () => {
  return (
    <AdminLayout title="coupons and offers">
      <div>
        <SelectOptions className="w-178" label="2020-2021" />
      </div>
      <div className="pt-28">
        <Tables filter={true} />
      </div>
    </AdminLayout>
  );
};

export default CouponsOffers;
