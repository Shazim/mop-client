import React from 'react';
import {
  Launch,
  Artwork,
  Order,
  Style,
  ExhibitionDemo,
  Detail,
} from 'components/ExhibitionRoom/index';
import { useState } from 'react';
import { Form } from 'components/app/forms';
import { AdminLayout } from 'Layout';
import Button from 'components/atoms/buttons/Button';
import { exhibitionSchema } from 'validation';
import { createExhibitions } from 'api';
import { usePost } from 'hooks';
import { formDataHandler } from 'utils';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import Range from 'components/Range';
import { routes } from 'routes';

function ExhibitionRoom() {
  const steps = {
    1: <Detail />,
    2: <Artwork />,
    3: <Order />,
    4: <Style />,
    5: <ExhibitionDemo />,
    6: <Launch />,
  };

  const lengthOfSteps = Object.keys(steps).length;
  const [step, setStep] = useState(1);
  const [handleCreatePost, { data: dataPost }] = usePost(createExhibitions);
  const [initalValues, setInitialValues] = useState({
    room_name: '',
    artwork_ids: {},
    status: true,
    draft: false,
    exhibition_style_id: '',
    key: '',
  });
  const history = useHistory();

  const onSubmit = (data) => {
    const formData = new FormData();
    Object.entries(data).map(([key, value]) => {
      formDataHandler('exhibition', key, value, formData);
    });
    handleCreatePost({
      variables: formData,
    });
  };

  useEffect(() => {
    if (dataPost) {
      setInitialValues({ ...initalValues, key: dataPost?.key });
      setStep((prev) => prev + 1);
    }
  }, [dataPost]);

  return (
    <AdminLayout
      title="exhibition room"
      subtitle="up for sale"
      buttonText="ADD NEW ITEM"
      button={true}
    >
      <Range />
      {step == 0 ? null : (
        <div className="bg-primary-lighter h-auto pb-130 flex flex-col items-center">
          <Form
            initialValues={initalValues}
            onSubmit={onSubmit}
            validationSchema={exhibitionSchema}
            enableReinitialize={true}
          >
            {({ handleSubmit, values }) => (
              <>
                <div className="bg-white w-60% h-fit px-30 pt-36 pb-28 mt-41 shadow-sm">
                  {steps[step]}
                  {lengthOfSteps != step && (
                    <div className="hr-form-t flex justify-end pt-28 mt-39 sm:flex-col items-center">
                      <Button
                        className="w-153 h-33 sm:w-251"
                        onClick={() =>
                          values.room_name == '' && step == 1
                            ? handleSubmit()
                            : step == 5 && values.exhibition_style_id == ''
                            ? handleSubmit()
                            : step == 2 &&
                              Object.keys(values.artwork_ids).length == 0
                            ? handleSubmit()
                            : step == 5
                            ? handleSubmit()
                            : setStep((prev) => prev + 1)
                        }
                      >
                        NEXT
                      </Button>
                      <div className="mt-36 hidden flex justify-center sm:flex flex-col">
                        {step > 1 && step < 6 && (
                          <Button
                            // onClick={handleSubmit}
                            onClick={() => setStep((prev) => prev - 1)}
                            color="gray"
                            className="ml-22 w-153 sm:w-251 sm:ml-0 h-33"
                          >
                            BACK
                          </Button>
                        )}
                        {step == 5 && (
                          <Button
                            color="gray"
                            className=" sm:mt-16 ml-22 w-203 h-33"
                          >
                            SAVE AS DRAFT
                          </Button>
                        )}
                        {lengthOfSteps == step && (
                          <Button
                            className="ml-22 w-153 h-33"
                            onClick={() =>
                              history.push(routes.ROUTE_EXHIBITIONS)
                            }
                          >
                            FINISH
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-36  flex justify-center sm:hidden">
                  {step > 1 && step < 6 && (
                    <Button
                      // onClick={handleSubmit}
                      onClick={() => setStep((prev) => prev - 1)}
                      color="gray"
                      className="ml-22 w-153 sm:w-251 sm:ml-0 h-33"
                    >
                      BACK
                    </Button>
                  )}
                  {step == 5 && (
                    <Button color="gray" className="ml-22 w-203 h-33">
                      SAVE AS DRAFT
                    </Button>
                  )}
                  {lengthOfSteps == step && (
                    <Button
                      className="ml-22 w-153 h-33"
                      onClick={() => history.push(routes.ROUTE_EXHIBITIONS)}
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
}

export default ExhibitionRoom;
