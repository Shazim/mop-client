import SelectOptions from 'components/atoms/form/SelectOptions';
import RangeSlider from 'components/atoms/rangeslider/RangeSlider';
import MenuTable from 'components/Tables/MenuTable';
import React, { useState } from 'react';
import { AdminLayout } from 'Layout';
import TextField from 'components/atoms/form/TextField';
import { Form } from 'components/app/forms';
import { exhibitionSchema } from 'validation';
import CheckBox from 'components/atoms/checkbox/CheckBox';

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
              classes="h-113 w-100% pl-16 pt-10 resize-none"
              placeholder="MAX 100 CHARACTERS"
            />
            <div className="hr-b mt-25"></div>
            <div className="flex">
              <div className=" text-base text-secondary font-avenir-reg font-medium tracking-wider leading-55 uppercase">
                Available Product
              </div>
              <div className="ml-123 text-base text-secondary font-avenir-reg font-medium tracking-wider leading-55 uppercase">
                Paper
              </div>
            </div>
            <div className="flex justify-between">
              <div className="ml-55 font-nunito font-light leading-22 text-base">
                20
              </div>
              <div className="flex">
                <CheckBox
                  // onChange={() => handleFeature(id)}
                  // checked={artwork_ids[id] == id}
                  value="Lustre"
                />
              </div>
              <div className="flex">
                <CheckBox
                  // onChange={() => handleFeature(id)}
                  // checked={artwork_ids[id] == id}
                  value="Glossy"
                />
              </div>
              <div className="flex">
                <CheckBox
                  // onChange={() => handleFeature(id)}
                  // checked={artwork_ids[id] == id}
                  value="Metalic"
                />
              </div>
              <div className="flex">
                <CheckBox
                  // onChange={() => handleFeature(id)}
                  // checked={artwork_ids[id] == id}
                  value="Velvet"
                />
              </div>
            </div>
            <div className="hr-b mt-13"></div>
            <div className=" font-avenir-reg font-medium leading-54 text-base">
              Apply A Bulk Markup?
            </div>
            <div className=" font-nunito-light leading-22 text-base text-black ">
              Adding a bulk markup to all products will save you lots of time.
              Enter a percent or amount below. You can then edit each specific
              product markup in each row.
            </div>
            <div className="">
              <SelectOptions
                className="w-260 mt-22 mb-24"
                label="Percentage markup"
              />
              <RangeSlider />
            </div>
            <div className=" w-222 h-42  font-avenir-medium text-base leading-54 uppercase text-secondary tracking-wider">
              Cost Markup
            </div>
            <div className=" mt-16 w-145 h-52 bg-white text-center font-avenir-medium font-medium text-2xl leading-54 tracking-wider text-primary">
              +320%
            </div>
            <div className="hr-b mt-25"></div>
            <div className=" mt-37 font-avenir-reg font-medium text-xl text-secondary leading-54 uppercase tracking-wider">
              Pricing
            </div>
            <MenuTable />
          </div>
        )}
      </Form>
    </AdminLayout>
  );
};

export default PricingSheet;
