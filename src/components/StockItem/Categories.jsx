import React from 'react';
import SubHeader from 'components/molecules/header/SubHeader';
import StepBar from 'components/stepbar/StepBar';
import Button from 'components/atoms/buttons/Button';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import Counter from 'components/atoms/counter/Counter';
import ToggleButton from 'components/atoms/togglebutton/ToggleButton';
import { useFormikContext } from 'formik';

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
    <div className="w-80% pb-172">
      <div className="px-43 pt-32">
        <div className="w-57% m-auto">
          <StepBar steps={steps} step={step} />
        </div>
        <div className="w-65% mx-auto mt-87 items-center">
          <div className="font-bold tracking leading-32 text-sm text-secondary uppercase mb-20">
            Which styles/subjects apply to this item?
          </div>
          <div className="grid grid-cols-3 gap-20">
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
          <div className="border-border border-t-2 my-25"></div>
          <div className="font-bold tracking leading-32 text-sm text-secondary uppercase mb-20">
            which colours apply to this item?
          </div>
          <div className="grid grid-cols-3 gap-20 pr-30%">
            {colors.map((color, index) => (
              <CheckBox
                className=""
                value={color.name}
                onChange={() => handleColors(color.id)}
                defaultChecked={color.id == colour_ids[color.id]}
              />
            ))}
          </div>
          <div className="border-border border-t-2 my-25"></div>
          <div className="font-bold items-center tracking leading-32 text-sm text-secondary uppercase mb-20 flex gap-3">
            choose an edition:
            <img src="/images/questionMark.svg" />
          </div>
          <div className="flex items-center">
            <ToggleButton
              bg={edition_type == 'open' ? 'bg-gray' : 'bg-white'}
              onClick={() => setFieldValue('edition_type', 'open')}
            >
              OPEN EDITION
            </ToggleButton>
            <Counter
              width="w-263 ml-32"
              active={edition_type == 'limited'}
              onClick={(count) => {
                setFieldValue('edition_type', 'limited');
                setFieldValue('edition_quantity', count);
              }}
            />
          </div>

          <div className="w-100% justify-between flex">
            <Button
              onClick={() => previous(0)}
              className={`h-33 w-153 mt-28`}
              color="primary"
            >
              PREVIOUS
            </Button>
            <Button
              onClick={() => next(2)}
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
