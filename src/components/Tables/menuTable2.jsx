import React, { useEffect, useState } from 'react';

import Items2 from './items2';

const MenuTable2 = ({ data }) => {
  const [dataArray, setDataArray] = useState([]);
  useEffect(() => {
    if (data) {
      Object.entries(data).map(([key, value]) => {
        if (key === 'entries') {
          setDataArray(value);
        }
      });
    }
  }, [data]);
  return (
    <>
      <div className=" bg-white flex  h-42 ">
        <div className=" pl-16 flex-grow mb-5 mt-_5 font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider  ">
          size
        </div>

        <div className="w-51 sm:mr-50  mr-130  mt-_5 font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider">
          Price
        </div>
      </div>
      {dataArray?.map((data) => (
        <Items2 data={data} />
      ))}
    </>
  );
};

export default MenuTable2;
