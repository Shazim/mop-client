// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
// ====================== IMPORTED COMPONENT ========================
import TextArea from 'components/atoms/form/TextArea';
import TextField from 'components/atoms/form/TextField';
import StepBar from 'components/stepbar/StepBar';
import Button from 'components/atoms/buttons/Button';
import ImagePicker from 'components/atoms/imagepicker/ImagePicker';
import ErrorMessage from 'components/app/forms/ErrorMessage';
import AddItemButton from 'components/atoms/additembutton/AddItemButton';
// ====================== IMPORTED API ========================
import { useFormikContext } from 'formik';

const Detail = ({ addItem, steps, step, next, data }) => {
  const {
    handleSubmit,
    values: { name, notes, artwork_images_attributes },
    errors,
    touched,
    setFieldError,
  } = useFormikContext() || {};

  const errorLength = Object.keys(errors).length;
  return (
    <div className="w-100% pb-100">
      <div className="px-43 sm:px-0 pt-0 sm:pt-0">
        <div className="w-57% sm:h-100 m-auto sm:w-80%">
          <StepBar steps={steps} step={step} />
        </div>
        <div
          className="w-231 h-33 m-auto font-avenir-reg font-medium text-secondary text-xl leading-54 tracking-wider uppercase hidden sm:block"
          onClick={data}
          data-tut="reactour__iso"
        >
          items details
        </div>
        <div className="w-57% mx-auto mt-44 sm:mt-24 items-center sm:w-full">
          <TextField
            className="h-38 w-100% uppercase "
            label="artwork name"
            name="name"
            placeholder="MAX 100 CHARACTERS"
          />
          <div className="border-border border-t-2 my-26"></div>
          <TextArea
            label="artwork notes"
            name="notes"
            classes="h-113 w-100% pl-16 pt-10  uppercase resize-none"
            placeholder="MAX 500 CHARACTERS"
          />
          <div className="border-border border-t-2 my-20"></div>
          <ImagePicker name="images" label="artwork images" />
          <ErrorMessage
            error={errors['artwork_images_attributes']}
            visible={touched['artwork_images_attributes']}
          />
          <div className="w-100% justify-end flex sm:justify-center ">
            <Button
              onClick={() => {
                if (errorLength == 0 && name != '') {
                  next(1);
                } else {
                  handleSubmit();
                }
              }}
              className={`h-33 w-153 mt-34 sm:w-275 sm:h-44`}
              color="primary"
            >
              NEXT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
