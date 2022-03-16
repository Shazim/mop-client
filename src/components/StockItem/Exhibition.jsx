import React, { useCallback } from 'react';

import SubHeader from 'components/molecules/header/SubHeader';
import StepBar from 'components/stepbar/StepBar';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'components/atoms/buttons/Button';
import { getColors, getStyles } from 'api';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import Counter from 'components/atoms/counter/Counter';
import ToggleButton from 'components/atoms/togglebutton/ToggleButton';
import SwitchButton from 'components/atoms/buttons/SwitchButton';
import SelectOptions from 'components/atoms/form/SelectOptions';
import SubmitButton from 'components/atoms/buttons/SubmitButton';

export default function Exhibition({
  addItem,
  steps,
  step,
  handler,
  styles,
  colors,
  edition,
  next,
  previous,
  openEdition,
  openEditionHandler,
  editionHandler,
}) {
  return (
    <div className="w-80% pb-172">
      <SubHeader
        handler={addItem}
        title="add new artwork"
        subtitle="exhibition"
        buttonText="ADD NEW ITEM"
        button={true}
      />
      <div className="px-43 pt-32">
        <div className="w-57% m-auto">
          <StepBar steps={steps} step={step} />
        </div>
        <div className="w-65% mx-auto mt-87 items-center">
          <div className="flex items-center justify-between mb-18">
            <p className="font-bold tracking leading-32 text-sm text-secondary uppercase">
              Would you like to EXHIBIT this item?
            </p>
            <SwitchButton />
          </div>
          <div className="border-border border-t-2 my-25"></div>
          {/* <div className="font-bold items-center tracking leading-32 text-sm text-secondary uppercase mb-20 flex gap-3">
            Choose the EXHIBITION:
            <img src="/images/questionMark.svg" />
          </div>
          <div className="mb-20">
            <SelectOptions width="100%" />
          </div>

          <div className="border-border border-t-2 my-40"></div> */}

          <div className="w-100% justify-between flex">
            <Button
              onClick={() => previous(2)}
              className={`h-33 w-153 mt-28`}
              color="primary"
            >
              PREVIOUS
            </Button>
            <SubmitButton
              // onClick={() => next()}
              // onClick={() => {
              //   window.scrollTo(0, 0);
              //   const step = [...steps];
              //   step[1].status = true;
              //   handler(step);
              //   addItem((prv) => prv + 1);
              // }}
              className={`h-33 w-153 mt-28`}
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
