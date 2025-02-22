import React from 'react';
import SubHeader from 'components/molecules/header/SubHeader';
import StepBar from 'components/stepbar/StepBar';
import Button from 'components/atoms/buttons/Button';
import SwitchButton from 'components/atoms/buttons/SwitchButton';
import SubmitButton from 'components/atoms/buttons/SubmitButton';
import { useFormikContext } from 'formik';

export default function Exhibition({ addItem, steps, step, previous }) {
  const {
    setFieldValue,
    values: { exhibitionable },
    errors,
  } = useFormikContext() || {};

  return (
    <div className="w-100% pb-172">
      <div className="px-43 ">
        <div className="w-57% m-auto sm:w-80%">
          <StepBar steps={steps} step={step} />
        </div>
        <div className="w-65% mx-auto mt-29 items-center">
          <div className="flex items-center justify-between mb-18">
            <p className="font-bold tracking leading-32 text-sm text-secondary uppercase">
              Would you like to EXHIBIT this item?
            </p>
            <SwitchButton
              active={exhibitionable}
              onChange={() => setFieldValue('exhibitionable', !exhibitionable)}
            />
          </div>
          <div className="border-border border-t-2 my-25"></div>
          <div className="w-100% justify-between flex sm:flex-col sm:items-center">
            <button
              className="h-33 w-153 mt-14 font-nunito-reg sm:w-275 sm:h-44 uppercase bg-primary text-white  text-base sm:bg-gray sm:text-secondary tracking"
              onClick={() => previous(2)}
            >
              Previous
            </button>
            <SubmitButton
              className={`h-33 w-153 mt-14 sm:h-44 sm:w-275`}
              color="primary"
            >
              FINISH
            </SubmitButton>
          </div>
        </div>
      </div>
    </div>
  );
}
