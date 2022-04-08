import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import Input from '../common/Input';
import React, { useState } from 'react';

function FormField({
  className: classes = '',
  name,
  setHandler,
  style,
  type,
  customChange,
  ...otherProps
}) {
  const {
    handleBlur,
    handleChange,
    setFieldValue,
    errors = {},
    touched = {},
    values: { artwork_images_attributes } = {},
  } = useFormikContext() || {};

  const handleChangeCustom = (e) => {
    const { name, type, files } = e.target;

    if (type === 'file') {
      customChange && customChange(name, files);
      // let copyFiles = [...artwork_images_attributes];
      // Object.entries(files).map(([key, value]) => {
      //   let img = new Image();
      //   let _URL = window.URL || window.webkitURL;
      //   let imageLink = _URL.createObjectURL(value);

      //   img.onload = async function () {
      //     const imageWidth = img.width;
      //     const imageHeight = img.height;
      //     let imageFile = {
      //       image: value,
      //       imageLink,
      //       featured_image: false,
      //     };

      //     if (imageWidth > imageHeight) {
      //       imageFile.orientaion = 'landscape';
      //       await copyFiles.push(imageFile);
      //       setFieldValue('artwork_images_attributes', copyFiles);
      //     } else if (imageWidth < imageHeight) {
      //       imageFile.orientaion = 'portrait';
      //       await copyFiles.push(imageFile);
      //       setFieldValue('artwork_images_attributes', copyFiles);
      //     } else if (imageHeight == imageWidth) {
      //       imageFile.orientaion = 'square';
      //       await copyFiles.push(imageFile);
      //       setFieldValue('artwork_images_attributes', copyFiles);
      //     }
      //   };
      //   img.src = _URL.createObjectURL(value);
      // });
    } else {
      handleChange(e);
    }
  };

  return (
    <div>
      <Input
        className={classes}
        name={name}
        onBlur={handleBlur}
        onChange={handleChangeCustom}
        type={type}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
}

export default FormField;
