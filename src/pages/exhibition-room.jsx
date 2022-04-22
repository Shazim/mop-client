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
import SubHeader from 'components/molecules/header/SubHeader';
import { exhibitionSchema } from 'validation';
import { useFormikContext } from 'formik';

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

  const data = () => {
    console.log('data');
  };

  return (
    <AdminLayout>
      <SubHeader
        title="exhibition room"
        subtitle="up for sale"
        buttonText="ADD NEW ITEM"
        button={true}
      />
      {step == 0 ? null : (
        <div className="bg-primary-lighter h-auto pb-130 flex flex-col items-center">
          <div className="bg-white w-60% h-fit px-30 pt-36 pb-28 mt-41 shadow-sm">
            <Form
              initialValues={{
                room_name: '',
                artist_name: '',
                artwork_ids: {},
                status: 'open',
                draft: false,
                exhibition_style_id: '',
                image: false,
              }}
              onSubmit={data}
              validationSchema={exhibitionSchema}
            >
              {({ handleSubmit }) => (
                <>
                  {steps[step]}
                  {lengthOfSteps != step && (
                    <div className="hr-form-t flex justify-end pt-28 mt-39">
                      <Button
                        className="w-153 h-33"
                        onClick={() => setStep((prev) => prev + 1)}
                      >
                        NEXT
                      </Button>
                    </div>
                  )}
                  <div className="mt-36">
                    {step > 1 && (
                      <Button
                        onClick={handleSubmit}
                        // onClick={() => setStep((prev) => prev - 1)}
                        color="gray"
                        className="ml-22 w-153 h-33"
                      >
                        BACK
                      </Button>
                    )}
                    <Button color="gray" className="ml-22 w-203 h-33">
                      SAVE AS DRAFT
                    </Button>
                    {lengthOfSteps == step && (
                      <Button className="ml-22 w-153 h-33">FINISH</Button>
                    )}
                  </div>
                </>
              )}
            </Form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default ExhibitionRoom;
