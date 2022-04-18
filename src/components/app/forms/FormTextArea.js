import { useFormikContext } from 'formik';

import ErrorMessage from './ErrorMessage';
import Textarea from '../common/Textarea';

function FormField({
  className: classes = '',
  name,
  style,
  type,
  ...otherProps
}) {
  const {
    handleBlur,
    handleChange,
    errors = {},
    touched = {},
    values = {},
  } = useFormikContext() || {};

  return (
    <>
      <Textarea
        className={classes}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values[name]}
        type={type}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormField;
