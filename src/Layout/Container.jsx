import React, { useState } from 'react';

function Container({ children, questionaire = false }) {
  const [width, setWidth] = useState();
  const handleWindowResize = () => setWidth(window.innerWidth);
  window.addEventListener('resize', handleWindowResize);

  return (
    <>
      {/* {window.innerWidth > 1150 ? (
        <div className=" sm:hidden ">
          <DesktopHeader questionaire={questionaire} />
          <div className="">{children}</div>
          <DesktopFooter />
        </div>
      ) : (
        <div className="">
          <MobileHeader questionaire={questionaire} />
          {children}
          <MobileFooter />
        </div>
      )} */}
    </>
  );
}

export default Container;
