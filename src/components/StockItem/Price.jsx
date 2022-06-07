import React, { useCallback } from 'react';
import SubHeader from 'components/molecules/header/SubHeader';
import StepBar from 'components/stepbar/StepBar';
import Button from 'components/atoms/buttons/Button';
import ToggleButton from 'components/atoms/togglebutton/ToggleButton';
import SwitchButton from 'components/atoms/buttons/SwitchButton';
import { useFormikContext } from 'formik';
import SelectOptions from 'components/atoms/form/SelectOptions';
import MenuTable from 'components/Tables/MenuTable';

export default function Price({ addItem, steps, step, next, previous }) {
  const {
    setFieldValue,
    values: { sell_via, sellable },
  } = useFormikContext() || {};

  return (
    <div className="w-100% pb-172">
      <div className="px-43 pt-32">
        <div className="w-57% m-auto ">
          <StepBar steps={steps} step={step} />
        </div>
        <div className="hidden sm:block font-reg font-bold mb-50 uppercase tracking text-sm  text-secondary  text-center">
          Price Sheet
        </div>
        <div className="w-65% mx-auto mt-87 items-center sm:w-80%">
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
              to decide how much profit you want to make!
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
              onClick={() => setFieldValue('sell_via', 'with_us')}
            >
              <span>SELL WITH US</span>{' '}
            </ToggleButton>
            <ToggleButton
              className="ml-32 w-211 h-32 sm:ml-0"
              bg={sell_via == 'self_fulfil' ? 'bg-gray' : 'bg-white'}
              onClick={() => setFieldValue('sell_via', 'self_fulfil')}
            >
              SELF FULFIL
            </ToggleButton>
          </div>
          <div className="border-border border-t-2 my-25 sm:hidden"></div>
          <div className="sm:flex font-bold items-center tracking leading-32 text-sm text-secondary uppercase mb-20 gap-3 hidden">
            choose which price sheet to apply:
            <img src="/images/questionMark.svg" />
          </div>
          <div className="hidden sm:block">
            <>
              <SelectOptions label="price Sheet 1"></SelectOptions>
            </>
          </div>
          <div className="hidden sm:block mt-34 font-nunito-light text-base leading-22 text-center text-secondary font-light">
            Shipping will be included in our printer’s fulfilment costs.
          </div>
          <div className="hidden sm:block mt-14 font-medium font-avenir-reg text-center text-xl leading-54 tracking-wider uppercase text-secondary">
            pricing
          </div>
          <div className="hidden sm:block mt-24">
            <MenuTable></MenuTable>
          </div>

          <div className="w-100% justify-between flex sm:flex-col items-center">
            <Button className="hidden sm:block w-212 h-32 mt-25  " color="gray">
              EDIT PRICE SHEET
            </Button>

            <Button
              onClick={() => previous(1)}
              className={`h-33 w-153 sm:w-275 sm:h-44 sm:bg-gray sm:text-secondary mt-28`}
              color="primary"
            >
              PREVIOUS
            </Button>
            <Button
              onClick={() => next(3)}
              className={`h-33 w-153 sm:w-275 sm:h-44 mt-28`}
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
