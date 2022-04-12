import { Formik } from 'formik';

function Form({
  initialValues,
  onSubmit,
  validationSchema,
  setFieldValue,
  enableReinitialize,
  children,
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize={enableReinitialize}
    >
      {children}
    </Formik>
  );
}

export default Form;
