import React from 'react';
import TextField from 'components/atoms/form/TextField';

function Detail() {
  return (
    <>
      <div className="admin-h1 mb-13">Exhibition room details</div>
      <TextField
        name="domain"
        placeholder="max 100 characters"
        mb="11"
        height="38"
        label="Exhibition room name"
        className="border-border-light border border-solid w-100%"
      />
      <div className="admin-label--light my-7">
        ** You can add more exhibition rooms later on.
      </div>
      <TextField
        name="domain"
        placeholder="max 100 characters"
        mb="11"
        height="38"
        label="Artist name (optional)"
        className="border-border-light border border-solid w-100%"
      />
    </>
  );
}

export default Detail;
