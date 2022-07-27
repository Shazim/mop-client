import EnterIcon from 'assets/images/svgs/EnterIcon';
import Button from 'components/atoms/buttons/Button';
import React from 'react';

function GalleryCard({
  info = false,
  imageClass = '',
  className: classes = '',
  title = 'Gallery Name',
  imageUrl = '/images/card/bg_image2.svg',

  views = 1302,
  incImages = 28,
  onClick,
  enterExibit = false,
  buttonText = 'Add Info',
  handleButton,
  edit = true,
}) {
  return (
    <div className={`  relative ${classes}`} onClick={onClick}>
      <img
        className={` ${imageClass} sm:rounded-lg w-100% h-100%`}
        src={imageUrl}
      />
      <div className="absolute bottom-0 w-100% flex">
        <div className="w-100% ml-18 sm:ml-7 h-70 sm:h-40 text-white">
          <div className=" font-avenir-reg font-medium text-base tracking-tight sm:text-8 sm:font-medium leading-22 uppercase">
            {title}
          </div>
          <div className="flex text-xsm sm:text-6">
            <div>
              <span className="font-bold">{views}</span> Views
            </div>
            <div className="flex-grow">
              <span className="font-bold ml-10">{incImages}</span> Images
              Included
            </div>
            <div>
              {edit && (
                <Button
                  type="edit"
                  className=" sm:block w-100 h-33 mr-20 mt-_29 "
                  transform="uppercase"
                >
                  Add Info
                </Button>
              )}
            </div>
          </div>

          {enterExibit ? (
            <div className="flex items-center link">
              <EnterIcon className="w-13 h-11 mr-5 stroke-white" />
              <p className="font-reg text-xsm capitalize text-white leading-22">
                enter exibition room
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
        {info ? (
          <Button type="edit" className="w-100 h-33" transform="uppercase">
            Add Info
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default GalleryCard;
