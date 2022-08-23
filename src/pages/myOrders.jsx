import React, { useState } from 'react';
import { AdminLayout } from 'Layout';
import { Form } from 'components/app/forms';
import { TextField } from 'components/atoms/form';
import Tables from 'components/molecules/tables/Tables';

import Button from 'components/atoms/buttons/Button';

const myOrders = () => {
  const obj = [
    {
      order: '#123456',
      date: '12/10/21',

      amount: '£190.00',
      status: 'completed',
      details: {
        'customer Number': '#123456',
        'customer name': 'mr dean horlock',
        'shipping address': '2 Green Street, Poole. BH14 6HG',
        'order date': '01/10/21',
        'shipping date': '01/10/21',
        'order total': '190.00',
        image: {
          size: '14 X 11 (36 x 28cm)',
          paper: 'lustre',
          frame: 'Wood, Light',
          url: '/images/table/tree.png',
        },
      },
    },
    {
      'order ': '#123456',
      date: '12/10/21',
      amount: '£190.00',

      status: 'completed',
      details: {
        'customer Number': '#123456',
        'customer name': 'mr dean horlock',
        'shipping address': '2 Green Street, Poole. BH14 6HG',
        'order date': '01/10/21',
        'shipping date': '01/10/21',
        'order total': '190.00',
        image: {
          size: '14 X 11 (36 x 28cm)',
          paper: 'lustre',
          frame: 'Wood, Light',
          url: '/images/table/tree.png',
        },
      },
    },
    {
      'order ': '#123456',
      date: '12/10/21',
      amount: '£190.00',

      status: 'completed',
      details: {
        'customer Number': '#123456',
        'customer name': 'mr dean horlock',
        'shipping address': '2 Green Street, Poole. BH14 6HG',
        'order date': '01/10/21',
        'shipping date': '01/10/21',
        'order total': '190.00',
        image: {
          size: '14 X 11 (36 x 28cm)',
          paper: 'lustre',
          frame: 'Wood, Light',
          url: '/images/table/tree.png',
        },
      },
    },
    {
      'order ': '#123456',
      date: '12/10/21',
      amount: '£190.00',

      status: 'completed',
      details: {
        'customer number': '#123456',
        'customer name': 'mr dean horlock',
        'shipping address': '2 Green Street, Poole. BH14 6HG',
        'order date': '01/10/21',
        'shipping date': '01/10/21',
        'order total': '190.00',
        image: {
          size: '14 X 11 (36 x 28cm)',
          paper: 'lustre',
          frame: 'Wood, Light',
          url: '/images/table/tree.png',
        },
      },
    },
  ];
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
                    className="h-37 "
                    label="start date"
                    placeholder="select a start date"
                  />
                </div>
                <div className="w-48% h-45 sm:w-100%">
                  <TextField
                    className="h-37 "
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
            <Tables
              filter={true}
              tableHeading={['order no', 'date', 'Amount', 'status']}
              obj={obj}
              img={true}
            />
          </>
        )}
      </Form>
    </AdminLayout>
  );
};

export default myOrders;
