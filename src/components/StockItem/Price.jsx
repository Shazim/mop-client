import React, { useCallback, useState } from 'react';
import SubHeader from 'components/molecules/header/SubHeader';
import StepBar from 'components/stepbar/StepBar';
import Button from 'components/atoms/buttons/Button';
import ToggleButton from 'components/atoms/togglebutton/ToggleButton';
import SwitchButton from 'components/atoms/buttons/SwitchButton';
import { useFormikContext } from 'formik';
import PriceSheetAartwork from './PriceSheetAartwork';

export default function Price({ addItem, steps, step, next, previous }) {
  const {
    setFieldValue,
    values: { sell_via, sellable },
  } = useFormikContext() || {};
  const [showData, setShowData] = useState(false);
  const handleClick = () => {
    setFieldValue('sell_via', 'self_fulfil');
    setShowData(true);
  };
  const handleChange = () => {
    setFieldValue('sell_via', 'with_us');
    setShowData(false);
  };

  return (
    <div className="w-100% pb-172">
      <div className="px-43 sm:px-0 pt-32 sm:pt-0">
        <div className="w-57% sm:h-100 m-auto">
          <StepBar steps={steps} step={step} />
        </div>

        <div className="hidden sm:block w-65% mx-auto items-center mt-20 ">
          <PriceSheetAartwork />
        </div>
        <div className="w-65% mx-auto mt-87 items-center ">
          <div className="flex items-center justify-between mb-18 sm:hidden">
            <p className="font-bold tracking leading-32 text-sm text-secondary uppercase">
              Would you like to sell this item?
            </p>

            <SwitchButton
              active={sellable}
              onChange={() => setFieldValue('sellable', !sellable)}
            />
          </div>
          <div className="border-border border-t-2 my-25 sm:hidden"></div>
          <div className="mb-20 sm:hidden">
            <p className="font-bold tracking leading-32 text-sm text-secondary uppercase mb-12">
              Would you like to sell via our printing partner or self fulfil?
            </p>
            <p className="font-reg leading-10 text-base text-secondary">
              The quickest and easiest option is to let us handle your printing,
              framing, shipping and payment costs and logistics. You just need
              to decide how much mark-up you want to add to the price (your
              profit)!
              <br />
              <br /> If you choose to self fulfil, and if someone chooses to buy
              your work, they will be connected to you via email, and you will
              be responsible for all printing, framing, shipping and payment
              costs and logistics.
            </p>
          </div>

          <div className="flex items-center sm:hidden">
            <ToggleButton
              bg={sell_via == 'with_us' ? 'bg-gray' : 'bg-white'}
              onClick={handleChange}
            >
              SELL WITH US
            </ToggleButton>
            <ToggleButton
              className="ml-32 w-211 h-32"
              bg={sell_via == 'self_fulfil' ? 'bg-gray' : 'bg-white'}
              onClick={handleClick}
            >
              SELF FULFIL
            </ToggleButton>
          </div>

          {showData && <PriceSheetAartwork />}

          <div className="border-border border-t-2 my-25 sm:hidden"></div>
          <div className="w-100% justify-between flex sm:flex-col sm:items-center">
            <button
              className="h-33 w-153 font-nunito-bold mt-28 sm:w-275 sm:h-44 uppercase bg-primary text-white font-bold font-base sm:bg-gray sm:text-secondary"
              onClick={() => previous(1)}
            >
              Previous
            </button>
            <Button
              onClick={() => next(3)}
              className={`h-33 w-153 mt-28 sm:w-275 sm:h-44`}
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
