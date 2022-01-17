import Button from 'components/atoms/buttons/Button';
import { TextField } from 'components/atoms/form';
import React from 'react';

function GallerySetting() {
  return (
    <div>
      <div>Name settings</div>
      <div className="flex">
        <TextField label="Gallery Name" mb="9" />
        <TextField label="Artist Name" mb="9" />
      </div>
      <div>Private or Public</div>
      <div>
        you can choose here to make your gallery private, or publicly available
        via our search engines.
      </div>
      <div className="flex">
        <Button>private gallery</Button>
        <Button>public gallery</Button>
      </div>
      <div>Domain</div>
      <div>
        <TextField label="type in a domain name:" />
      </div>
      <div className="flex">
        <div>
          <div>Logo and branding</div>
          <div>
            this will appear below your gallery name and artist name. Please
            upload a png or svg that is less than 10mb.
          </div>
          <div>
            <Button>ADD LOGO</Button>
          </div>
        </div>
        <div>
          <div>watermark</div>
          <div>
            you can upload a watermark that will appear across your work. Please
            upload a png or svg that is less than 10mb.
          </div>
          <div>
            <Button>add image</Button>
          </div>
        </div>
      </div>
      <div>Add a welcome video</div>
      <div>
        <TextField label="Add a youtube or vimeo URL that introduces your gallery:" />
      </div>
      <Button>SAVE CHANGES</Button>
    </div>
  );
}

export default GallerySetting;
