import SwitchButton from 'components/atoms/buttons/SwitchButton';
import { TextField } from 'components/atoms/form';
import React from 'react';

function ItemDetails() {
  return (
    <div>
      <TextField label="artwork name" />
      <TextField label="artwork notes" />
      <div>artwork Images</div>
      <label>
        upload your image Drop your file on here or click to browse. Max file
        size: 200mb, JPEG or PNG
      </label>
      <div>
        <div className="flex">
          <img src="" alt="" />
          <div>image.jpeg</div>
        </div>
        <div className="flex">
          <div>4mb</div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
