import Button from 'components/atoms/buttons/Button';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import { TextField } from 'components/atoms/form';
import React from 'react';

function Profile() {
  const styles = [
    { id: 1, title: 'abstract' },
    { id: 2, title: 'Architectural' },
    { id: 3, title: 'Astro' },
    { id: 4, title: 'B&W' },
    { id: 5, title: 'Cityscape' },
    { id: 6, title: 'Composite' },
    { id: 7, title: 'Drone' },
    { id: 8, title: 'Double Exposure' },
    { id: 9, title: 'fashion' },
    { id: 10, title: 'FINE ART' },
    { id: 11, title: 'Infrared' },
    { id: 12, title: 'Landscape' },
    { id: 13, title: 'long Exposure' },
    { id: 14, title: 'Macro' },
    { id: 15, title: 'journalism' },
    { id: 16, title: 'Portraiture' },
    { id: 17, title: 'Seascape' },
    { id: 18, title: 'Sports' },
    { id: 19, title: 'Still Life' },
    { id: 20, title: 'Street' },
    { id: 21, title: 'Underwater' },
    { id: 22, title: 'Wildlife' },
  ];
  return (
    <div>
      <div>Profile</div>
      <div>Click to edit your profile picture.</div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="flex">
        <TextField label="First Name" />
        <TextField label="surname" />
        <TextField label="company name" />
      </div>
      <div>
        <div>
          <TextField label="phone number" />
          <TextField label="email address" />
        </div>
        <Button>save</Button>
      </div>
      <div>change password</div>
      <div className="flex">
        <TextField label="old password" />
        <TextField label="new password" />
        <TextField label="confirm new password" />
      </div>
      <div>
        <Button>Save</Button>
      </div>
      <div>tell people about yourself</div>
      <div>
        <TextField label="edit your bio." />
        <Button>Save</Button>
      </div>
      <div>what styles best describe your work?</div>
      <div className="grid grid-cols-3 gap-y-10">
        {styles.map(({ title }) => (
          <CheckBox label={title} />
        ))}
      </div>
      <div>link up your social media</div>
      <div>Click to edit your profile picture.</div>
      <div>
        <TextField label="Facebook" />
      </div>
      <div>
        <TextField label="instagram" />
      </div>
      <div>
        <TextField label="twitter" />
      </div>
    </div>
  );
}

export default Profile;
