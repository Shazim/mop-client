import React, { useState } from 'react';
import { AdminLayout } from 'Layout';
import { useParams } from 'react-router';
import { useFetch, usePost } from 'hooks';
import { editPriceSheet, priceSheetDetail, priceSheet } from 'api/api-services';
import PriceSheetForm from 'components/PriceSheet';
import { useEffect } from 'react';

const EditPriceSheet = () => {
  const params = useParams();
  const { id } = params;
  const { data = {} } = useFetch(priceSheetDetail, { variables: id });
  const { data: getData } = useFetch(priceSheet);

  const [editPost, { data: editResponse, loading, status }] =
    usePost(editPriceSheet);

  const [initalValues, setInitialValues] = useState({
    name: '',
    priceSheetAttributes: {},
  });

  useEffect(() => {
    if (data && getData) {
      const pic = {};
      data?.entries.map(
        ({ size, price, paper_one, paper_two }) =>
          (pic[getData?.sizes.find((x) => x.name === size).id] = {
            size: getData?.sizes.find((x) => x.name === size).id,
            price: price,
            paper_one: paper_one ? '1' : undefined,
            paper_two: paper_two ? '2' : undefined,
          })
      );

      setInitialValues({
        ...initalValues,
        name: data?.name,
        priceSheetAttributes: pic,
      });
    }
  }, [data, getData]);

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
