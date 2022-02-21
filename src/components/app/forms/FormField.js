import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import Input from "../common/Input";

function FormField({
  className: classes = "",
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
    values = {  },
  } = useFormikContext() || {};
 
  return (
    <div>
      <Input
        className={classes}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values[name]}
        type={type}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
}

export default FormField;
