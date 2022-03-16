import React, { useCallback } from 'react';
import SelectOptions from 'components/atoms/form/SelectOptions';
import TextArea from 'components/atoms/form/TextArea';
import TextField from 'components/atoms/form/TextField';
import SearchBar from 'components/atoms/searchbar/SearchBar';
import SubHeader from 'components/molecules/header/SubHeader';
import StepBar from 'components/stepbar/StepBar';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'components/atoms/buttons/Button';
import { Form } from 'components/app/forms';
import { generateSchema } from 'validation';
import ImagePicker from 'components/atoms/imagepicker/ImagePicker';

export default function Detail({
  addItem,
  steps,
  step,
  next,
  artwork,
  artworkHanler,
}) {
  // useEffect(() => {
  //   console.log('IMAGES ', images);
  // }, [images]);

  return (
    <div className="w-80% pb-172">
      <SubHeader
        handler={addItem}
        title="add new artwork"
        subtitle="artwork details"
        buttonText="ADD NEW ITEM"
        button={true}
      />
      <div className="px-43 pt-32">
        <div className="w-57% m-auto">
          <StepBar steps={steps} step={step} />
        </div>
        <div className="w-65% mx-auto mt-87 items-center">
          {/* <Form
            initialValues={{ name: '', note: '', images: '' }}
            validationSchema={generateSchema({
              name: '',
              note: '',
              images: '',
            })}
          > */}
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
          <div className="w-100% justify-end flex">
            <Button
              onClick={() => next(1)}
              className={`h-33 w-153 mt-34`}
              color="primary"
            >
              NEXT
            </Button>
          </div>
          {/* </Form> */}
        </div>
      </div>
    </div>
  );
}
