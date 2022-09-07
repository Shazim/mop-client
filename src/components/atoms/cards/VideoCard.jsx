import React from 'react';

function VideoCard({
  title = 'Prospect 4',
  imageUrl = '/images/card/bg_image.png',
  views = 1302,
  incImages = 28,
  comments = 6,
  edit = false,
  onClick,
  handleEdit
}) {
  return (
    <div
      className="stockroom__images max-w-900 relative  sm:mx-10 "
      onClick={onClick}
    >
      <img className="w-100% sm:rounded-8" src={imageUrl} />
      <img
        className="absolute  link left-50% top-50% transform-xy sm:invisible sm:hover:visible"
        src="/images/card/play-button.svg"
      />
      <div className=" sm:block absolute sm:bottom-80% right-20 bottom-5%">
        <button className=" hidden bg-white link w-75 h-33 rounded-md font-bold text-sm tracking text-secondary-darkest">
          Edit
        </button>
      </div>
      <div className="flex w-100% justify-between absolute left-0 bottom-0 pb-15 pl-30 pr-30 sm:relative sm:mt-15 text-white">
        <div>
          <div className="font-avenir-reg font-semibold  sm:text-base tracking-tight uppercase sm:text-secondary-dark">
            {title}
          </div>
          <div className="flex text-xsm sm:text-tiny font-reg sm:text-secondary-dark sm:mt-8">
            <div>
              <span className="font-bold ">{views}</span> Views
            </div>
            <div className="ml-10">
              <span className="font-bold">{incImages}</span> Images Included
            </div>
            <div className="ml-10">
              <span className="font-bold">{comments}</span> Comments
            </div>
          </div>
          <div className="hidden sm:block sm:flex gap-10 mt-10">
            <div>
              <img src="/images/icons/open.svg" alt="" />
            </div>
            <div className="font-nunito-reg font-bold text-secondary-dark uppercase text-sm">
              Enter Exhibition Room
            </div>
          </div>
        </div>
        {edit && (
          <button onClick={handleEdit} className="bg-white w-75 h-33 rounded-md  font-bold text-sm tracking text-secondary-darkest">
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default VideoCard;
