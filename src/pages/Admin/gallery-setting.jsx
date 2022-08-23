// ====================== IMPORTED LIBRARIES ========================
import React, { useState } from 'react';
import { useEffect } from 'react';
import { usePost, useFetch } from 'hooks';
// ====================== IMPORTED COMPONENT ========================
import SubmitButton from 'components/atoms/buttons/SubmitButton';
import TextField from 'components/atoms/form/TextField';
import ToggleButton from 'components/atoms/togglebutton/ToggleButton';
import { Form } from 'components/app/forms';
import { gallerySchema } from 'validation';
import UploadImageCard from 'components/atoms/uploadimageCard';
import { AdminLayout } from 'Layout';
// ====================== IMPORTED API ========================
import { createGallery, getGallery } from 'api/api-services';
import { formDataHandler } from 'utils';

const GallerySetting = () => {
  const { data: getData } = useFetch(getGallery);

  const [gallery, { data: dataPost, status: statusPost }] =
    usePost(createGallery);

  const onSubmit = (data) => {
    const copyData = { ...data };

    copyData.logo.image
      ? (copyData.logo = copyData.logo.image)
      : delete copyData.logo;

    copyData.watermark.image
      ? (copyData.watermark = copyData.watermark.image)
      : delete copyData.watermark;

    const formData = new FormData();
    Object.entries(copyData).map(([key, value]) => {
      formDataHandler('gallery', key, value, formData);
    });

    gallery({
      variables: formData,
    });
  };

  const [initial, setInitial] = useState({
    artist_name: '',
    name: '',
    gallery_type: 'private_gallery',
    domain: '',
    welcome_video: '',
    logo: {},
    watermark: {},
  });

  useEffect(() => {
    if (getData) {
      const {
        artist_name,
        name,
        gallery_type,
        domain,
        welcome_video,
        logo,
        watermark,
      } = getData || {};
      setInitial({
        ...initial,
        watermark: { imageLink: watermark },
        welcome_video,
        domain,
        gallery_type,
        logo: { imageLink: logo },
        name,
        artist_name,
      });
    }
  }, [getData]);

  useEffect(() => {
    if (dataPost) {
      const {
        artist_name,
        name,
        gallery_type,
        domain,
        welcome_video,
        logo,
        watermark,
      } = dataPost || {};
      setInitial({
        ...initial,
        watermark: { imageLink: watermark },
        welcome_video,
        domain,
        gallery_type,
        logo: { imageLink: logo },
        name,
        artist_name,
      });
    }
  }, [dataPost]);

  return (
    <AdminLayout title="gallery ">
      <Form
        initialValues={initial}
        onSubmit={onSubmit}
        validationSchema={gallerySchema}
        enableReinitialize={true}
      >
        {({ setFieldValue, values }) => (
          <div className="bg-primary-lighter pb-295">
            {/* <div className="admin-h2 mb-10">Name Setting</div> */}
            <div className="flex hr-b pb-28 sm:flex-col">
              <div className="w-50% mr-50 sm:w-full">
                <TextField
                  name="name"
                  placeholder="max 100 characters"
                  mb="6"
                  height="38"
                  label="gallery name"
                />
              </div>
              <div className="w-50% sm:w-full">
                <TextField
                  name="artist_name"
                  placeholder="max 100 characters"
                  mb="6"
                  height="38"
                  label="artist name"
                />
              </div>
            </div>
            <div className="admin-h2 pt-15 sm:hidden">Private or public</div>
            <div className="hidden admin-h2 pt-15 sm:block">Name Settings</div>
            <div className="flex flex-col sm:flex-col-reverse">
              <div className="admin-label my-17 ">
                you can choose here to make your gallery private, or publicly
                available via our search engines.
              </div>
              <div className="  flex  pb-30 sm:block">
                <ToggleButton
                  bg={
                    values['gallery_type'] == 'private_gallery'
                      ? 'bg-white mr-32'
                      : 'bg-gray mr-32'
                  }
                  onClick={() =>
                    setFieldValue('gallery_type', 'private_gallery')
                  }
                  className="w-193 h-32 sm:w-121 sm:h-49 mt-20 "
                >
                  Private Gallery
                </ToggleButton>
                <ToggleButton
                  bg={
                    values['gallery_type'] == 'public_gallery'
                      ? 'bg-white'
                      : 'bg-gray'
                  }
                  onClick={() =>
                    setFieldValue('gallery_type', 'public_gallery')
                  }
                  className=" w-193 h-32 sm:w-121 sm:h-49 mt-20 "
                >
                  Public Gallery
                </ToggleButton>
              </div>
            </div>
            <div className="hr-b pb-30 pt-20">
              <div className="admin-h2 pb-5 ">Domain</div>
              <TextField
                name="domain"
                placeholder="if you don’t have domain name, we will create one automatically for you"
                mb="6"
                height="38"
                label="if you don’t have domain name, we will create one automatically for you
                "
                className="w-55% sm:w-full"
              />
            </div>
            <div className="flex  pt-20 pb-29 sm:flex-col ">
              <div>
                <div className="admin-h2 ">logo and branding</div>
                <div className="admin-label my-18 leading-32 w-80%">
                  this will appear below your gallery name and artist name.
                  Please upload a png or svg that is less than 10mb.
                </div>
                <div className=" sm:flex justify-center">
                  <UploadImageCard label="Add Logo" id="logo" />
                </div>
              </div>
              <div className="hidden hr-b mt-48 sm:block"></div>
              <div>
                <div className="admin-h2 sm:mt-32">watermark</div>
                <div className="admin-label my-18 leading-32 w-80%">
                  you can upload a watermark that will appear across your work.
                  Please upload a png or svg that is less than 10mb.
                </div>
                <div className="sm:flex justify-center">
                  <UploadImageCard label="Add image" id="watermark" />
                </div>
              </div>
            </div>
            <div className="hr-b pt-25 pb-15 sm:hidden">
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
            <div className="sm:text-center">
              <SubmitButton className={`h-42 w-251 mt-30`} color="primary">
                Save Changes
              </SubmitButton>
            </div>
          </div>
        )}
      </Form>
    </AdminLayout>
  );
};

export default GallerySetting;
