import React from 'react';
import StyleCard from './StyleCard';

function Style() {
  return (
    <div>
      <div>
        <div className="admin-h1 pb-15">Choose your style</div>
        <div>
          <StyleCard
            title="Style Name"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra purus
          neque, scelerisque pulvinar sed tellus mattis. Sollicitudin sit amet
          ultricies cursus volutpat, scelerisque molestie imperd."
          />
        </div>
      </div>
    </div>
  );
}

export default Style;
