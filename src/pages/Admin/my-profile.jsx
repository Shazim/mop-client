// ====================== IMPORTED LIBRARIES ========================
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useFetch, usePost } from 'hooks';
// ====================== IMPORTED COMPONENT ========================
import { Form } from 'components/app/forms';
import SelectOptions from 'components/atoms/form/SelectOptions';
import { TextField } from 'components/atoms/form';
import TextArea from 'components/atoms/form/TextArea';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import { AdminLayout } from 'Layout';
import Button from 'components/atoms/buttons/Button';
import { FormField } from 'components/app/forms';
// ====================== IMPORTED API ========================
import { getStyles, getProfile, updateProfile } from 'api/api-services';
import { formDataHandler } from 'utils';
import withArtistRoute from 'hoc/withArtistRoute';

const MyProfile = () => {
  const [initial, setInitial] = useState({
    firstName: '',
    surname: '',
    bio: '',
    companyName: '',
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
      styles?.map((item) => (styleIds[item.id] = item.id));

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
            {/* {values > 0
                    ? values['imageFile']?.imageLink
                    :} */}
            <div className="admin-des pb-24 sm:text-center">
              Click to edit your profile picture.
            </div>
            <div className="test bg-gray-lighter w-244 h-244 relative mb-31 sm:w-full sm:h-244 sm:bg-offwhite ">
              <img
                src={
                  values['imageFile']?.imageLink
                    ? values['imageFile']?.imageLink
                    : `${window.location.origin}/images/profile-avatar.png`
                }
                alt={values['imageFile']?.imageLink}
                className="w-200 object-cover h-200 absolute transform-xy top-50% left-50% sm:w-276 sm:h-244 "
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
            <div className="hr-b mt-31 sm:block"></div>
            <div className="flex pt-22 justify-between hr-b  pb-12 sm:grid grid-cols-1">
              <div className="grid grid-cols-3 gap-x-32 gap-y-28 mb-22 w-100% sm:grid-cols-1">
                <TextField
                  name="firstName"
                  placeholder="FIRST NAME"
                  mb="6"
                  label="First Name"
                  className="h-38"
                />
                <TextField
                  name="surname"
                  placeholder="LAST NAME"
                  mb="6"
                  className="h-38"
                  label="Surname"
                />
                <TextField
                  name="companyName"
                  placeholder="COMPANY NAME"
                  mb="6"
                  className="h-38"
                  label="company Name"
                />

                <TextField
                  name="phoneNumber"
                  placeholder="PHONE NUMBER"
                  mb="6"
                  className="h-38"
                  label="PHONE NUMBER"
                  type="number"
                />

                <TextField
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  mb="6"
                  className="h-38"
                  label="email address"
                  readOnly={true}
                />
              </div>
              <Button
                color="gray"
                transform="uppercase"
                className="w-141 h-33 mb-20 self-end  sm:ml-auto sm:mr-auto"
                onClick={() => {
                  setFieldValue('customParam', 'profile');
                  handleSubmit();
                }}
              >
                Save
              </Button>
            </div>
            <div className="admin-h2 mt-20 mb-13">change password</div>
            <div className="hr-b pb-32 flex justify-between sm:grid grid-cols-1">
              <div className="grid grid-cols-3 gap-y-20 gap-x-32 w-100% sm:grid-cols-1">
                <TextField
                  name="oldPassword"
                  type="password"
                  placeholder="******"
                  mb="6"
                  className="h-38"
                  label="old Password"
                />
                <TextField
                  name="newPassword"
                  type="password"
                  placeholder="*****"
                  mb="6"
                  className="h-38"
                  label="New Password"
                />
                <TextField
                  name="confirmPassword"
                  type="password"
                  placeholder="*******"
                  mb="6"
                  className="h-38"
                  label="Confirm New Password"
                />
              </div>
              <Button
                color="gray"
                transform="uppercase"
                className="w-141 h-33 mt-96 self-end sm:ml-auto sm:mr-auto sm:mt-20"
              >
                Save
              </Button>
            </div>
            <div className="admin-h2 mt-20 mb-10 sm:text-center">
              Tell People About yourself
            </div>
            <div className="flex hr-b justify-between sm:grid grid-cols-1 sm:text-center pb-32">
              <TextArea
                placeholder="MAX 500 CHARACTERS"
                label="edit your bio."
                className=" h-113"
                width="40% sm:w-full"
                mb="0"
                name="bio"
              />
              <Button
                color="gray"
                transform="uppercase"
                className="w-141 h-33 self-end  sm:mt-23 sm:ml-auto sm:mr-auto"
                onClick={() => {
                  setFieldValue('customParam', 'bio');
                  handleSubmit();
                }}
              >
                Save
              </Button>
            </div>
            <div className="admin-h2 mt-20 mb-20 sm:w-277 sm:mr-auto sm:ml-auto sm:text-center">
              What Styles best describe your work?
            </div>
            <div className="hr-b pb-32">
              <SelectOptions
                className="hidden mt-22 mb-42 sm:w-100% sm:block"
                label="Select category"
              />

              <div className="grid grid-cols-3 gap-20  sm:hidden ">
                {stylesData?.styles?.map((style, index) => (
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
                className="w-141 h-33 block ml-auto mr-0 sm:mr-auto sm:mt-60"
                onClick={() => {
                  setFieldValue('customParam', 'styles');
                  handleSubmit();
                }}
              >
                Save
              </Button>
            </div>
            <div className="admin-h2 mt-20 mb-12 sm:text-center">
              link up your social media
            </div>
            {/* <div className="admin-des text-black mb-25 sm:text-center">
              Click to edit your profile picture.
            </div> */}

            <TextField
              name="facebook"
              placeholder="ENTER PROFILE URL"
              mb="6"
              label="facebook"
              className="h-38 w-40% sm:w-full"
            />
            <div className=" my-15">
              <TextField
                name="instagram"
                placeholder="ENTER PROFILE URL"
                mb="6"
                label="instagram"
                className="h-38 w-40% sm:w-full"
              />
            </div>
            <div className="flex justify-between mb-81 w-100% sm:flex-col">
              <TextField
                name="linkedin"
                placeholder="ENTER PROFILE URL"
                mb="6"
                label="twitter"
                className="h-38 w-45% sm:w-full"
              />
              <Button
                color="gray"
                transform="uppercase"
                className="w-141 h-33 self-end sm:ml-auto sm:mr-auto sm:mt-10"
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
};

export default withArtistRoute(MyProfile);
