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
import Button from 'components/atoms/buttons/Button';

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

  return (
    <div className="bg-primary-lighter h-100vh flex flex-col items-center">
      <div className="bg-white w-80% h-fit px-30 pt-36 pb-28 mt-41 shadow-sm">
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
      </div>
      <div className="mt-36">
        {step > 1 && (
          <button
            onClick={() => setStep((prev) => prev - 1)}
            className="w-153 h-33  bg-gray uppercase tracking text-secondary font-nunito-bold text-sm"
          >
            Back
          </button>
        )}
        {lengthOfSteps == step && (
          <Button className="ml-22 w-153 h-33">FINISH</Button>
        )}
      </div>
    </div>
  );
}

export default ExhibitionRoom;
