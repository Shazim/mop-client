import React from 'react';
import { AdminLayout } from 'Layout';
import { Form } from 'components/app/forms';
import { TextField } from 'components/atoms/form';
import Button from 'components/atoms/buttons/Button';
import Tables from 'components/molecules/tables/Tables';
import withCustomerRoute from 'hoc/withCustomerRoute';
const customerOrderSumary = () => {
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
    <AdminLayout title="My Orders" subtitle="Summary">
      <Form
        initialValues={{
          startdate: '',
          endDate: '',
        }}
      >
        {() => (
          <>
            <div className="flex justify-between -mt-14 gap-26 mb-65  items-end xl:flex-col lg:flex-col md:flex-col sm:flex-col sm:p-30 sm:hidden">
              <div className="w-1/4 md:w-1/4 sm:w-100%">
                <TextField
                  className="h-37"
                  label="start date"
                  placeholder="SELECT A START DATE"
                  mb={2}
                />
              </div>
              <div className="w-1/4 md:w-1/4 sm:w-100%">
                <TextField
                  className="h-37"
                  label="end date"
                  placeholder="SELECT AN END DATE"
                  mb={2}
                />
              </div>
              <div className="w-1/4 md:w-1/4 sm:w-100%">
                <Button className="w-100% h-37" color="primary">
                  UPDATE DASHBOARD
                </Button>
              </div>
              <div className="w-1/4 md:w-1/4 sm:w-100%">
                <Button className="w-100% h-37" color="gray">
                  RESET FILTER
                </Button>
              </div>
            </div>
            <div className="pb-250">
              <Tables
                filter={true}
                tableHeading={['order no', 'date', 'Amount', 'status']}
                obj={obj}
                img={true}
              />
            </div>
          </>
        )}
      </Form>
    </AdminLayout>
  );
};

export default withCustomerRoute(customerOrderSumary);
