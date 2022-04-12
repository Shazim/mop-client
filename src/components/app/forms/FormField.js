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
    errors = {},
    touched = {},
    values,
  } = useFormikContext() || {};

  const handleChangeCustom = (e) => {
    const { name, type, files } = e.target;

    if (type === 'file') {
      customChange && customChange(name, files);
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
        value={type == 'file' ? '' : values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
}

export default FormField;
