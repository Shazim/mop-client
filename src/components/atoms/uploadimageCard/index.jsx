import React from 'react';
import { FormField } from 'components/app/forms';
import { useFormikContext } from 'formik';

function UploadImageCard({ id, label }) {
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
    <div className="w-220 relative bg-white h-220 flex items-center ">
      {values[id]?.imageLink ? (
        <img src={values[id].imageLink} className="absolute w-220 h-220 " />
      ) : null}

      <label
        for={id}
        className="z-1 font-bold text-sm uppercase text-secondary tracking leading-32 cursor-pointer text-center w-122 h-33 mx-auto bg-gray"
      >
        {label}
      </label>

      <FormField
        accept="image/*"
        className="hidden"
        id={id}
        name={id}
        customChange={customChange}
        type="file"
      />
    </div>
  );
}

export default UploadImageCard;
