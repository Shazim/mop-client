import Button from 'components/atoms/buttons/Button';
import { TextField } from 'components/atoms/form';
import SelectOptions from 'components/atoms/form/SelectOptions';
import React from 'react';

function Settings() {
  return (
    <div>
      <div>subscription</div>
      <div>
        You currently have the <span> Plus Subscription </span> Package.
      </div>
      <Button>upgrade subscription</Button>
      <div>reusable component</div>
      <div>store currency</div>
      <div className="flex">
        <SelectOptions />
        <Button>save</Button>
      </div>
      <div>order delay</div>
      <div>Please select an order delay time. </div>
      <div className="flex">
        <SelectOptions />
        <Button>save</Button>
      </div>
      <div>
        <div>
          <div>terms of service</div>
          <TextField label="Edit your terms of service:" />
          <Button>SAVE</Button>
        </div>
        <div>
          <div>digital image licence</div>
          <TextField label="edit your digital image licence:" />
          <Button>SAVE</Button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
