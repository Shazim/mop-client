import React from 'react';

function ExhibitionDemo() {
  return (
    <div className="px-31">
      <div className="admin-h1 pb-10 text-center">your exhibition demo</div>
      <div className="text-sm text-secondary font-nunito-light tracking-tightest mb-50 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra purus
        neque, scelerisque pulvinar sed tellus mattis. Sollicitudin sit amet
        ultricies cursus volutpat, scelerisque molestie imperd.
      </div>
      <div className="bg-gray-darker w-100% h-297 relative">
        <img
          src="/images/play.svg"
          alt=""
          className="absolute top-50% left-50% transform-xy cursor-pointer"
        />
      </div>
    </div>
  );
}

export default ExhibitionDemo;
