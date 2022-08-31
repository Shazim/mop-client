import React from 'react';
import TextField from 'components/atoms/form/TextField';

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
    </>
  );
}

export default Detail;
