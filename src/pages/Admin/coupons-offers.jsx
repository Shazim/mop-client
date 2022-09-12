// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
// ====================== IMPORTED COMPONENTS ========================
import Tables from 'components/molecules/tables/Tables';
import SelectOptions from 'components/atoms/form/SelectOptions';
import { AdminLayout } from 'Layout';
import withArtistRoute from 'hoc/withArtistRoute';
import { SIGNIN_SUCCESS } from 'store/actions/actionTypes';

const CouponsOffers = () => {
  return (
    <AdminLayout title="coupons and offers">
      <div>
        <SelectOptions className="w-178" label="2020-2021" />
      </div>
      <div className="pt-28">
        <Tables
          coupon={true}
          tableHeading={['Name', 'Code', 'Active Since', 'Status']}
        />
      </div>
    </AdminLayout>
  );
};

export default withArtistRoute(CouponsOffers);
