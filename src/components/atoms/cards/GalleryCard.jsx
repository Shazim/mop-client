import Button from 'components/atoms/buttons/Button';
import React from 'react';

function GalleryCard({
  className: classes = '',
  obj = {
    title: 'Gallery Name',
    image_url: '/images/card/bg_image2.svg',
    views: 1302,
    incImages: 28,
  },
}) {
  return (
    <div className={`relative w-fit ${classes}`}>
      <img className="rounded-lg h-100%" src={obj.image_url} />
      <div className="absolute bottom-0 w-100%">
        <div className="flex w-100%">
          <div className="w-100% ml-18 mb-7 text-white">
            <div className=" font-avenir-reg font-medium text-base tracking-tight uppercase">
              {obj.title}
            </div>
            <div className="flex text-xsm">
              <div>
                <span className="font-bold">{obj.views}</span> Views
              </div>
              {/* <div>
            <span className="font-bold ml-10">{obj.incImages}</span> Images
            Included
          </div> */}
            </div>
          </div>
          <Button
            type="edit"
            className=" right-18 absolute b-10 w-100 h-33 "
            transform="uppercase"
          >
            Add Info
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
