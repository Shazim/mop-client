import React from 'react';
import SubHeader from 'components/molecules/header/SubHeader';
import StepBar from 'components/stepbar/StepBar';
import Button from 'components/atoms/buttons/Button';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import Counter from 'components/atoms/counter/Counter';
import ToggleButton from 'components/atoms/togglebutton/ToggleButton';
import { useFormikContext } from 'formik';
import SelectOptions from 'components/atoms/form/SelectOptions';

export default function Categories({
  addItem,
  next,
  steps,
  step,
  previous,
  styles,
  colors,
}) {
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
      <div className="px-43 pt-32">
        <div className="w-57% m-auto ">
          <StepBar steps={steps} step={step} />
        </div>
        <div className="hidden sm:block font-reg font-bold mb-50 uppercase tracking text-sm  text-secondary  text-center">
          Catagories
        </div>
        <div className="w-65% mx-auto mt-87 items-center sm:mt-24">
          <div className="font-bold tracking leading-32 text-sm text-secondary uppercase mb-20">
            Which styles/subjects apply to this item?
          </div>
          <div className="grid grid-cols-3 gap-20 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:hidden">
            {styles.map((style, index) => (
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

          <div className="hidden sm:block">
            <>
              <SelectOptions label="choose Catagories"></SelectOptions>
            </>
          </div>

          <div className="border-border border-t-2 my-25"></div>
          <div className="font-bold tracking leading-32 text-sm text-secondary uppercase mb-20 sm:hidden">
            which colours apply to this item?
          </div>
          <div className="grid grid-cols-3 gap-20 pr-30% lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:hidden">
            {colors.map((color, index) => (
              <CheckBox
                className=""
                value={color.name}
                onChange={() => handleColors(color.id)}
                defaultChecked={color.id == colour_ids[color.id]}
              />
            ))}
          </div>
          <div className="hidden sm:block">
            <div className="font-bold tracking leading-32 text-sm text-secondary uppercase mb-20 text-center">
              Select an orientation
            </div>
            <div className=" flex flex-col gap-10 items-center">
              <ToggleButton
                bg={edition_type == 'open' ? 'bg-gray' : 'bg-white'}
                onClick={() => setFieldValue('edition_type', 'open')}
              >
                LANDSCAPE
              </ToggleButton>
              <ToggleButton
                bg={edition_type == 'open' ? 'bg-gray' : 'bg-white'}
                onClick={() => setFieldValue('edition_type', 'open')}
              >
                PORTRAIT
              </ToggleButton>
              <ToggleButton
                bg={edition_type == 'open' ? 'bg-gray' : 'bg-white'}
                onClick={() => setFieldValue('edition_type', 'open')}
              >
                SQUARE
              </ToggleButton>
            </div>
          </div>
          <div className="border-border border-t-2 my-25"></div>
          <div className="font-bold items-center tracking leading-32 text-sm text-secondary uppercase mb-20 flex gap-3">
            choose an edition:
            <img src="/images/questionMark.svg" />
          </div>
          <div className="flex items-center sm:flex-col">
            <ToggleButton
              bg={edition_type == 'open' ? 'bg-gray' : 'bg-white'}
              onClick={() => setFieldValue('edition_type', 'open')}
              className="sm:w-263 sm:mb-10 "
            >
              OPEN EDITION
            </ToggleButton>
            <Counter
              width="w-263 ml-32 sm:ml-0"
              active={edition_type == 'limited'}
              onClick={(count) => {
                setFieldValue('edition_type', 'limited');
                setFieldValue('edition_quantity', count);
              }}
            />
          </div>

          <div className="w-100% justify-between flex sm:flex-col sm:items-center">
            <Button
              onClick={() => previous(0)}
              className={`h-33 w-153 mt-28 sm:w-275 sm:bg-secondary`}
              color="primary"
            >
              PREVIOUS
            </Button>
            <Button
              onClick={() => next(2)}
              className={`h-33 w-153 sm:w-275  mt-28`}
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
