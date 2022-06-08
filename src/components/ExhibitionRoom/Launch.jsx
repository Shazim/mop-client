import React from 'react';
import { useFormikContext } from 'formik';
import Button from 'components/atoms/buttons/Button';
import { useHistory } from 'react-router-dom';
import { routes } from 'routes';

function Launch() {
  const {
    values: { key },
    errors,
    touched,
  } = useFormikContext() || {};
  const history = useHistory();

  return (
    <div>
      <div className="pt-38 pb-39 flex flex-col items-center">
        <div className="admin-h1">Congratulations!</div>
        <div className="admin-label--light pb-47">
          Your exhibition is now{' '}
          <span className="text-secondary font-bold">live.</span> Get sharing!
        </div>
        <div className="flex w-100% sm:flex-col">
          <input
            className="bg-gray-lighter h-33 sm:h-78 w-100% outline-none text-center"
            placeholder="exhibit.vip/gal/123456"
            value={key}
            readOnly={true}
          />
          <button
            onClick={() => navigator.clipboard.writeText(key)}
            className="w-116 h-33 sm:w-full bg-gray admin-label shadow uppercase"
          >
            Copy
          </button>
        </div>
        <div className="hidden sm:flex mt-24  flex-col ">
          <Button
            className=" w-153 h-33 sm:w-251"
            onClick={() => history.push(routes.ROUTE_EXHIBITIONS)}
          >
            FINISH
          </Button>
          <Button
            // onClick={handleSubmit}
            // onClick={() => setStep((prev) => prev - 1)}
            color="gray"
            className="ml-22 w-153 sm:w-251 sm:ml-0 mt-20 h-33"
          >
            BACK
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Launch;
