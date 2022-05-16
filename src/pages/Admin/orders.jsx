import SelectOptions from 'components/atoms/form/SelectOptions';
import Button from 'components/atoms/buttons/Button';
import React from 'react';
import { AdminLayout } from 'Layout';

function Orders() {
  const data = [
    { id: 1, date: 'April2020', num: 589 },
    { id: 1, date: 'April2020', num: 589 },
    { id: 1, date: 'April2020', num: 589 },
    { id: 1, date: 'April2020', num: 589 },
    { id: 1, date: 'April2020', num: 589 },
    { id: 1, date: 'April2020', num: 589 },
  ];

  return (
    <AdminLayout title="orders" subtitle="reports">
      <div className="">
        <div className="text-base text-secondary font-avenir-reg font-medium tracking-wider uppercase mb-12">
          Sales
        </div>
        <div className="mb-33 w-187">
          <SelectOptions label="2020-2021" />
        </div>
        <div className="bg-white flex w-1035 h-42 ">
          <div className="flex w-118px ml-18 mt-1 mb-1 flex-grow">
            <div className="text-secondary text-base font-avenir-reg font-medium tracking-wider uppercase leading-10">
              MONTH
            </div>
            <img
              src="/images/icons/hide-filter.svg"
              alt=""
              className="w-16.63 h-17 mt-14 mb-12.58"
            />
          </div>
          <div className="flex mr-183">
            <div className=" text-secondary text-base font-avenir-reg font-medium tracking-wider uppercase leading-10 ">
              Total Visiters
            </div>
            <img
              src="/images/icons/hide-filter.svg"
              alt=""
              className="w-16.63 h-17 mt-14 mb-12.58 "
            />
          </div>
        </div>

        {data.map((d) => (
          <div className="flex h-60 items-center">
            <div className="flex-grow font-nunito-reg text-black font-light leading-5 text-base w-180 h-22 ml-18">
              {d.date}
            </div>
            <div className="flex justify-start mr-42 font-nunito-reg font-light text-black leading-5 text-base w-180 h-22">
              {d.num}
            </div>
            <Button className="w-116 h-33 " color="gray">
              Export
            </Button>
            <div className="hr-b"></div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}

export default Orders;
