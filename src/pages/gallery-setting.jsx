import React, { useState } from 'react';
import SubmitButton from 'components/atoms/buttons/SubmitButton';
import TextField from 'components/atoms/form/TextField';
import ToggleButton from 'components/atoms/togglebutton/ToggleButton';
import { Form, FormField } from 'components/app/forms';
import { usePost } from 'hooks';
import { createWork } from 'api/api-services';

function GallerySetting() {
  const [privateOption, setPrivateOption] = useState(true);
  const [post, { data: dataPost, status: statusPost }] = usePost(createWork);

  const onSubmit = (data) => {
    console.log('data', data);
  };

  return (
    <Form
      initialValues={{
        artist_name: '',
        name: '',
        gallery_type: 'private_gallery',
        domain: '',
        welcome_video: 'with_us',
        logo: {},
        watermark: {},
      }}
      onSubmit={onSubmit}
      // validationSchema={artworkSchema}
    >
      <div className="bg-gray-dark pl-45 pr-51 pt-31 pb-295">
        <div className="admin-h2 mb-10">Name Setting</div>
        <div className="flex hr-b pb-28">
          <div className="w-50% mr-50">
            <TextField
              name="name"
              placeholder="max 100 characters"
              mb="6"
              height="38"
              label="gallery name"
            />
          </div>
          <div className="w-50% ">
            <TextField
              name="artist_name"
              placeholder="max 100 characters"
              mb="6"
              height="38"
              label="artist name"
            />
          </div>
        </div>
        <div className="admin-h2 pt-15">Private or public</div>
        <div className="admin-label my-17">
          you can choose here to make your gallery private, or publicly
          available via our search engines.
        </div>
        <div className="flex hr-b pb-30">
          <ToggleButton
            bg={privateOption ? 'bg-gray mr-32' : 'bg-white mr-32'}
            // onClick={() => setFieldValue('private_gallery', 'private_gallery')}
          >
            Private Gallery
          </ToggleButton>
          <ToggleButton
            bg={!privateOption ? 'bg-gray' : 'bg-white'}
            // onClick={() => setFieldValue('public_gallery', 'public_gallery')}
          >
            Public Gallery
          </ToggleButton>
        </div>
        <div className="hr-b pb-30 pt-20">
          <div className="admin-h2 pb-5">Domain</div>

          <TextField
            name="domain"
            placeholder="type in a domain name:"
            mb="6"
            height="38"
            label="type in a domain name:"
            className="w-55%"
          />
        </div>
        <div className="flex hr-b pt-10 pb-29">
          <div>
            <div className="admin-h2">logo and branding</div>
            <div className="admin-label my-18 leading-32 w-80%">
              this will appear below your gallery name and artist name. Please
              upload a png or svg that is less than 10mb.
            </div>
            <div className="w-220 bg-white h-220 flex items-center ">
              {/* <img src="" className="w-220 h-220" /> */}
              {/* <div className="relative"> */}
              <label
                for="1"
                className="font-bold text-sm text-secondary tracking leading-32 cursor-pointer text-center w-122 h-33 mx-auto bg-gray"
              >
                ADD LOGO
              </label>

              <FormField
                accept="image/*"
                className="hidden"
                multiple="multiple"
                id="1"
                name=""
                // customChange={customChange}
                // onChange={fileReader}
                // onBlur={handleBlur}
                type="file"
              />
              {/* </div> */}
            </div>
          </div>
          <div>
            <div className="admin-h2">watermark</div>
            <div className="admin-label my-18 leading-32 w-80%">
              you can upload a watermark that will appear across your work.
              Please upload a png or svg that is less than 10mb.
            </div>
            <div className="w-220 bg-white h-220 flex items-center">
              <label
                for="2"
                className="font-bold text-sm uppercase text-secondary tracking leading-32 cursor-pointer text-center w-122 h-33 mx-auto bg-gray"
              >
                ADD Image
              </label>

              <FormField
                accept="image/*"
                className="hidden"
                multiple="multiple"
                id="2"
                name=""
                // customChange={customChange}
                // onChange={fileReader}
                // onBlur={handleBlur}
                type="file"
              />
            </div>
          </div>
        </div>
        <div className="hr-b pt-25 pb-15">
          <div className="admin-h2 pb-5">Add a welcome video</div>
          <TextField
            name="welcome_video"
            placeholder="YOUTUBE OR VIDEO URL"
            mb="6"
            height="38"
            label="Add a Youtube or Vimeo Url that introduces your gallery:"
            className="w-55%"
          />
        </div>
        <div>
          <SubmitButton className={`h-42 w-251 mt-30`} color="primary">
            Save Changes
          </SubmitButton>
        </div>
      </div>
    </Form>
  );
}

export default GallerySetting;
