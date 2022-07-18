import React, { useState } from 'react';
import { priceSheetSchema } from 'validation';
import TextField from 'components/atoms/form/TextField';
import { Form } from 'components/app/forms';
import Button from 'components/atoms/buttons/Button';
import MenuTable from 'components/Tables/menuTable';

function PriceSheetForm({
  onSubmit,
  initalValues,
  buttonLabel = 'save Price sheet',
}) {
  return (
    <Form
      initialValues={initalValues}
      onSubmit={onSubmit}
      validationSchema={priceSheetSchema}
      enableReinitialize={true}
    >
      {({ handleSubmit, values }) => (
        <div className="">
          <TextField
            label="Price Sheet Name"
            name="name"
            className="h-38 w-60%  "
            placeholder="MAX 100 CHARACTERS"
          />

          <div className="hr-b mt-20 "></div>
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
    </Form>
  );
}

export default PriceSheetForm;
