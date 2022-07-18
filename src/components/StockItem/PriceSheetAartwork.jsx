import React, { useEffect, useState } from 'react';
import { useFetch } from 'hooks';
import { PriceSheetCollection } from 'api/api-services';
import SelectOptions from 'components/atoms/form/SelectOptions';
import { useFormikContext } from 'formik';

const PriceSheetAartwork = () => {
  const {
    setFieldValue,
    values: { price_sheet_id },
  } = useFormikContext() || {};
  const { data: getData } = useFetch(PriceSheetCollection);
  const { price_sheets } = getData || [];
  const [option, SetOption] = useState([]);
  const [dataArray, setDataArray] = useState([]);
  const slectedItem = (e) => {
    const index = e;
    //console.log('tagreted value', index);
    setFieldValue('price_sheet_id', index);
  };
  console.log('id', price_sheet_id);

  useEffect(() => {
    if (getData) {
      Object.entries(getData).map(([key, value]) => {
        if (key === 'price_sheets') {
          setDataArray(value);
        }
      });
    }
  }, [getData]);

  useEffect(() => {
    let testData = [];
    dataArray.map((data) => {
      testData.push({ value: data.id, label: data.name });
    });
    SetOption(testData);
  }, [dataArray]);
  return (
    <>
      <div className="border-border border-t-2 my-25"></div>
      <div className="w-150  font-avenir-reg font-medium text-xl uppercase leading-54 tracking-wider text-secondary">
        Price Sheet
      </div>
      <div className="flex">
        <div className="font-nunito-bold font-bold text-secondary text-sm leading-32 tracking">
          Choose WHICH PRICE SHEET TO APPLY:
        </div>
        <div className="w-18 h-18 mt-6 ml-10">
          <img src="images/question.svg" alt="" />
        </div>
      </div>
      <SelectOptions
        label="choose an option"
        className="mt-20 "
        option={option}
        onChange={slectedItem}
      />
      <div className="mt-40 font-nunito-reg font-reg text-base leading-22 text-secondary">
        Shipping will be included in our printer’s fulfilment costs.{' '}
      </div>
    </>
  );
};

export default PriceSheetAartwork;
