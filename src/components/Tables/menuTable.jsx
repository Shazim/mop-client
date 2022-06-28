import React from 'react';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import { useFetch } from 'hooks';
import { priceSheet } from 'api/api-services';
import Items from './items';
import { useFormikContext } from 'formik';
import ErrorMessage from 'components/app/forms/ErrorMessage';

function MenuTable() {
  const { data: getData } = useFetch(priceSheet);
  const { sizes = [] } = getData || [];
  const { errors, touched } = useFormikContext() || {};

  return (
    <>
      <div className=" bg-white flex  h-42 ">
        <div className="flex ml-22 ">
          <CheckBox className="mt-10" />
        </div>
        <div className=" pl-44 flex-grow mb-5 mt-_5 font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider  ">
          size
        </div>

        <div className="w-51  mr-130 sm:mr-70  mt-_5 font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider">
          Price
        </div>
      </div>
      {sizes.map((data) => (
        <Items data={data} />
      ))}
      <ErrorMessage
        error={errors?.priceSheetAttributes}
        visible={touched?.['priceSheetAttributes']}
      />
    </>
  );
}

export default MenuTable;
