// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
// ====================== IMPORTED COMPONENT ========================
import SubHeader from 'components/molecules/header/SubHeader';
import StepBar from 'components/stepbar/StepBar';
import Button from 'components/atoms/buttons/Button';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import Counter from 'components/atoms/counter/Counter';
import ToggleButton from 'components/atoms/togglebutton/ToggleButton';
import SelectOptions from 'components/atoms/form/SelectOptions';
// ====================== IMPORTED API  ========================
import { useFormikContext } from 'formik';

const Categories = ({
  addItem,
  next,
  steps,
  step,
  previous,
  styles,
  colors,
}) => {
  const {
    setFieldValue,
    values: { edition_type, colour_ids, style_ids },
  } = useFormikContext() || {};

  const handleColors = (id) => {
    let copyColorIds = { ...colour_ids };
    if (copyColorIds[id]) {
      delete copyColorIds.id;
    } else {
      copyColorIds[id] = id;
    }
    setFieldValue('colour_ids', copyColorIds);
  };

  const handleStyles = (id) => {
    let copyStyleIds = { ...style_ids };
    if (copyStyleIds[id]) {
      delete copyStyleIds.id;
    } else {
      copyStyleIds[id] = id;
    }
    setFieldValue('style_ids', copyStyleIds);
  };

  return (
    <div className="w-100% pb-172">
      <div className="px-43 sm:px-0  sm:pt-0">
        <div className="w-57% m-auto sm:h-100 sm:w-80%">
          <StepBar steps={steps} step={step} />
        </div>
        <div className="w-231 h-33 m-auto hidden sm:block font-avenir-reg text-xl tracking-wider text-secondary font-medium text-center uppercase ">
          categories
        </div>
        <div className="w-65% mx-auto mt-29 items-center sm:w-full sm:mt-24">
          <div className="font-bold tracking leading-32 text-sm text-secondary uppercase mb-20">
            Which styles/subjects apply to this item?
          </div>
          <div className="grid grid-cols-3 gap-20 sm:hidden">
            {styles?.map((style, index) => (
              <>
                <CheckBox
                  className=""
                  value={style.name}
                  onChange={() => handleStyles(style.id)}
                  defaultChecked={style.id == style_ids[style.id]}
                />
              </>
            ))}
          </div>
          <div className="hidden sm:block h-180">
            <SelectOptions />
          </div>
          <div className="border-border border-t-2 my-25"></div>
          <div className="font-bold tracking leading-32 text-sm text-secondary uppercase mb-20 sm:hidden">
            which colours apply to this item?
          </div>
          <div className="grid grid-cols-3 gap-20 pr-30% sm:hidden">
            {colors?.map((color, index) => (
              <CheckBox
                className=""
                value={color.name}
                onChange={() => handleColors(color.id)}
                defaultChecked={color.id == colour_ids[color.id]}
              />
            ))}
          </div>

          <div className="border-border border-t-2 my-25 sm:hidden"></div>
          <div className="font-bold items-center sm:w-full sm:justify-center tracking leading-32 text-sm text-secondary uppercase mb-20 flex gap-3">
            choose an edition:
            <img src="/images/questionMark.svg" />
          </div>
          <div className="flex items-center sm:flex-col sm:justify-between">
            <ToggleButton
              bg={edition_type == 'open' ? 'bg-gray' : 'bg-white'}
              onClick={() => setFieldValue('edition_type', 'open')}
              className={'sm:w-263 sm:h-32 w-211 '}
            >
              OPEN EDITION
            </ToggleButton>
            <Counter
              width="w-293 h-32 ml-32 sm:h-32 sm:mt-35 "
              active={edition_type == 'limited'}
              onClick={(count) => {
                setFieldValue('edition_type', 'limited');
                setFieldValue('edition_quantity', count);
              }}
            />
          </div>

          <div className="w-100% justify-between flex sm:flex-col sm:items-center">
            <button
              className="h-33 w-153 mt-28 sm:w-275  font-nunito-bold sm:h-44 uppercase bg-primary text-white  font-sm sm:bg-gray sm:text-secondary"
              onClick={() => previous(0)}
            >
              Previous
            </button>

            <Button
              onClick={() => next(2)}
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
};
export default Categories;
