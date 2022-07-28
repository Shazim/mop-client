// ====================== IMPORTED LIBRARIES ========================
import React, { useState } from 'react';
// ====================== IMPORTED COMPONENT ========================
import Button from 'components/atoms/buttons/Button';
import { TextField } from 'components/atoms/form';
import SubHeader from 'components/molecules/header/SubHeader';
import MobileMenu from 'components/molecules/mobilemenu/MobileMenu';
import Tables from 'components/molecules/tables/Tables';
import { Form } from 'components/app/forms';
import { AdminLayout } from 'Layout';

const OrderDetail = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();
  return (
    <AdminLayout
      title={`${isMenuOpen ? 'Menu' : 'orders'}`}
      subtitle="Order Detailed"
    >
      <Form
        initialValues={{
          name: '',
          note: '',
          artwork_images_attributes: [],
          edition_type: 'open',
          sell_via: 'with_us',
          sellable: false,
          exhibitionable: false,
          colour_ids: {},
          style_ids: {},
          status: true,
        }}
        // onSubmit={data}
        // validationSchema={artworkSchema}
      >
        {() => (
          <div className="w-100% md:w-89% sm:w-100%">
            {!isMenuOpen ? (
              <div className=" md:p-25 sm:p-18">
                <div className="flex justify-between mb-45 items-center xl:flex-col lg:flex-col md:flex-col sm:flex-col sm:p-30">
                  <div className="w-55% flex justify-between xl:w-100% lg:w-100% md:w-100% sm:flex-col sm:w-100% ">
                    <div className="w-48% sm:w-100%">
                      <TextField
                        classes="h-37 w-100%"
                        label="start date"
                        placeholder="select a start date"
                      />
                    </div>
                    <div className="w-48% sm:w-100%">
                      <TextField
                        classes="h-37 w-100%"
                        label="end date"
                        placeholder="select a start date"
                      />
                    </div>
                  </div>
                  <div className="w-40% flex justify-between xl:w-100% xl:justify-between lg:w-100% lg:justify-between md:w-100% md:justify-between sm:w-100%">
                    <Button
                      className="w-45% h-37 mt-22 xl:w-48% lg:w-48% md:w-48% sm:w-45%"
                      color="gray"
                    >
                      UPDATE VIEW
                    </Button>
                    <Button
                      className="w-45% h-37 mt-22 xl:w-48% lg:w-48% md:w-48% sm:w-45%"
                      color="gray"
                    >
                      RESET FILTER
                    </Button>
                  </div>
                </div>
                <Tables filter={true} />
              </div>
            ) : (
              <MobileMenu />
            )}
          </div>
        )}
      </Form>
    </AdminLayout>
  );
};

export default OrderDetail;
