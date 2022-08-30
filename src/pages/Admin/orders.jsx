// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
// ====================== IMPORTED COMPONENT ========================
import SelectOptions from 'components/atoms/form/SelectOptions';
import Button from 'components/atoms/buttons/Button';
import { AdminLayout } from 'Layout';
import withArtistRoute from 'hoc/withArtistRoute';

const Orders = () => {
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
        <div className="mb-33 w-187 sm:w-100%">
          <SelectOptions label="2020-2021" />
        </div>
        <div className="bg-white flex  h-42 sm:w-100% ">
          <div className="flex w-118px ml-18 items-center flex-grow sm:w-1/2">
            <div className="text-secondary text-base font-avenir-reg font-medium tracking-wider uppercase leading-10">
              MONTH
            </div>
            <img
              src="/images/icons/hide-filter.svg"
              alt=""
              className="w-16.63 h-17"
            />
          </div>
          <div className="flex mr-183 items-center sm:w-1/2 sm:mr-40">
            <div className="   text-secondary text-base font-avenir-reg font-medium tracking-wider uppercase leading-10 ">
              <span className="sm:hidden">Total</span> <span>Visiters</span>
            </div>
            <img
              src="/images/icons/hide-filter.svg"
              alt=""
              className="w-16.63 h-17 "
            />
          </div>
        </div>

        {data.map((d) => (
          <div className="flex h-60 items-center">
            <div className="sm:w-48% flex-grow font-nunito-reg text-black font-light leading-5 text-base w-180 h-22 ml-18">
              {d.date}
            </div>
            <div className="sm:w-35% sm:mr-10 flex justify-start mr-42 font-nunito-reg font-light text-black leading-5 text-base w-180 h-22">
              {d.num}
            </div>
            <Button className="sm:w-17% w-116  h-33 " color="gray">
              Export
            </Button>
            <div className="hr-b"></div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default withArtistRoute(Orders);
