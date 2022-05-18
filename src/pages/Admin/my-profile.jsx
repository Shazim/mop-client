import React, { useState } from 'react';
import { Form } from 'components/app/forms';
import { TextField } from 'components/atoms/form';
import TextArea from 'components/atoms/form/TextArea';
import { AdminLayout } from 'Layout';
import Button from 'components/atoms/buttons/Button';
import { getStyles, getProfile, updateProfile } from 'api/api-services';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import { useFetch, usePost } from 'hooks';
import { formDataHandler } from 'utils';
import { FormField } from 'components/app/forms';
import { useEffect } from 'react';

function MyProfile() {
  const [initial, setInitial] = useState({
    firstName: '',
    surname: '',
    bio: '',
    companyName: 'private_gallery',
    phoneNumber: '',
    imageFile: {},
    styleIds: {},
    facebook: '',
    linkedin: '',
    instagram: '',
    customParam: '',
  });

  const { data: stylesData } = useFetch(getStyles);
  const { data: profileData } = useFetch(getProfile);
  const [submitProfile, { data: profileResponse }] = usePost(updateProfile);

  useEffect(() => {
    if (profileData) {
      const {
        first_name,
        surname,
        bio,
        email,
        company_name,
        phone_number,
        picture,
        styles,
        social_account,
      } = profileData;

      const { facebook, linkedin, instagram } = social_account || {};
      let styleIds = {};
      styles.map((item) => (styleIds[item.id] = item.id));

      setInitial({
        ...initial,
        firstName: first_name,
        surname,
        bio,
        email,
        companyName: company_name,
        phoneNumber: parseInt(phone_number),
        imageFile: { imageLink: picture },
        facebook,
        linkedin,
        instagram,
        styleIds,
      });
    }
  }, [profileData]);

  const handleStyles = (values, setFieldValue, id) => {
    const copyValues = { ...values };
    const { styleIds } = copyValues;
    let copyStyleIds = { ...styleIds };
    if (copyStyleIds[id]) {
      delete copyStyleIds[id];
    } else {
      copyStyleIds[id] = id;
    }
    setFieldValue('styleIds', copyStyleIds);
  };

  const onSubmit = (values) => {
    const {
      firstName,
      surname,
      companyName,
      phoneNumber,
      bio,
      facebook,
      linkedin,
      instagram,
      imageFile,
      customParam,
      styleIds,
    } = values;

    if (customParam === 'profile') {
      let copySubmitData = {
        first_name: firstName,
        phone_number: phoneNumber,
        company_name: companyName,
        surname,
        picture: imageFile,
      };

      copySubmitData.picture.image
        ? (copySubmitData.picture = copySubmitData.picture.image)
        : delete copySubmitData.picture;
      const formData = new FormData();
      Object.entries(copySubmitData).map(([key, value]) => {
        formDataHandler('profile', key, value, formData);
      });
      submitProfile({ variables: formData });
    }

    if (customParam === 'socialLink') {
      const copySubmitData = {
        profile: { social_account: { facebook, linkedin, instagram } },
      };
      submitProfile({ variables: copySubmitData });
    }

    if (customParam === 'bio') {
      const copySubmitData = {
        bio,
      };
      submitProfile({ variables: copySubmitData });
    }

    if (customParam === 'styles') {
      let copyStyleIds = [];
      Object.entries(styleIds).map(([key, value]) => {
        copyStyleIds.push(value);
      });

      const copySubmitData = {
        profile: { style_ids: copyStyleIds },
      };
      submitProfile({ variables: copySubmitData });
    }
  };

  const customChange = (name, files, setFieldValue) => {
    let _URL = window.URL || window.webkitURL;

    let imageLink = _URL.createObjectURL(files[0]);
    let imageFile = {
      image: files[0],
      imageLink,
    };
    setFieldValue(name, imageFile);
  };

  return (
    <AdminLayout title="profile">
      <Form
        initialValues={initial}
        onSubmit={onSubmit}
        // validationSchema={gallerySchema}
        enableReinitialize={true}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <div>
            <div className="admin-h2 mt-28 mb-19 sm:text-center sm:font-medium">
              profile setup
            </div>
            <div className="admin-des pb-24 sm:text-center">
              Click to edit your profile picture.
            </div>
            <div className="bg-gray-lighter w-244 h-244 relative mb-31 sm:w-276 sm:h-244 sm:items-center">
              <img
                src={values['imageFile']?.imageLink}
                alt=""
                className="w-200 h-200 absolute transform-xy top-50% left-50% sm:w-276 sm:h-244 "
              />
              <div>
                <label
                  for="1"
                  className="w-116 h-33 absolute bottom-33 cursor-pointer transform-x left-50% uppercase bg-gray admin-label flex justify-center items-center"
                >
                  Edit
                </label>
                <FormField
                  accept="image/*"
                  className="hidden"
                  id="1"
                  name="imageFile"
                  customChange={(name, file) =>
                    customChange(name, file, setFieldValue)
                  }
                  type="file"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="grid grid-cols-3 gap-x-32 gap-y-20 mb-22 w-100%">
                <TextField
                  name="firstName"
                  placeholder="rebecca"
                  mb="6"
                  height="38"
                  label="First Name"
                />
                <TextField
                  name="surname"
                  placeholder="warbis"
                  mb="6"
                  height="38"
                  label="Sur Name"
                />
                <TextField
                  name="companyName"
                  placeholder="photo name"
                  mb="6"
                  height="38"
                  label="company Name"
                />

                <TextField
                  name="phoneNumber"
                  placeholder="07929665622"
                  mb="6"
                  height="38"
                  label="phone number"
                  type="number"
                />

                <TextField
                  name="email"
                  placeholder="myemail@gmail.com"
                  mb="6"
                  height="38"
                  label="email address"
                  readOnly={true}
                />
              </div>
              <Button
                color="gray"
                transform="uppercase"
                className="w-141 h-33 self-end"
                onClick={() => {
                  setFieldValue('customParam', 'profile');
                  handleSubmit();
                }}
              >
                Save
              </Button>
            </div>
            <div className="admin-h2 mt-20 mb-13">change password</div>
            <div className="hr-b pb-32 flex justify-between">
              <div className="grid grid-cols-3 gap-y-20 gap-x-32 w-100%">
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
              <Button
                color="gray"
                transform="uppercase"
                className="w-141 h-33 mt-90"
              >
                Save
              </Button>
            </div>
            <div className="admin-h2 mt-20 mb-10">
              Tell People About yourself
            </div>
            <div className="flex hr-b justify-between pb-32">
              <TextArea
                placeholder="Max 500 Character"
                label="edit your bio."
                className=" h-113"
                width="40%"
                mb="0"
                name="bio"
              />
              <Button
                color="gray"
                transform="uppercase"
                className="w-141 h-33 self-end"
                onClick={() => {
                  setFieldValue('customParam', 'bio');
                  handleSubmit();
                }}
              >
                Save
              </Button>
            </div>
            <div className="admin-h2 mt-20 mb-20">
              What Styles best describe your work?
            </div>
            <div className="hr-b pb-32">
              <div className="grid grid-cols-3 gap-20 ">
                {stylesData?.styles.map((style, index) => (
                  <>
                    <CheckBox
                      className=""
                      value={style.name}
                      onChange={() =>
                        handleStyles(values, setFieldValue, style?.id)
                      }
                      checked={values.styleIds[style?.id] == style?.id}
                    />
                  </>
                ))}
              </div>
              <Button
                color="gray"
                transform="uppercase"
                className="w-141 h-33 block ml-auto mr-0"
                onClick={() => {
                  setFieldValue('customParam', 'styles');
                  handleSubmit();
                }}
              >
                Save
              </Button>
            </div>
            <div className="admin-h2 mt-20 mb-12">
              link up your social media
            </div>
            <div className="admin-des text-black mb-15">
              Click to edit your profile picture.
            </div>

            <TextField
              name="facebook"
              placeholder="ENTER PROFILE URL"
              mb="6"
              height="38"
              label="facebook"
              className="w-40%"
            />
            <div className=" my-15">
              <TextField
                name="instagram"
                placeholder="ENTER PROFILE URL"
                mb="6"
                height="38"
                label="instagram"
                className="w-40%"
              />
            </div>
            <div className="flex justify-between mb-81 w-100%">
              <TextField
                name="linkedin"
                placeholder="ENTER PROFILE URL"
                mb="6"
                height="38"
                label="Linkdn"
                className="w-45%"
              />
              <Button
                color="gray"
                transform="uppercase"
                className="w-141 h-33 self-end"
                onClick={() => {
                  setFieldValue('customParam', 'socialLink');
                  handleSubmit();
                }}
              >
                Save
              </Button>
            </div>
          </div>
        )}
      </Form>
    </AdminLayout>
  );
}

export default MyProfile;
