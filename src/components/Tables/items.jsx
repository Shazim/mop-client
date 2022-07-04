import React, { useState } from 'react';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import Data from './data';
import { useFormikContext } from 'formik';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const Items = ({ data, select }) => {
  const { errors, values, setFieldValue } = useFormikContext() || {};

  const [showData, setShowData] = useState(false);
  const [value, setValue] = useState('');

  const { priceSheetAttributes } = values;

  useEffect(() => {
    setValue(priceSheetAttributes[data?.id]?.price);
  }, [values]);

  const handleClick = () => {
    setShowData(!showData);
  };
  const copyPriceSheetAttributes = { ...priceSheetAttributes };

  const handleSize = (id) => {
    if (copyPriceSheetAttributes[id]) {
      delete copyPriceSheetAttributes[id];
    } else {
      copyPriceSheetAttributes[id] = {
        ...copyPriceSheetAttributes[id],
        size: id,
        paper_one: data?.papers[0]?.id,
        paper_two: data?.papers[1]?.id,
      };
    }
    setFieldValue('priceSheetAttributes', copyPriceSheetAttributes);
    setShowData(!showData);
  };

  const handlePrice = (e) => {
    if (
      copyPriceSheetAttributes[data.id] &&
      copyPriceSheetAttributes[data.id]?.price != ''
    ) {
      setValue(e.target.value);
      copyPriceSheetAttributes[data.id]['price'] = e.target.value;
    } else {
      setValue('');
      toast.error('please select Size');
    }
  };

  return (
    <>
      <div className=" flex link">
        <div className="w-20 ml-22 mt-13 ">
          {showData ? null : (
            <CheckBox
              checked={
                priceSheetAttributes[data?.id] &&
                priceSheetAttributes[data?.id]?.paper_one &&
                priceSheetAttributes[data?.id]?.paper_two
              }
              onChange={() => handleSize(data?.id)}
            />
          )}
        </div>

        <div
          className="flex-grow  w-134 ml-55 mt-13 font-nunito-normal text-left font-light text-base leading-22 text-black"
          onClick={handleClick}
        >
          {data.name}
        </div>
        <div>
          {showData ? (
            <input
              name="price"
              label=""
              className=" h-22 w-101 focus:outline-none  mr-30 sm:mr-10 mt-13 pl-18 font-nunito-normal font-light text-base leading-22 text-black"
              onChange={handlePrice}
              value={value}
              type="number"
            />
          ) : null}
        </div>
        <div
          className="mt-19 mr-30 sm:mr-8 cursor-pointer"
          onClick={handleClick}
        >
          <img
            src={
              showData
                ? '/images/icons/open-option.svg'
                : '/images/icons/close-option.svg'
            }
            alt=""
          />
        </div>
      </div>
      {showData && (
        <Data papers={data.papers} size={data.id} onClick={handleClick} />
      )}
      <div className="hr-b mt-20"></div>
    </>
  );
};

export default Items;
