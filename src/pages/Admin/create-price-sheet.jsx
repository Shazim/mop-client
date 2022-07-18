import React, { useState } from 'react';
import { AdminLayout } from 'Layout';
import { usePost } from 'hooks';
import { createPriceSheet } from 'api/api-services';
import PriceSheetForm from 'components/PriceSheet';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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
      history.push('/price-sheets');
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

export default PricingSheet;
