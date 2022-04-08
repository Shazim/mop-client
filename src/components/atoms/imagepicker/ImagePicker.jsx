import { FormField } from 'components/app/forms';
import { useFormikContext } from 'formik';
import React, { useState } from 'react';
import CheckBox from '../checkbox/CheckBox';

function ImagePicker({ name, label }) {
  const {
    values: { artwork_images_attributes },
    setFieldValue,
  } = useFormikContext();

  const byte_To_MB = (size) => {
    const mbs = parseInt(Math.log(size) / Math.log(1024));
    return mbs;
  };

  const removeItem = (index) => {
    const copyArtWorkImages = [...artwork_images_attributes];
    copyArtWorkImages.splice(index, 1);
    setFieldValue('artwork_images_attributes', copyArtWorkImages);
  };

  const handleFeature = (index) => {
    let copyArtWork = [...artwork_images_attributes];
    copyArtWork[index]['featured_image'] = true;
    setFieldValue(setFieldValue('artwork_images_attributes', copyArtWork));
  };

  const customChange = (name, files) => {
    let copyFiles = [...artwork_images_attributes];
    Object.entries(files).map(([key, value]) => {
      let img = new Image();
      let _URL = window.URL || window.webkitURL;

      let imageLink = _URL.createObjectURL(value);

      img.onload = async function () {
        const imageWidth = img.width;
        const imageHeight = img.height;
        let imageFile = {
          image: value,
          imageLink,
          featured_image: false,
        };

        if (imageWidth > imageHeight) {
          imageFile.orientaion = 'landscape';
          await copyFiles.push(imageFile);
          setFieldValue('artwork_images_attributes', copyFiles);
        } else if (imageWidth < imageHeight) {
          imageFile.orientaion = 'portrait';
          await copyFiles.push(imageFile);
          setFieldValue('artwork_images_attributes', copyFiles);
        } else if (imageHeight == imageWidth) {
          imageFile.orientaion = 'square';
          await copyFiles.push(imageFile);
          setFieldValue('artwork_images_attributes', copyFiles);
        }
      };
      img.src = _URL.createObjectURL(value);
    });
  };

  return (
    <div>
      <div className="font-bold text-secondary text-sm leading-8 uppercase tracking mb-11">
        {label}
      </div>
      <div className="w-100% h-137 bg-white relative">
        <label className="w-100% h-137 bg-white relative" htmlFor="dropzone">
          <span className="w-100% h-137 bg-white flex items-center justify-center">
            <div className="text-center">
              <p className="font-bold tracking text-2xl text-gray uppercase mb-10">
                upload your image
              </p>
              <p className="font-bold tracking text-base m-auto text-gray uppercase mb-10">
                Drop your file on here or click to browse.
              </p>
              <p className="font-bold tracking text-sm text-gray uppercase">
                Max file size: 200mb, JPEG or PNG
              </p>
            </div>
          </span>
        </label>
        <FormField
          accept="image/*"
          className="z-10 opacity-0 w-100% h-137 absolute top-0"
          multiple="multiple"
          name={name}
          customChange={customChange}
          // onChange={fileReader}
          // onBlur={handleBlur}
          type="file"
        />
      </div>
      {artwork_images_attributes.map((item, index) => (
        <div className="flex w-100% h-47 bg-white justify-between items-center mt-18 px-12">
          <div className="flex items-center">
            <img className="w-29 h-29 rounded-sm mr-15" src={item?.imageLink} />
            <p className="font-bold tracking leading-32 text-secondary uppercase text-sm">
              {item?.image?.name}
            </p>
          </div>
          <div className="flex items-center">
            <p className="font-bold tracking leading-32 text-secondary uppercase text-sm">
              {byte_To_MB(item?.image?.size) + 'mb'}
            </p>
            <img
              onClick={() => removeItem(index)}
              className="w-15 h-19 rounded-sm ml-28 link"
              src="/images/dustbin.svg"
            />

            <CheckBox
              className="ml-25 h-17"
              value=""
              onChange={() => handleFeature(index)}
              defaultChecked={item.featured_image}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImagePicker;
