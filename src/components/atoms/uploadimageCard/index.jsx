import React from 'react';
import { useFormikContext } from 'formik';

function UploadImageCard(id, name, label) {
  const {
    handleBlur,
    handleChange,
    setFieldValue,
    errors = {},
    touched = {},
    values,
  } = useFormikContext() || {};

  const customChange = (name, files) => {
    let copyFiles = [];
    // setFieldValue(name, files);
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
  };

  return (
    <div className="w-220 bg-white h-220 flex items-center ">
      <label
        for="1"
        className="font-bold text-sm text-secondary tracking leading-32 cursor-pointer text-center w-122 h-33 mx-auto bg-gray"
      >
        {label}
      </label>

      <FormField
        accept="image/*"
        className="hidden"
        multiple="multiple"
        id={id}
        name={name}
        customChange={customChange}
        // onChange={fileReader}
        // onBlur={handleBlur}
        type="file"
      />
    </div>
  );
}

export default UploadImageCard;
