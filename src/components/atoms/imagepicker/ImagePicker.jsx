import { FormField } from 'components/app/forms';
import React, { useState } from 'react';

function ImagePicker({ name, label }) {
  const [images, setImages] = useState([]);
  const [validation, setValidation] = useState(false);
  const handleBlur = () => {
    setValidation(true);
  };
  const fileReader = (file) => {
    if (file != null) {
      Object.entries(file.target.files).map(([key, value]) => {
        const reader = new FileReader();
        reader.readAsDataURL(value);
        reader.onload = () => {
          const imgs = new Image();
          imgs.src = reader.result;
          imgs.onload = () => {
            if (imgs.height > imgs.width) {
              setImages((prv) => [
                ...prv,
                {
                  name: value.name,
                  path: reader.result,
                  orientaion: 'portrait',
                  size: value.size,
                },
              ]);
            } else {
              setImages((prv) => [
                ...prv,
                {
                  name: value.name,
                  path: reader.result,
                  orientaion: 'landscape',
                  size: value.size,
                },
              ]);
            }
          };
        };
      });
    }
  };

  const byte_To_MB = (size) => {
    const mbs = parseInt(Math.log(size) / Math.log(1024));
    return mbs;
  };
  const removeItem = (index) => {
    const imagesArray = [...images];
    imagesArray.splice(index, 1);
    setImages(imagesArray);
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
          setHandler={setImages}
          className="z-10 opacity-0 w-100% h-137 absolute top-0"
          multiple="multiple"
          name={name}
          // onChange={fileReader}
          // onBlur={handleBlur}
          type="file"
        />
      </div>
      {/* {validation && images.length == 0 ? (
        <p className="input-validation-error">Images is required</p>
      ) : (
        <></>
      )} */}
      {Object.entries(images).map(([key, value], index) => (
        <div className="flex w-100% h-47 bg-white justify-between items-center mt-18 px-12">
          <div className="flex items-center">
            <img className="w-29 h-29 rounded-sm mr-15" src={value.path} />
            <p className="font-bold tracking leading-32 text-secondary uppercase text-sm">
              {value.name}
            </p>
          </div>
          <div className="flex items-center">
            <p className="font-bold tracking leading-32 text-secondary uppercase text-sm">
              {byte_To_MB(value.size) + 'mb'}
            </p>
            <img
              onClick={() => removeItem(index)}
              className="w-15 h-19 rounded-sm ml-28 link"
              src="/images/dustbin.svg"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImagePicker;
