import React, { useCallback } from 'react';
import SubHeader from 'components/molecules/header/SubHeader';
import StepBar from 'components/stepbar/StepBar';
import Button from 'components/atoms/buttons/Button';
import ToggleButton from 'components/atoms/togglebutton/ToggleButton';
import SwitchButton from 'components/atoms/buttons/SwitchButton';
import { useFormikContext } from 'formik';

export default function Price({ addItem, steps, step, next, previous }) {
  const {
    setFieldValue,
    values: { sell_via, sellable },
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
              Would you like to sell this item?
            </p>
            <SwitchButton
              active={sellable}
              onChange={() => setFieldValue('sellable', !sellable)}
            />
          </div>
          <div className="border-border border-t-2 my-25"></div>
          <div className="mb-20">
            <p className="font-bold tracking leading-32 text-sm text-secondary uppercase mb-12">
              Would you like to sell via our printing partner or self fulfil?
            </p>
            <p className="font-reg leading-10 text-base text-secondary">
              The quickest and easiest option is to let us handle your printing,
              framing, shipping and payment costs and logistics. You just need
              to decide how much profit you want to make!
              <br />
              <br /> If you choose to self fulfil, and if someone chooses to buy
              your work, they will be connected to you via email, and you will
              be responsible for all printing, framing, shipping and payment
              costs and logistics.
            </p>
          </div>

          <div className="flex items-center">
            <ToggleButton
              bg={sell_via == 'with_us' ? 'bg-gray' : 'bg-white'}
              onClick={() => setFieldValue('sell_via', 'with_us')}
            >
              SELL WITH US
            </ToggleButton>
            <ToggleButton
              className="ml-32 w-211 h-32"
              bg={sell_via == 'self_fulfil' ? 'bg-gray' : 'bg-white'}
              onClick={() => setFieldValue('sell_via', 'self_fulfil')}
            >
              SELF FULFIL
            </ToggleButton>
          </div>
          <div className="border-border border-t-2 my-25"></div>

          <div className="w-100% justify-between flex">
            <Button
              onClick={() => previous(1)}
              className={`h-33 w-153 mt-28`}
              color="primary"
            >
              PREVIOUS
            </Button>
            <Button
              onClick={() => next(3)}
              className={`h-33 w-153 mt-28`}
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
