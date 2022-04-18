import React from 'react';

function StyleCard({
  title,
  description,
  active = false,
  image = '/images/style-card.svg',
  onClick,
}) {
  return (
    <div className="flex" onClick={onClick}>
      <img src={image} alt="" className="w-292 h-183 rounded-l-sm" />
      <div className="bg-gray w-318 pt-30 pl-30 pr-21 rounded-r-sm">
        <div className="flex mb-11">
          <div
            className={`text-${
              active ? 'primary' : 'secondary'
            } uppercase tracking font-nunito-bold`}
          >
            {title}
          </div>
          {active ? (
            <img src="/images/tick.svg" alt="" className="ml-10" />
          ) : null}
        </div>
        <div className="text-sm text-secondary font-nunito-light tracking-tightest ">
          {description}
        </div>
      </div>
    </div>
  );
}

export default StyleCard;
