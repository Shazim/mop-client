import MenuTable from 'components/Tables/MenuTable';
import React, { useState } from 'react';
import { AdminLayout } from 'Layout';
import TextField from 'components/atoms/form/TextField';
import { Form } from 'components/app/forms';
import { exhibitionSchema } from 'validation';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import Button from 'components/atoms/buttons/Button';

const PricingSheet = () => {
  const [initalValues, setInitialValues] = useState({
    room_name: '',
    artwork_ids: {},
    status: true,
    draft: false,
    exhibition_style_id: '',
    key: '',
  });

  const onSubmit = (data) => {};

  return (
    <AdminLayout title="pricing and products" subtitle="Create New Price Sheet">
      <Form
        initialValues={initalValues}
        onSubmit={onSubmit}
        validationSchema={exhibitionSchema}
        enableReinitialize={true}
      >
        {({ handleSubmit, values }) => (
          <div className="">
            <TextField
              label="Price Sheet Name"
              name="price-name"
              className="h-33 w-370 pt-10 resize-none"
              placeholder="MAX 100 CHARACTERS"
            />

            <div className="hr-b mt-35 "></div>
            <div className=" mt-12 font-avenir-reg font-medium text-xl text-secondary leading-54 uppercase tracking-wider">
              Pricing
            </div>
            <MenuTable />
            <div className="flex justify-end mt-47">
              <Button className="w-240 h-33">save Price sheet</Button>
            </div>
          </div>
        )}
      </Form>
    </AdminLayout>
  );
};

export default PricingSheet;
