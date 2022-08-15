// ====================== IMPORTED API ========================
import React from 'react';
// ====================== IMPORTED COMPONENTS ========================
import { AdminLayout } from 'Layout';
import Tables from 'components/molecules/tables/Tables';
import SelectOptions from 'components/atoms/form/SelectOptions';

const Customers = () => {
  return (
    <AdminLayout title="customers">
      <div>
        <SelectOptions className="w-178" label="2020-2021" />

        <div className=" pt-28 ">
          <Tables filter={true} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Customers;
