// ====================== IMPORTED LIBRARIES ========================
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useFetch, usePost } from 'hooks';
import { useEffect } from 'react';
// ====================== IMPORTED COMPONENTS ========================
import { AdminLayout } from 'Layout';
import PriceSheetForm from 'components/PriceSheet';
// ====================== IMPORTED API ========================
import { editPriceSheet, priceSheetDetail } from 'api/api-services';

const EditPriceSheet = () => {
  const params = useParams();
  const { id } = params;
  const { data } = useFetch(priceSheetDetail, { variables: id });

  const [editPost, { data: editResponse, loading, status }] =
    usePost(editPriceSheet);

  const [initalValues, setInitialValues] = useState({
    name: '',
    priceSheetAttributes: {},
  });

  useEffect(() => {
    if (data) {
      const copyData = {};
      data?.entries.map(
        ({ size, price, paper_one, paper_two }) =>
          (copyData[size] = {
            size,
            price,
            paper_one,
            paper_two,
          })
      );
      setInitialValues({
        ...initalValues,
        name: data?.name,
        priceSheetAttributes: copyData,
      });
    }
  }, [data]);

  const onSubmit = (data) => {
    const name = data?.name;
    const priceSheetAttributes = data?.priceSheetAttributes;
    let price_sheet_entries_attributes = [];
    if (priceSheetAttributes) {
      Object.entries(priceSheetAttributes).map(([key, value]) => {
        price_sheet_entries_attributes.push(value);
      });
    }
    editPost(
      {
        variables: { price_sheet: { name, price_sheet_entries_attributes } },
      },
      id
    );
  };

  return (
    <AdminLayout title="pricing and products" subtitle="Edit Price Sheet">
      <PriceSheetForm onSubmit={onSubmit} initalValues={initalValues} />
    </AdminLayout>
  );
};

export default EditPriceSheet;
