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
  readOnly,
  autoComplete,
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
    <>
      <div className={`${classes} mb-0`}>
        <Input
          className="w-100% h-100% bg-white outline-none  text-secondary placeholder-gray font-bold text-sm pl-16 py-5 tracking"
          name={name}
          onBlur={!readOnly && handleBlur}
          onChange={handleChangeCustom}
          type={type}
          value={type == 'file' ? '' : values[name]}
          readOnly={readOnly}
          autoComplete={autoComplete}
          {...otherProps}
        />
      </div>
      {!readOnly && <ErrorMessage error={errors[name]} visible={touched[name]} />}
    </>
  );
}

export default FormField;
