import RadioButton from 'components/atoms/buttons/RadioButton';
import TextArea from 'components/atoms/form/TextArea';
import React from 'react';

function MySubscription() {
  return (
    <div>
      <div>current subscription</div>
      <div>You currently have the Plus Subscription Package.</div>
      <div>Package</div>
      <div>
        <button>Upgrade Setting</button>
        <button> Cancel Setting</button>
      </div>
      <div>payments going to</div>
      <div>
        <RadioButton />
        <RadioButton />
        <RadioButton />
        <RadioButton />
      </div>
      <div>
        <div>Add card</div>
        <button>Save</button>
      </div>
      <div>Review your Subscription</div>
      <div>Use the stars to add a rating about your subscription.</div>
      <div className="flex">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div>Add feedback about your subscription.</div>
      <TextArea placeholder="max 500 characters" />
      <button>Submit review</button>
    </div>
  );
}

export default MySubscription;
