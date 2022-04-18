import React from 'react';

function VideoCard({
  title = 'Prospect 4',
  imageUrl = '/images/card/bg_image.png',
  views = 1302,
  incImages = 28,
  comments = 6,
  edit = false,
  onClick,
}) {
  return (
    <div className="relative max-w-sm" onClick={onClick}>
      <img className="w-100% rounded-8" src={imageUrl} />
      <img
        className="absolute link left-50% top-50% transform-xy"
        src="/images/card/play-button.svg"
      />
      <div className="flex w-100% justify-between absolute left-0 bottom-0 pb-15 pl-30 pr-30 text-white">
        <div>
          <div className=" font-avenir-reg nunito-semibold tracking-tight uppercase">
            {title}
          </div>
          <div className="flex text-xsm font-reg">
            <div>
              <span className="font-bold">{views}</span> Views
            </div>
            <div className="ml-10">
              <span className="font-bold">{incImages}</span> Images Included
            </div>
            <div className="ml-10">
              <span className="font-bold">{comments}</span> Comments
            </div>
          </div>
        </div>
        {edit && (
          <button className="bg-white w-75 h-33 rounded-md font-bold text-sm tracking text-secondary-darkest">
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default VideoCard;
