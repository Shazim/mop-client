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
  ...otherProps
}) {
  const {
    handleBlur,
    handleChange,
    setFieldValue,
    setValues,
    errors = {},
    touched = {},
    values = {},
  } = useFormikContext() || {};
  const [images, setImages] = useState([]);

  const handleChangeCustom = (e) => {
    const { name, type, files } = e.target;

    if (type === 'file') {
      Object.entries(files).map(([key, value]) => {
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
              // setHandler((prv) => [
              //   ...prv,
              //   {
              //     name: value.name,
              //     path: reader.result,
              //     orientaion: 'portrait',
              //     size: value.size,
              //   },
              // ]);
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

              // setHandler((prv) => [
              //   ...prv,
              //   {
              //     name: value.name,
              //     path: reader.result,
              //     orientaion: 'landscape',
              //     size: value.size,
              //   },
              // ]);
            }
          };
        };
      });
      // return setFieldValue(name, images);
    }
    handleChange(e);
  };

  return (
    <div>
      <Input
        className={classes}
        name={name}
        onBlur={handleBlur}
        onChange={handleChangeCustom}
        value={values[name]}
        type={type}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
}

export default FormField;
