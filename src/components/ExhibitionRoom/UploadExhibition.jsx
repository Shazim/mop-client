import React from 'react';
import { FormField } from 'components/app/forms';
import { useFormikContext } from 'formik';

function UploadExhibition({ id, label }) {
  const {
    handleBlur,
    handleChange,
    setFieldValue,
    errors = {},
    touched = {},
    values,
  } = useFormikContext() || {};

  const customChange = (name, files) => {
    let _URL = window.URL || window.webkitURL;

    let imageLink = _URL.createObjectURL(files[0]);
    let imageFile = {
      image: files[0],
      imageLink,
    };
    setFieldValue(id, imageFile);
  };

  return (
    <>
      <div className="w-222 h-33 bg-gray mb-20 text-center">
        <label
          for={id}
          className=" font-bold text-sm uppercase  text-secondary tracking leading-32 cursor-pointer text-center  mx-auto "
        >
          {label}
        </label>
      </div>
      <div className=" w-100% relative bg-white h-220  border-gray-200  border-2  ">
        {values[id]?.imageLink ? (
          <img
            src={values[id].imageLink}
            className=" w-100% h-220 absolute object-cover "
          />
        ) : null}

        <FormField
          accept="image/*"
          className="hidden"
          id={id}
          name={id}
          customChange={customChange}
          type="file"
        />
      </div>
    </>
  );
}

export default UploadExhibition;
