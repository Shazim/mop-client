import { TextField } from 'components/atoms/form';
import TextArea from 'components/atoms/form/TextArea';
import React from 'react';

function MyProfile() {
  return (
    <div>
      <div>profile setup</div>
      <div>Click to edit your profile picture.</div>
      <div>
        <img src="" alt="" />
        <button>Edit</button>
      </div>
      <div>
        <TextField
          name="firstName"
          placeholder="rebecca"
          mb="6"
          height="38"
          label="First Name"
        />
        <TextField
          name="surName"
          placeholder="warbis"
          mb="6"
          height="38"
          label="Sur Name"
        />
        <TextField
          name="company Name"
          placeholder="photo name"
          mb="6"
          height="38"
          label="company Name"
        />
      </div>
      <div>
        <TextField
          name="firstName"
          placeholder="rebecca"
          mb="6"
          height="38"
          label="First Name"
        />
        <TextField
          name="surName"
          placeholder="warbis"
          mb="6"
          height="38"
          label="Sur Name"
        />
        <button>Save</button>
      </div>
      <div>
        <TextField
          name="oldPassword"
          placeholder="******"
          mb="6"
          height="38"
          label="old Password"
        />
        <TextField
          name="newPassword"
          placeholder="*****"
          mb="6"
          height="38"
          label="New Password"
        />
        <TextField
          name="confirmPassword"
          placeholder="*******"
          mb="6"
          height="38"
          label="Confirm New Password"
        />
      </div>
      <div>
        <button>Save</button>
      </div>
      <div>Tell People About yourself</div>
      <div className="flex">
        <TextArea placeholder="Max 500 Character" />
        <button>Save</button>
      </div>
      <div>What Styles best describe your work?</div>
      <div>styles</div>
      <div>link up your social media</div>
      <div>Click to edit your profile picture.</div>
      <TextField
        name="facebook"
        placeholder="enter profile URL"
        mb="6"
        height="38"
        label="facebook"
      />
      <TextField
        name="instagram"
        placeholder="enter profile URL"
        mb="6"
        height="38"
        label="instagram"
      />
      <div className="flex justify-between">
        <TextField
          name="twitter"
          placeholder="enter profile URL"
          mb="6"
          height="38"
          label="Twitter"
        />
        <button>Save</button>
      </div>
    </div>
  );
}

export default MyProfile;
