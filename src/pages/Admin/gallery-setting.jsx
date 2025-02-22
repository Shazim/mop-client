// ====================== IMPORTED LIBRARIES ========================
import React, { useState } from 'react';
import { usePost, useFetch } from 'hooks';
import { TailSpin } from 'react-loader-spinner';
import { useEffect } from 'react';
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
import withArtistRoute from 'hoc/withArtistRoute';
import { toast } from 'react-toastify';

const GallerySetting = () => {
  const { data: getData, loading } = useFetch(getGallery);

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

    toast.success('Your Gallery created');
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
      setInitial((prev) => {
        return {
          ...prev,
          watermark: { imageLink: watermark },
          welcome_video,
          domain,
          gallery_type,
          logo: { imageLink: logo },
          name,
          artist_name,
        };
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
      setInitial((prev) => {
        return {
          ...prev,
          watermark: { imageLink: watermark },
          welcome_video,
          domain,
          gallery_type,
          logo: { imageLink: logo },
          name,
          artist_name,
        };
      });
      // toast.success('Successfully Updated Gallery');
    }
  }, [dataPost]);

  return (
    <AdminLayout title="gallery ">
      {loading ? (
        <div className="w-100% h-100vh flex items-center justify-center flex-col ">
          <TailSpin
            color="#C71118"
            height={80}
            width={80}
            artworks
            ariaLabel="loading"
          />
        </div>
      ) : (
        <Form
          initialValues={initial}
          onSubmit={onSubmit}
          // validationSchema={gallerySchema}
          enableReinitialize={true}
        >
          {({ setFieldValue, values, handleSubmit }) => (
            <div className=" pb-295">
              <div className="flex hr-b pb-28 sm:flex-col ">
                <div className="w-50% mr-50 sm:w-full">
                  <TextField
                    name="name"
                    placeholder="MAX 100 CHARACTERS"
                    mb="6"
                    className="h-40"
                    label="gallery name"
                  />
                </div>
                <div className="w-50% sm:w-full sm:mt-20">
                  <TextField
                    name="artist_name"
                    placeholder="MAX 100 CHARACTERS"
                    mb="6"
                    className="h-40"
                    label="artist name"
                  />
                </div>
              </div>
              <div className="admin-h2 pt-25 sm:hidden">Private or public</div>
              <div className="hidden admin-h2 pt-25 sm:block">
                Name Settings
              </div>
              <div className="flex flex-col sm:flex-col-reverse">
                <div className="hr-b hidden sm:block"></div>
                <div className="admin-label my-17 ">
                  you can choose here to make your gallery private, or publicly
                  available via our search engines.
                </div>

                <div className="  flex sm:mt-26 sm:pb-4 pb-30 sm:block">
                  <ToggleButton
                    bg={
                      values['gallery_type'] == 'private_gallery'
                        ? 'bg-primary '
                        : 'bg-white '
                    }
                    text={
                      values['gallery_type'] == 'private_gallery'
                        ? 'text-white'
                        : 'text-secondary'
                    }
                    onClick={() =>
                      setFieldValue('gallery_type', 'private_gallery')
                    }
                    className="w-193 h-32 sm:w-142 mr-32 sm:px-24 sm:mr-10 sm:leading-18 sm:h-49 mt-0 uppercase "
                  >
                    Private Gallery
                  </ToggleButton>
                  <ToggleButton
                    bg={
                      values['gallery_type'] == 'public_gallery'
                        ? 'bg-primary '
                        : 'bg-white'
                    }
                    text={
                      values['gallery_type'] == 'public_gallery'
                        ? 'text-white'
                        : 'text-secondary'
                    }
                    onClick={() =>
                      setFieldValue('gallery_type', 'public_gallery')
                    }
                    className=" w-193 h-32 sm:w-142 sm:px-24 sm:leading-18 sm:h-49 mt-0 uppercase"
                  >
                    Public Gallery
                  </ToggleButton>
                </div>
                <div className="hr-b sm:hidden"></div>
              </div>
              <div className="hr-b pb-31 pt-25 ">
                <div className="admin-h2 pb-5 sm:pb-18">Domain</div>
                <div className="sm:hidden">
                  <TextField
                    name="domain"
                    placeholder="if you don’t have domain name, we will create one automatically for you"
                    mb="6"
                    label="if you don’t have domain name, we will create one automatically for you
                "
                    className="w-55% h-38 sm:hidden"
                  />
                </div>
                <div className="hidden sm:block mb-5">
                  <TextField
                    name="domain"
                    placeholder="TYPE YOUR DOMAIN HERE"
                    mb="6"
                    label="type in a domain name:
                "
                    className="hidden sm:h-38 sm:block sm:w-full"
                  />
                </div>
              </div>
              <div className="flex  pt-20 hr-b pb-29 sm:flex-col ">
                <div>
                  <div className="admin-h2 ">logo and branding</div>
                  <div className="admin-label my-18 leading-32 w-80% sm:w-full">
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
                  <div className="admin-label my-18 leading-32 w-80% sm:w-full">
                    you can upload a watermark that will appear across your
                    work. Please upload a png or svg that is less than 10MB.
                  </div>
                  <div className="sm:flex justify-center">
                    <UploadImageCard label="Add image" id="watermark" />
                  </div>
                </div>
              </div>
              <div className="hr-b pt-25 pb-28 sm:hidden">
                <div className="admin-h2 pb-5">Add a welcome video</div>
                <TextField
                  name="welcome_video"
                  placeholder="YOUTUBE OR VIDEO URL"
                  mb="6"
                  height="38"
                  label="Add a Youtube or Vimeo Url that introduces your gallery:"
                  className="w-55% h-38"
                />
              </div>
              <div className="sm:text-center" onClick={handleSubmit}>
                <SubmitButton className={`h-42 w-251 mt-30`} color="primary">
                  SAVE CHANGES
                </SubmitButton>
              </div>
            </div>
          )}
        </Form>
      )}
    </AdminLayout>
  );
};

export default withArtistRoute(GallerySetting);
