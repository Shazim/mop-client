import Button from 'components/atoms/buttons/Button';
import React from 'react';

function CreateGallary() {
  return (
    <div>
      <div></div>
      <div>
        <div>View Demo</div>
        <div></div>
      </div>
      <div>
        <div>beginners go free.</div>
        <div>
          Create your gallery with your free trial and upload up to 5 images.
          Your free trial lasts for 10 days and you can upgrade to unlock more
          features.{' '}
        </div>
        <Button className="w-184 mr-18">start your free trial</Button>
      </div>
      <div>
        <div>
          subscription options to suit every level of photographer, from
          hobbyist to a professional
        </div>
        <div>
          <div>monthly</div>
          <div></div>
          <div>Yearly</div>
        </div>
      </div>
    </div>
  );
}

export default CreateGallary;
