import React from 'react';

function Arrow({ dir, onClick, type }) {
  return (
    <div onClick={onClick} className={`slick-arrow pointer  slick-${type}`}>
      <img src={`/images/slider/${dir}Arrow.svg`} />
    </div>
  );
}
export default Arrow;
