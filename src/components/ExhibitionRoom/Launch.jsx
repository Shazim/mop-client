// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
import { useFormikContext } from 'formik';

const Launch = () => {
  const {
    values: { key },
    errors,
    touched,
  } = useFormikContext() || {};

  return (
    <div className="px-32">
      <div className="pt-38 pb-39 flex flex-col items-center">
        <div className="admin-h1">Congratulations!</div>
        <div className="admin-label--light pb-47">
          Your exhibition is now{' '}
          <span className="text-secondary font-bold">live.</span> Get sharing!
        </div>
        <div className="flex w-100% ">
          <input
            className="bg-gray-lighter h-33 w-100% outline-none text-center"
            placeholder="exhibit.vip/gal/123456"
            value={key}
            readOnly={true}
          />
          <button
            onClick={() => navigator.clipboard.writeText(key)}
            className="w-116 h-33 bg-gray admin-label shadow uppercase"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Launch;
