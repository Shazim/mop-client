// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
import { useFormikContext } from 'formik';
// ====================== IMPORTED COMPONENTS ========================
import CheckBox from 'components/atoms/checkbox/CheckBox';

const ImageList = ({
  imageUrl,
  name,
  size,
  id,
  iconClick,
  handleCheckbox,
  bg = 'white',
  checked,
}) => {
  const { handleBlur } = useFormikContext();

  return (
    <div
      className={`flex w-100% h-47 bg-${bg} justify-between items-center mt-12 px-12`}
    >
      <div className="flex items-center">
        <img className="w-29 h-29 rounded-sm mr-15" src={imageUrl} />
        <p
          className=" w-200 font-bold tracking leading-32 text-secondary uppercase text-sm truncate"
          title={name}
        >
          {name}
        </p>
      </div>
      <div className="flex items-center">
        <p className="font-bold tracking leading-32 text-secondary uppercase text-sm">
          {size}
        </p>
        <img
          onClick={() => iconClick(id)}
          className="w-15 h-19 rounded-sm ml-28 link"
          src="/images/dustbin.svg"
        />
        {handleCheckbox && (
          <CheckBox
            className="ml-25 h-17"
            value=""
            onBlur={handleBlur}
            onChange={(e) => handleCheckbox(id, e.target.checked)}
            checked={checked}
          />
        )}
      </div>
    </div>
  );
};

export default ImageList;
