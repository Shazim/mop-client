import React from 'react';
import TextField from 'components/atoms/form/TextField';
import UploadExhibition from './UploadExhibition';

function Detail() {
  return (
    <>
      <div className="parent px-46">
        <div className="admin-h1 mb-13">Exhibition room details</div>
        <TextField
          name="room_name"
          placeholder="MAX 100 CHARACTERS"
          label="Exhibition room name"
          className="border-border-light border border-solid w-100% h-40"
        />
        <div className="admin-label--light my-7">
          ** You can add more exhibition rooms later on.
        </div>
        <TextField
          name="artist_name"
          placeholder="MAX 100 CHARACTERS"
          label="Artist name (optional)"
          className="border-border-light border border-solid w-100% h-40"
        />
      </div>
      <div className=" mt-30 ml-40 mr-40">
        <div className="text-secondary uppercase tracking font-bold text-secondary text-sm leading-22 mb-20">
          {' '}
          Exhibition featured Image
        </div>
        <UploadExhibition label="Add Exhibition" id="image" />
      </div>
    </>
  );
}

export default Detail;
