import MenuTable from 'components/Tables/menuTable';
import React, { useEffect, useState } from 'react';
import { AdminLayout } from 'Layout';
import TextField from 'components/atoms/form/TextField';
import { Form } from 'components/app/forms';
import Button from 'components/atoms/buttons/Button';
import { usePost } from 'hooks';
import { createPriceSheet } from 'api/api-services';
import { priceSheetSchema } from 'validation';
import PriceSheetForm from 'components/PriceSheet';

const PricingSheet = () => {
  const [initalValues, setInitialValues] = useState({
    name: '',
    priceSheetAttributes: {},
  });
  const [handleCreatePrice, { data: dataPost, loading }] =
    usePost(createPriceSheet);

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
      {/* <Form
        initialValues={initalValues}
        onSubmit={onSubmit}
        validationSchema={priceSheetSchema}
      >
        {({ handleSubmit, values }) => (
          <div className="">
            <TextField
              label="Price Sheet Name"
              name="name"
              className="h-33 w-370 pt-10 resize-none"
              placeholder="MAX 100 CHARACTERS"
            />

            <div className="hr-b mt-35 "></div>
            <div className=" mt-12 font-avenir-reg font-medium text-xl text-secondary leading-54 uppercase tracking-wider">
              Pricing
            </div>
            <MenuTable />
            <div className="flex justify-end mt-47 mb-20 ">
              <Button className="w-240 h-33 " onClick={handleSubmit}>
                <span className="uppercase"> save Price sheet</span>
              </Button>
            </div>
          </div>
        )}
      </Form> */}
    </AdminLayout>
  );
};

export default PricingSheet;
