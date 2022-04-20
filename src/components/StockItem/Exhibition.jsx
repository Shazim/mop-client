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
      <div className="px-43 pt-32">
        <div className="w-57% m-auto">
          <StepBar steps={steps} step={step} />
        </div>
        <div className="w-65% mx-auto mt-87 items-center">
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
          <div className="w-100% justify-between flex">
            <Button
              onClick={() => previous(2)}
              className={`h-33 w-153 mt-28`}
              color="primary"
            >
              PREVIOUS
            </Button>
            <SubmitButton className={`h-33 w-153 mt-28`} color="primary">
              FINISH
            </SubmitButton>
          </div>
        </div>
      </div>
    </div>
  );
}
