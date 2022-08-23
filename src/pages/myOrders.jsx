import React, { useState } from 'react';
import { AdminLayout } from 'Layout';
import { Form } from 'components/app/forms';
import { TextField } from 'components/atoms/form';
import OrderTable from './order-table';

import Button from 'components/atoms/buttons/Button';

const myOrders = () => {
  return (
    <AdminLayout title="My Orders" subtitle="summary">
      <Form
        initialValues={{
          startdate: '',
          endDate: '',
        }}
      >
        {() => (
          <>
            <div className="flex justify-between mb-45 items-center xl:flex-col lg:flex-col md:flex-col sm:flex-col sm:p-30">
              <div className="w-55% flex justify-between xl:w-100% lg:w-100% md:w-100% sm:flex-col sm:w-100% ">
                <div className="w-48% sm:w-100%">
                  <TextField
                    classes="h-37 w-100%"
                    height="45"
                    label="start date"
                    placeholder="select a start date"
                  />
                </div>
                <div className="w-48% h-45 sm:w-100%">
                  <TextField
                    classes="w-100%"
                    label="end date"
                    placeholder="select a end date"
                  />
                </div>
              </div>
              <div className="w-40% flex justify-between xl:w-100% xl:justify-between lg:w-100% lg:justify-between md:w-100% md:justify-between sm:w-100%">
                <Button
                  className="w-45% h-37 mt-22 xl:w-48% lg:w-48% md:w-48% sm:w-45%"
                  color="primary"
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
            <OrderTable />
          </>
        )}
      </Form>
    </AdminLayout>
  );
};

export default myOrders;
