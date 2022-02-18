import React, { useState } from 'react';

function GalleryBar({ menus = ['galleries', 'exhibition', 'artists'] }) {
  const [id, setId] = useState();

  return (
    <div className=" py-32 shadow-sm ">
      <div className="max-screen flex justify-between ">
        <div className="flex items-center ">
          {menus.map((item, index) => (
            <div
              className={`uppercase mr-45 ${
                index == id ? 'text-primary' : 'text-secondary'
              } tracking  text-sm font-bold link`}
              onClick={() => setId(index)}
            >
              {item}
            </div>
          ))}
        </div>
        <img src="/images/menu/sub-menu.svg" className="link" />
      </div>
    </div>
  );
}

export default GalleryBar;
