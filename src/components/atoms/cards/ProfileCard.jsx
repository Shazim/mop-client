import React from 'react';
import Button from '../buttons/Button';

function ProfileCard({
  obj = {
    title: 'excellent',
    image_url: '/images/card/profilecard_image.svg',
    views: 1302,
    incImages: 1302,
  },
}) {
  return (
    <div className="flex justify-center items-center bg-white p-22 mr-24">
      <div className="w-191 h-146 sm:w-90 sm:h-83 relative link">
        <img className="" src={obj.image_url} />
        <Button
          className="w-100% h-33 sm:h-16 sm:text-7 uppercase absolute bottom-0 tracking text-secondary"
          color="gray"
        >
          {' '}
          View Gallery
        </Button>
      </div>
      <div className="w-100% sm:w-70% text-dark ml-26 sm:ml-15">
        <div className="flex sm:justify-between ">
          <div className=" font-avenir-reg text-20 sm:text-tiny text-primary tracking-tight uppercase mr-13">
            {obj.title}
          </div>
          <div className="flex pt-4 sm:pt-0">
            {[...Array(5)].map((item, index) => (
              <img
                className="w-17 h-17 sm:h-11 sm:w-11 mr-2"
                src="/images/card/star_image.svg"
              />
            ))}
          </div>
        </div>
        <div className="w-299 sm:w-100% font-light text-sm sm:text-8 text-secondary-dark leading-9 sm:leading-15 mb-15">
          Lorem ipsum dolor sit amet, consectetur adipihg elit. Tincidunt
          viverra pharetra ultricies elaentum.{' '}
        </div>
        <div className="flex text-xsm">
          <div className="flex justify-center items-center text-secondary">
            <img
              className="w-28 h-29 sm:w-17 sm:h-17 rounded-full"
              src="/images/card/userprofile_image.svg"
            />
            <div className="font-avenir-reg text-base sm:text-8 tracking-tight font-medium uppercase ml-10">
              kate smith
            </div>
            <div className="sm:text-8">
              <span className="font-bold ml-10 sm:text-8 capitalize">
                {obj.incImages}
              </span>{' '}
              Gallery views
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
