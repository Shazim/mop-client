import React, { useState } from 'react';

function GalleryBar({setHandler, menus = ['Galleries', 'Exhibition', 'Artists'] }) {
  const [id, setId] = useState(0);

  return (
    <div className=" py-32 shadow-sm ">
      <div className="max-screen flex justify-between ">
        <div className="flex items-center ">
          {menus.map((item, index) => (
            <div
              className={`uppercase mr-45 ${
                index == id ? 'text-primary' : 'text-secondary'
              } tracking  text-sm font-bold link`}
              onClick={() => {
                setId(index) 
                setHandler(menus[index])
                }}
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
