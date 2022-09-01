import { AdminLayout } from 'Layout';
import Button from 'components/atoms/buttons/Button';
import { Form } from 'components/app/forms';
import { TextField } from 'components/atoms/form';

import React, { useState } from 'react';
import GraphAvgViewTime from './data-graphs/GraphAvgViewTime';
import GraphVisitorsData from './data-graphs/GraphVisitorsData';
import withArtistRoute from 'hoc/withArtistRoute';

const AdminAnalytics = () => {
  const [fieldType, setFieldType] = useState('text');

  const handleDatefieldFocus = (e) => {
    setFieldType('date');
  };
  return (
    <AdminLayout title="analytics">
      <Form
        initialValues={{
          startdate: '',
          endDate: '',
        }}
      >
        {() => (
          <>
            <div className="flex justify-between -mt-14 gap-26 mb-65  items-end xl:flex-col lg:flex-col md:flex-col sm:flex-col sm:p-30 sm:hidden">
              <div
                className="w-1/4 md:w-1/4 sm:w-100%"
                onClick={() => handleDatefieldFocus()}
              >
                <TextField
                  className="h-37"
                  label="start date"
                  placeholder="SELECT A START DATE"
                  mb={2}
                  type={fieldType}
                />
              </div>
              <div
                className="w-1/4 md:w-1/4 sm:w-100%"
                onClick={() => handleDatefieldFocus()}
              >
                <TextField
                  className="h-37"
                  label="end date"
                  placeholder="SELECT AN END DATE"
                  mb={2}
                  type={fieldType}
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
            <div className="-mt-38 flex bg-white sm:hidden">
              <div className="pl-37 sm:w-100%">
                <div className="pt-24 font-Avenir-reg font-medium leading-54 tracking-wider text-secondary text-xl uppercase">
                  monthly vistors
                </div>
                <div className="font-Avenir-reg font-medium leading-54 tracking-wider text-5xl text-primary">
                  3,265
                </div>
                <div className="font-Avenir-reg font-medium leading-54 tracking-wider text-secondary text-xl uppercase">
                  unique views
                </div>
                <div className="pb-50 font-Avenir-reg font-medium leading-54 tracking-wider text-5xl text-primary">
                  1,024
                </div>
              </div>
              <div className="visitors-data-graph h-320 w-70% sm:w-100%">
                <GraphVisitorsData />
              </div>
            </div>
            <div className="flex mt-21 sm:hidden">
              <div className="flex  w-70% bg-white">
                <div className=" pl-37">
                  <div className="pt-24 font-Avenir-reg font-medium leading-54 tracking-wider text-secondary text-xl uppercase">
                    monthly Sales
                  </div>
                  <div className="font-Avenir-reg font-medium leading-54 tracking-wider text-5xl text-primary">
                    602
                  </div>
                  <div className="font-Avenir-reg font-medium leading-54 tracking-wider text-secondary text-xl uppercase">
                    conversion
                  </div>
                  <div className="pb-50 font-Avenir-reg font-medium leading-54 tracking-wider text-5xl text-primary">
                    0.2
                  </div>
                </div>
              </div>
              <div className="ml-28 bg-white w-30%">
                <div className=" pt-14 pl-39 font-Avenir-reg font-medium leading-54 tracking-wider text-secondary text-xl uppercase">
                  recent orders
                </div>
                <div className="flex mt-10 pl-39">
                  <div className="w-84 h-84 relative bg-gray rounded-full">
                    <img
                      src="images/icons/clock.svg"
                      alt=""
                      className="absolute w-35 h-35 mt-24 ml-25 "
                    />
                  </div>
                  <div className="pl-28 ">
                    <div className="font-Avenir-reg font-medium leading-54 tracking-wider text-5xl text-primary">
                      £600
                    </div>
                    <div className="font-Avenir-reg font-medium leading-54 tracking-wider text-secondary text-tiny uppercase">
                      <span>#1276 </span>
                      <span className="pl-10">dean horlock</span>
                    </div>
                  </div>
                  <img
                    src={window.location.origin + '/images/icons/nexticon.svg'}
                    alt=""
                    className="h-22 w-14 mt-20 ml-30"
                  />
                </div>
                <div className="flex mt-10 pl-39">
                  <div className="w-84 h-84 relative bg-gray rounded-full">
                    <img
                      src={window.location.origin + '/images/icons/clock.svg'}
                      alt=""
                      className="absolute w-35 h-35 mt-24 ml-25 "
                    />
                  </div>
                  <div className="pl-28 ">
                    <div className="font-Avenir-reg font-medium leading-54 tracking-wider text-5xl text-primary">
                      £600
                    </div>
                    <div className="font-Avenir-reg font-medium leading-54 tracking-wider text-secondary text-tiny uppercase">
                      <span>#1276 </span>
                      <span className="pl-10">dean horlock</span>
                    </div>
                  </div>
                  <img
                    src={window.location.origin + '/images/icons/nexticon.svg'}
                    alt=""
                    className="h-22 w-14 mt-20 ml-30"
                  />
                </div>
              </div>
            </div>
            <div className="mt-22 flex mb-48 bg-white sm:hidden">
              <div className="pl-37">
                <div className="pt-24 font-Avenir-reg font-medium leading-54 tracking-wider text-secondary text-xl uppercase">
                  Avg View Time
                </div>
                <div className="font-Avenir-reg font-medium leading-54 tracking-wider text-5xl text-primary">
                  <span>7</span> <span className="text-2xl">Minutes</span>
                </div>
                <div className="pt-17 font-Avenir-reg font-medium leading-54 tracking-wider text-secondary text-xl uppercase">
                  retention
                </div>
                <div className="pb-50 font-Avenir-reg font-medium leading-54 tracking-wider text-5xl text-primary">
                  68%
                </div>
              </div>
              <div className="w-80% pt-24 h-320">
                <GraphAvgViewTime />
              </div>
            </div>
            <div className="hidden sm:block">
              <h2 className="leading-54 font-medium text-primary text-3xl p-30">
                Analytics cannot be providd in mobile view.
              </h2>
            </div>
          </>
        )}
      </Form>
    </AdminLayout>
  );
};

export default withArtistRoute(AdminAnalytics);
