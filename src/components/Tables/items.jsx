import React, { useState } from 'react';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import Data from './data';
import { useFormikContext } from 'formik';
import { toast } from 'react-toastify';

const Items = ({ data }) => {
  const { errors, values, setFieldValue } = useFormikContext() || {};

  const [showData, setShowData] = useState(false);
  const [value, setValue] = useState('');

  const { priceSheetAttributes } = values;

  const handleClick = () => () => {
    setShowData(!showData);
  };
  const copyPriceSheetAttributes = { ...priceSheetAttributes };
  // console.log('item', data);
  const handleSize = (id) => {
    if (copyPriceSheetAttributes[id]) {
      delete copyPriceSheetAttributes[id];
    } else {
      copyPriceSheetAttributes[id] = {
        ...copyPriceSheetAttributes[id],
        size: id,
      };
    }
    setFieldValue('priceSheetAttributes', copyPriceSheetAttributes);
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

  console.log('errors', errors);

  return (
    <>
      <div className=" flex ">
        <div className="w-20 ml-22 mt-13 ">
          {showData ? null : <CheckBox onChange={() => handleSize(data?.id)} />}
        </div>
        <div className="flex-grow  w-134 ml-55 mt-13 font-nunito-normal text-left font-light text-base leading-22 text-black">
          {data.name}
        </div>
        <div>
          <input
            name="price"
            label=""
            className=" h-20 w-101  mr-50 sm:mr-10 mt-8 pl-18 font-nunito-normal font-light text-base leading-22 text-black"
            onChange={handlePrice}
            value={value}
            type="number"
          />
        </div>
        <div
          className="mt-19 mr-30 sm:mr-8 cursor-pointer"
          onClick={handleClick()}
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
      {showData && <Data papers={data.papers} size={data.id} />}
      <div className="hr-b mt-20"></div>
    </>
  );
};

export default Items;
