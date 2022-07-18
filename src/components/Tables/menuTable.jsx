import React, { useState, useEffect } from 'react';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import { useFetch } from 'hooks';
import { priceSheet } from 'api/api-services';
import { toast } from 'react-toastify';
import Items from './items';
import { useFormikContext } from 'formik';
import ErrorMessage from 'components/app/forms/ErrorMessage';

function MenuTable() {
  const { data: getData } = useFetch(priceSheet);
  const { sizes = [] } = getData || [];
  const { errors, touched, values, setFieldValue } = useFormikContext() || {};
  const [showData, setShowData] = useState(false);

  const { priceSheetAttributes } = values;

  const handleAllChecks = () => {
    let copyPriceSheetAttributes = {};
    sizes.map((data) => {
      if (sizes.length == Object.keys(priceSheetAttributes).length) {
        delete copyPriceSheetAttributes[data?.id];
        setShowData(false);
      } else {
        copyPriceSheetAttributes[data?.id] = {
          ...copyPriceSheetAttributes[data?.id],
          size: data?.id,
          paper_one: data?.papers[0]?.id,
          paper_two: data?.papers[1]?.id,
        };
        setShowData(true);
      }
    });
    setFieldValue('priceSheetAttributes', copyPriceSheetAttributes);
  };

  return (
    <>
      <div className=" bg-white flex   h-42 ">
        <div className="flex ml-22 ">
          <CheckBox
            className="mt-10"
            onChange={handleAllChecks}
            checked={sizes.length == Object.keys(priceSheetAttributes).length}
          />
        </div>
        <div className=" pl-44 flex-grow mb-5 mt-_5 font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider  ">
          size
        </div>
        <div className="mb-5 mt-_5  flex-grow font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider ">
          The Coast Price
        </div>
        <div className="mb-5 mt-_5 flex-grow font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider ">
          The Mark-Up
        </div>
        <div className="w-51  mr-130 sm:mr-70  mt-_5 font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider">
          Price
        </div>
      </div>
      {sizes.map((data) => (
        <Items data={data} showDataState={showData} />
      ))}
      <ErrorMessage
        error={errors?.priceSheetAttributes}
        visible={touched?.['priceSheetAttributes']}
      />
    </>
  );
}

export default MenuTable;
