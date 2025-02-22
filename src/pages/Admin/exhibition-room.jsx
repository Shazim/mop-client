// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useFetch, usePost } from 'hooks';
import { routes } from 'routes';
// ====================== IMPORTED COMPONENTS ========================
import {
  Launch,
  Artwork,
  Order,
  Style,
  ExhibitionDemo,
  Detail,
} from 'components/ExhibitionRoom/index';
import { Form } from 'components/app/forms';
import { AdminLayout } from 'Layout';
import Button from 'components/atoms/buttons/Button';
import StepBar from 'components/stepbar/StepBar';

// ====================== IMPORTED api ========================
import { exhibitionSchema } from 'validation';
import { createExhibitions } from 'api';

// ====================== IMPORTED utils ========================
import { formDataHandler } from 'utils';
import withArtistRoute from 'hoc/withArtistRoute';
import { getCookie } from 'cookies/Cookies';
import { getSingleExhibition } from 'api/api-services';

const ExhibitionRoom = () => {
  const user = getCookie('user') && JSON.parse(getCookie('user'));
  const { user_type } = user?.user || {};
  const history = useHistory();
  const { id } = useParams();
  const { data: ExhibitionsData } = useFetch(getSingleExhibition, {
    variables: id,
  });

  const steps = {
    1: <Detail />,
    2: <Artwork />,
    // 3: <Order />,
    3: <Style />,
    4: <ExhibitionDemo />,
    5: <Launch />,
  };

  const [detail, setDetail] = useState([
    'Detail',
    'Artwork',
    'Style',
    'Exhibition',
    'Launch',
  ]);
  const [store, setStore] = useState('');
  const lengthOfSteps = Object.keys(steps).length;
  const [step, setStep] = useState(1);
  // const handleStore = (param) => {
  //   console.log('PARAMS :', param);
  //   setStore(param);
  //   return param;
  // };

  // const check = (step) => {
  //   const renderStep = {
  //     1: handleStore('Detail'),
  //     2: handleStore('Artwork'),
  //     3: handleStore('Order'),
  //     4: handleStore('Style'),
  //     5: handleStore('Exhibition'),
  //     6: handleStore('Launch'),
  //   }[step];
  //   console.log('RENDER', renderStep);
  //   return renderStep || history.push(`${routes.ROUTE_EXHIBITION_ROOM}/live`);
  // };
  // useEffect(() => {
  //   console.log('STEP :', step);
  //   check(step);
  //   console.log('STEP :', check(step));
  // }, [step]);

  // console.log('check function', check(`${step}`));

  const [handleCreatePost, { data: dataPost }] = usePost(createExhibitions);
  const [initialValues, setInitialValues] = useState({
    room_name: '',
    artwork_ids: {},
    status: true,
    draft: false,
    image: {},
    exhibition_style_id: '',
  });

  useEffect(() => {
    if (ExhibitionsData?.artworks) {
      const updatedArtworkIds = {};
      const artworkIds = ExhibitionsData?.artworks?.map(
        (item) => (updatedArtworkIds[item.id] = item.id)
      );
      ExhibitionsData.artwork_ids = updatedArtworkIds;
      ExhibitionsData.exhibition_style_id = ExhibitionsData.exhibition_style.id;
      ExhibitionsData.image = ExhibitionsData.image;
      const draftsInitialValues = {
        room_name: ExhibitionsData.room_name,
        artwork_ids: updatedArtworkIds,
        status: ExhibitionsData.status,
        draft: ExhibitionsData.draft,
        exhibition_style_id: ExhibitionsData.exhibition_style.id,
        artist_name: ExhibitionsData.artist_name,
        image: ExhibitionsData.image,
      };
      setInitialValues(draftsInitialValues);
    }
  }, [ExhibitionsData]);

  const onSubmit = (data) => {
    let copyImage = data?.image;
    data = { ...data, image: copyImage?.image };
    const formData = new FormData();
    Object.entries(data).map(([key, value]) => {
      formDataHandler('exhibition', key, value, formData);
    });

    handleCreatePost({
      variables: formData,
    });
  };
  const handleDraft = (val, handleSubmit, values) => {
    // handleSubmit();
    onSubmit(values);
  };
  const handleForm = (values) => {
    onSubmit(values);
    history.push(`${routes.ROUTE_EXHIBITION_ROOM}/live`);
  };
  useEffect(() => {
    if (step == 0) {
      setStep((prev) => prev - 1) && setDetail('');
    } else if (step == 1) {
      setStore('Detail');
    } else if (step == 2) {
      setStore('Artwork');
    } else if (step == 3) {
      setStore('Style');
    } else if (step == 4) {
      setStore('Exhibition');
    } else if (step == 5) {
      setStore('Launch');
    } else {
      user_type === 'artist'
        ? history.push(`${routes.ROUTE_EXHIBITION_ROOM}/live`)
        : history.push(routes.ROUTE_EXHIBITIONS);
    }
  }, [step]);

  useEffect(() => {
    if (dataPost) {
      setInitialValues({ ...initialValues, key: dataPost?.key });
      if (dataPost.draft)
        history.push(`${routes.ROUTE_EXHIBITION_ROOM}/drafts`);
      else setStep((prev) => prev + 1);
    }
  }, [dataPost]);

  return (
    <AdminLayout title="exhibition room">
      <div className="w-55% sm:h-100 m-auto sm:w-80%">
        <StepBar steps={detail} step={store} />
      </div>
      {step == 0 ? null : (
        <div className=" h-auto pb-130 flex flex-col items-center">
          <Form
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={exhibitionSchema}
            enableReinitialize={true}
          >
            {({ handleSubmit, values }) => (
              <>
                <div className="bg-white w-60% h-fit  pt-36 pb-28 shadow-sm sm:w-80%">
                  {steps[step]}
                  {lengthOfSteps != step && (
                    <div className="hr-form-t flex justify-end pt-28 mt-39 px-47">
                      <Button
                        className="w-153 h-33"
                        onClick={() =>
                          values.room_name == '' && step == 1
                            ? handleSubmit()
                            : step == 4 && values.exhibition_style_id == ''
                            ? handleSubmit()
                            : step == 2 &&
                              Object.keys(values.artwork_ids).length == 0
                            ? handleSubmit()
                            : step == 4
                            ? handleDraft(
                                (values['draft'] = false),
                                handleSubmit,
                                values
                              )
                            : setStep((prev) => prev + 1)
                        }
                      >
                        NEXT
                      </Button>
                    </div>
                  )}
                </div>
                <div className="mt-36 flex justify-center">
                  {step >= 1 && step < 6 && (
                    <Button
                      // onClick={handleSubmit}
                      onClick={() => setStep((prev) => prev - 1)}
                      color="gray"
                      className="ml-22 w-153 h-33"
                    >
                      BACK
                    </Button>
                  )}
                  {step == 4 && (
                    <Button
                      onClick={() => {
                        handleDraft(
                          (values['draft'] = true),
                          handleSubmit,
                          values
                        );
                      }}
                      color="gray"
                      className="ml-22 w-203 h-33"
                    >
                      SAVE AS DRAFT
                    </Button>
                  )}
                  {lengthOfSteps === step && (
                    <Button
                      className="ml-22 w-153 h-33"
                      onClick={() => handleForm(values)}
                    >
                      FINISH
                    </Button>
                  )}
                </div>
              </>
            )}
          </Form>
        </div>
      )}
    </AdminLayout>
  );
};

export default withArtistRoute(ExhibitionRoom);
