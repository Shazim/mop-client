// ====================== IMPORTED LIBRARIES ========================
import React, { useState } from 'react';
import { usePost } from 'hooks';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
// ====================== IMPORTED COMPONENTS ========================
import PriceSheetForm from 'components/PriceSheet';
import { AdminLayout } from 'Layout';
// ====================== IMPORTED API ========================
import { createPriceSheet } from 'api/api-services';
import withArtistRoute from 'hoc/withArtistRoute';

const PricingSheet = () => {
  const [initalValues, setInitialValues] = useState({
    name: '',
    priceSheetAttributes: {},
  });
  const history = useHistory();
  const [handleCreatePrice, { data: dataPost, loading }] =
    usePost(createPriceSheet);

  useEffect(() => {
    if (dataPost) {
      history.push('/artist/pricing-and-products');
    }
  }, [dataPost]);

  const onSubmit = (data) => {
    const name = data?.name;
    const priceSheetAttributes = data?.priceSheetAttributes;
    let price_sheet_entries_attributes = [];
    if (priceSheetAttributes) {
      Object.entries(priceSheetAttributes).map(([key, value]) => {
        price_sheet_entries_attributes.push(value);
      });
    }
    handleCreatePrice({
      variables: { price_sheet: { name, price_sheet_entries_attributes } },
    });
  };

  return (
    <AdminLayout title="pricing and products" subtitle="Create New Price Sheet">
      <PriceSheetForm onSubmit={onSubmit} initalValues={initalValues} />
    </AdminLayout>
  );
};

export default withArtistRoute(PricingSheet);
