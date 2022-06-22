import React from 'react';

function Arrow({ dir, onClick, type }) {
  return (
    <div
      onClick={onClick}
      className={`mockup-${dir}-arrow ${
        onClick == null ? 'slick-disabled' : ''
      }`}
    >
      <img src={`/images/arrows/arrow-mockup.svg`} />
    </div>
  );
}
export default Arrow;
