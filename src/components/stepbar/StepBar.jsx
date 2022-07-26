import React from 'react';

function StepBar({
  steps = ['item details', 'categories', 'pricing', 'exhibition'],
  step,
}) {
  return (
    <div className="flex w-100% pt-55 justify-between">
      <div className="progress__container w-100% max-w-100% relative mb-80 flex justify-between">
        {steps.map((item, index) => (
          <>
            <div
              className={`w-41 h-41 text-avenir-reg text-2xl flex text-center font-medium items-center text-center justify-center z-50 rounded-full sm:w-15 sm:h-15 ${
                steps.indexOf(step) >= index
                  ? 'bg-secondary text-white'
                  : 'bg-gray-lighter text-secondary'
              }`}
            >
              <span className="sm:hidden">{index + 1}</span>

              <div
                className={`w-110 font-reg font-bold absolute uppercase tracking text-sm text-secondary top-50 text-center sm:hidden`}
              >
                {item}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default StepBar;
