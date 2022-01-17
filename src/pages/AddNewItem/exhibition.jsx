import Button from 'components/atoms/buttons/Button';
import SwitchButton from 'components/atoms/buttons/SwitchButton';
import SelectOptions from 'components/atoms/form/SelectOptions';
import React from 'react';

function Exhibition() {
  return (
    <div>
      <div className="flex">
        <div>Would you like to EXHIBIT this item?</div>
        <SwitchButton />
      </div>
      <div>
        <div className="flex">
          <div>Choose the EXHIBITION:</div>
          <img src="" alt="" />
        </div>
        <SelectOptions />
        <div className="flex">
          <Button>previous</Button>
          <Button>Next</Button>
        </div>
      </div>
    </div>
  );
}

export default Exhibition;
