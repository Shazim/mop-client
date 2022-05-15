import SimplesTables from 'components/Tables/SimplesTables';
import React from 'react';
import { AdminLayout } from 'Layout';

const TaxRates = () => {
  return (
    <AdminLayout title="tax rates">
      <div>
        <div className="font-avenir-reg font-medium uppercase tracking-wider leading-54 text-secondary text-xl">
          Europe
        </div>
        <SimplesTables />
      </div>
    </AdminLayout>
  );
};

export default TaxRates;
