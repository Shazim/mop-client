import MenuTable from 'components/Tables/menuTable';
import React, { useEffect, useState } from 'react';
import { AdminLayout } from 'Layout';
import TextField from 'components/atoms/form/TextField';
import { Form } from 'components/app/forms';
import Button from 'components/atoms/buttons/Button';
import { usePost } from 'hooks';
import { createPriceSheet } from 'api/api-services';

const PricingSheet = () => {
  const [initalValues, setInitialValues] = useState({
    name: '',
    price_sheet_entries_attributes: [{ price: '' }],
  });

  const [handleCreatePrice, { data: dataPost, loading }] =
    usePost(createPriceSheet);

  const onSubmit = (data) => {
    console.log('data', data);
    // handleCreatePrice({
    //   variables: data,
    // });
  };
  useEffect(() => {
    if (dataPost) {
      setInitialValues({ ...initalValues, key: dataPost?.key });
    }
  }, [dataPost]);

  return (
    <AdminLayout title="pricing and products" subtitle="Create New Price Sheet">
      <Form
        initialValues={initalValues}
        onSubmit={onSubmit}
        // validationSchema={exhibitionSchema}
        enableReinitialize={true}
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
            <div className="flex justify-end mt-47 mb-20">
              <Button className="w-240 h-33" onClick={handleSubmit}>
                save Price sheet
              </Button>
            </div>
          </div>
        )}
      </Form>
    </AdminLayout>
  );
};

export default PricingSheet;
