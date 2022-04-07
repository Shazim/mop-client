import Button from 'components/atoms/buttons/Button';
import React from 'react';

function GalleryCard({
  className: classes = '',
  title = 'Gallery Name',
  imageUrl = '/images/card/bg_image2.svg',
  views = 1302,
  incImages = 28,
  onClick,
  buttonText = 'Add Info',
  handleButton,
}) {
  return (
    <div className={`relative w-fit ${classes}`} onClick={onClick}>
      <img className="rounded-lg  w-280 h-280" src={imageUrl} />
      <div className="absolute bottom-0 w-100%">
        <div className="flex w-100%">
          <div className="w-100% ml-18 mb-7 text-white">
            <div className=" font-avenir-reg font-medium text-base tracking-tight uppercase">
              {title}
            </div>
            <div className="flex text-xsm">
              <div>
                <span className="font-bold">{views}</span> Views
              </div>
              {/* <div>
            <span className="font-bold ml-10">{incImages}</span> Images
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
