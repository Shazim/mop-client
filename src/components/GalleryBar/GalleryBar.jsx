import React, { useState } from 'react';

function GalleryBar({
  setHandler,
  menus = ['galleries', 'exhibition', 'artists'],
}) {
  const [id, setId] = useState(0);

  return (
    <div className=" py-32 shadow-sm ">
      <div className="max-screen flex justify-between sm:px-23">
        <div className="flex items-center sm:w-100%">
          {menus.map((item, index) => (
            <div
              className={`uppercase mr-45 sm:mr-25 ${
                index == id ? 'text-primary' : 'text-secondary'
              } tracking  text-sm sm:text-base font-bold link`}
              onClick={() => {
                setId(index);
                setHandler(menus[index]);
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <img src="/images/menu/sub-menu.svg" className="link sm:hidden" />
      </div>
    </div>
  );
}

export default GalleryBar;
