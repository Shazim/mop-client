import React from 'react';
import TextArea from 'components/atoms/form/TextArea';
import TextField from 'components/atoms/form/TextField';
import SubHeader from 'components/molecules/header/SubHeader';
import StepBar from 'components/stepbar/StepBar';
import Button from 'components/atoms/buttons/Button';
import ImagePicker from 'components/atoms/imagepicker/ImagePicker';
import ErrorMessage from 'components/app/forms/ErrorMessage';

import { useFormikContext } from 'formik';
import AddItemButton from 'components/atoms/additembutton/AddItemButton';

export default function Detail({ addItem, steps, step, next }) {
  const {
    handleSubmit,
    values: { name, note, artwork_images_attributes },
  } = useFormikContext() || {};

  return (
    <div className="w-100% pb-172">
      <div className="px-43 sm:px-23 pt-32">
        <div className="w-100% hidden sm:block">
          <AddItemButton btnText="Add new item" />
        </div>
        <div className="w-57% m-auto">
          <StepBar steps={steps} step={step} />
        </div>
        <div className="w-65% mx-auto mt-87 items-center">
          <TextField
            classes="w-100%"
            label="artwork name"
            name="name"
            placeholder="max 100 characters"
          />
          <div className="border-border border-t-2 my-25"></div>
          <TextArea
            label="artwork notes"
            name="note"
            classes="h-113 w-100% pl-16 pt-10 resize-none"
            placeholder="max 500 characters"
          />
          <div className="border-border border-t-2 my-25"></div>
          <ImagePicker name="images" label="artwork images" />
          <ErrorMessage
            error={
              artwork_images_attributes.length == 0
                ? 'upload at least one picture'
                : false
            }
            visible={
              artwork_images_attributes.length == 0
                ? 'upload at least one picture'
                : false
            }
          />
          <div className="w-100% justify-end flex">
            <Button
              onClick={() => {
                if (
                  name != '' &&
                  note != '' &&
                  artwork_images_attributes.length != 0
                ) {
                  next(1);
                } else {
                  handleSubmit();
                }
              }}
              className={`h-33 w-153 mt-34`}
              color="primary"
            >
              NEXT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
