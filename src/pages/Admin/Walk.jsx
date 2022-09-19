import Detail from 'components/StockItem/Detail';
import React, { useState } from 'react';
import Tour from 'reactour';

const Walk = () => {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isShowingMore, setIsShowingMore] = useState(false);
  const closeTour = () => {
    setIsTourOpen(false);
  };
  const openTour = () => {
    setIsTourOpen(true);
  };
  const steps = [
    {
      selector: '[data-tut="reactour__iso"]',
      content: `Ok, let's start with the name of the Tour that is about to begin.`,
    },
    {
      selector: '[data-tut="reactour__logo"]',
      content: `And this is our cool bus...`,
    },
    {
      selector: '[data-tut="reactour__copy"]',
      content: `Keep in mind that you could try and test everithing during the Tour. 
        For example, try selecting the highlighted text…`,
    },
  ];
  //  const disableBody = (target) => disableBodyScroll(target);
  //   const enableBody = (target )=> enableBodyScroll(target);

  return (
    <div>
      <Detail data={openTour} />
      <Tour onRequestClose={closeTour} steps={steps} />
    </div>
  );
};

export default Walk;
