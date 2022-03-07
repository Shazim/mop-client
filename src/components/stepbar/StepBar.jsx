import React from 'react';

function StepBar({
  steps = [
    { title: 'item details', status: true },
    { title: 'categories', status: true },
    { title: 'pricing', status: false },
    { title: 'exhibition', status: false },
  ],
}) {
  // .progress__container {
  //     width: 55rem;
  //     max-width: 100%;
  //     position: relative;
  //     margin-bottom: 5rem;
  //     display: flex;
  //     justify-content: space-between;
  //   }
  return (
    <div className="flex w-100% pt-61 justify-between">
      <div className="progress__container w-100% max-w-100% relative mb-80 flex justify-between">
        {steps.map((item, index) => (
          <>
            <div
              className={`w-41 h-41 text-avenir-reg text-2xl flex text-center font-medium items-center text-center justify-center z-50 rounded-full ${
                item.status == true
                  ? 'bg-secondary text-white'
                  : 'bg-gray-lighter text-secondary'
              }`}
            >
              {index + 1}

              <div
                className={`w-110 font-reg font-bold absolute uppercase tracking text-sm text-secondary top-50 text-center`}
              >
                {item.title}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default StepBar;
