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

export default function Categories({
  addItem,
  next,
  steps,
  step,
  previous,
  styles,
  colors,
  handler,
  edition,
  openEdition,
  stylesId,
  artwork,
  openEditionHandler,
  editionHandler,
}) {
  const setStyleIds = (id) => {
    let copyStyles = [...artwork.styles];

    if (copyStyles.includes(id)) {
      let index = copyStyles.indexOf(id);
      copyStyles.splice(index, 1);
      handler(copyStyles);
    } else {
      handler((prv) => [...prv.styles, id]);
    }
    console.log('STYLES IDSSS : ', stylesId);
  };
  return (
    <div className="w-80% pb-172">
      <SubHeader
        handler={addItem}
        title="add new artwork"
        subtitle="Categories"
        buttonText="ADD NEW ITEM"
        button={true}
      />
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
              <CheckBox
                className=""
                value={style.name}
                onChange={() => setStyleIds(style.id)}
                // checked={}
              />
            ))}
          </div>
          <div className="border-border border-t-2 my-25"></div>
          <div className="font-bold tracking leading-32 text-sm text-secondary uppercase mb-20">
            which colours apply to this item?
          </div>
          <div className="grid grid-cols-3 gap-20 pr-30%">
            {colors.map((color, index) => (
              <CheckBox className="" value={color.name} checked={true} />
            ))}
          </div>
          <div className="border-border border-t-2 my-25"></div>
          <div className="font-bold items-center tracking leading-32 text-sm text-secondary uppercase mb-20 flex gap-3">
            choose an edition:
            <img src="/images/questionMark.svg" />
          </div>
          <div className="flex items-center">
            <ToggleButton
              bg={openEdition ? 'bg-gray' : 'bg-white'}
              handler={openEditionHandler}
            >
              OPEN EDITION
            </ToggleButton>
            <Counter
              width="w-263 ml-32"
              edition={edition}
              editionHandler={editionHandler}
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
