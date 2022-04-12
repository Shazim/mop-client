import React from 'react';

function StyleCard({ title, description, active = false }) {
  return (
    <div className="flex">
      <img src="/images/style-card.svg" alt="" />
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
