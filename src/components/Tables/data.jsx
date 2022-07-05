import React from 'react';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import { useFormikContext } from 'formik';

const Data = ({ papers, size, onClick }) => {
  const {
    handleBlur,
    handleChange,
    errors = {},
    touched = {},
    values,
    setFieldValue,
  } = useFormikContext() || {};

  const { priceSheetAttributes } = values;

  const handlePaper = (paperId, index) => {
    const copyPriceSheetAttributes = { ...priceSheetAttributes };
    if (
      (copyPriceSheetAttributes[size]?.paper_one &&
        !copyPriceSheetAttributes[size]?.paper_two &&
        index == 0) ||
      (copyPriceSheetAttributes[size] &&
        !copyPriceSheetAttributes[size]?.paper_one &&
        copyPriceSheetAttributes[size]?.paper_two &&
        index == 1)
    ) {
      delete copyPriceSheetAttributes[size];
    } else {
      if (copyPriceSheetAttributes[size]?.paper_one && index == 0) {
        delete copyPriceSheetAttributes[size]['paper_one'];
      } else if (!copyPriceSheetAttributes[size]?.paper_one && index == 0) {
        copyPriceSheetAttributes[size] = {
          ...copyPriceSheetAttributes[size],
          paper_one: paperId,
          size,
        };
      } else if (copyPriceSheetAttributes[size]?.paper_two && index == 1) {
        delete copyPriceSheetAttributes[size]['paper_two'];
      } else if (!copyPriceSheetAttributes[size]?.paper_two && index == 1) {
        copyPriceSheetAttributes[size] = {
          ...copyPriceSheetAttributes[size],
          size,
          paper_two: paperId,
        };
      }
    }
    setFieldValue('priceSheetAttributes', copyPriceSheetAttributes);
  };

  return (
    <>
      {papers.map(({ name, id }, index) => (
        <div className=" flex  link">
          <div className="w-22 ml-22 mt-8 h-22 ">
            <CheckBox
              checked={
                (index == 0 && priceSheetAttributes[size]?.paper_one) ||
                (index == 1 && priceSheetAttributes[size]?.paper_two)
              }
              onChange={() => handlePaper(id, index)}
            />
          </div>
          <div
            className="w-134 flex-grow  pl-55 mt-8 font-nunito-normal  font-light text-base leading-22 text-black"
            onClick={onClick}
          >
            {name}
          </div>
        </div>
      ))}
    </>
  );
};

export default Data;
