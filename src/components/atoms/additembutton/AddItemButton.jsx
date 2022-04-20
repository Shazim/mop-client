import React from 'react';
import Button from '../buttons/Button';

function AddItemButton({ btnText = '', handler }) {
  return (
    <div className="w-100% flex">
      <Button className="w-99% mr-10" transform="uppercase">
        {btnText}
      </Button>
      <img src="/images/menu/sub-menu.svg" />
    </div>
  );
}

export default AddItemButton;
