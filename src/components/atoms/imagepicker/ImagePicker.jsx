import { FormField } from 'components/app/forms';
import { useFormikContext } from 'formik';
import React, { useState } from 'react';
import ImageList from 'components/ImageList';

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

  const handleFeature = (index, value) => {
    let copyArtWork = [...artwork_images_attributes];

    copyArtWork.map((item, i) => {
      if (index == i && !item.featured_image) {
        item['featured_image'] = value;
      } else {
        item['featured_image'] = false;
      }
    });

    setFieldValue('artwork_images_attributes', copyArtWork);
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
      <div className="font-bold text-secondary text-sm leading-22 uppercase tracking mb-11">
        {label}
      </div>
      <div className="w-100% h-137 bg-white relative">
        <label
          for="1"
          className="w-100% h-137 bg-white relative"
          // htmlFor="dropzone"
        >
          <span className="w-100% h-137 bg-white flex items-center justify-center">
            <div className="text-center">
              <p className="font-bold tracking sm:tracking-normal text-2xl sm:text-sm text-gray uppercase mb-10 sm:mb-0">
                upload your image
              </p>
              <p className="font-bold tracking text-base m-auto text-gray uppercase mb-10 sm:tracking-normal sm:text-sm sm:mb-0">
                Drop your file on here or click to browse.
              </p>
              <p className="font-bold tracking text-sm text-gray uppercase">
                Max file size: 200mb, JPEG or PNG
              </p>
            </div>
          </span>
          <FormField
            accept="image/*"
            id="1"
            className="z-10 opacity-0 w-100% h-137 absolute top-0"
            multiple="multiple"
            name={name}
            customChange={customChange}
            type="file"
          />
        </label>
      </div>
      {artwork_images_attributes.map((item, index) => (
        <ImageList
          name={item?.image?.name}
          imageUrl={item?.imageLink}
          size={byte_To_MB(item?.image?.size) + 'mb'}
          iconClick={removeItem}
          handleCheckbox={handleFeature}
          checked={item.featured_image}
          id={index}
        />
      ))}
    </div>
  );
}

export default ImagePicker;
