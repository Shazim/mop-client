// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
// ====================== IMPORTED COMPONENT ========================
import SimplesTables from 'components/Tables/SimplesTables';
import { AdminLayout } from 'Layout';
import withArtistRoute from 'hoc/withArtistRoute';

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

export default withArtistRoute(TaxRates);
