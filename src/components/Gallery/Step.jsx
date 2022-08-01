// ====================== IMPORTED LIBRARIES ========================
import React from 'react';

const Step = ({
  title = 'Create',
  description = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt viverra pharetra ultricies elementum.',
}) => {
  return (
    <div>
      <div className="uppercase text-primary tracking-wider font-avenir-reg text-2xl pb-7 sm:text-xl">
        {title}
      </div>
      <div className="font-nunito-light text-lg text-secondary-dark w-60% sm:text-base">
        {description}
      </div>
    </div>
  );
};

export default Step;
