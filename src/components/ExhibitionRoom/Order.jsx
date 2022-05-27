import React from 'react';
import ImageList from 'components/ImageList';

function Order() {
  return (
    <div className="sm">
      <div>
        <div className="admin-h1 pb-20">Choose your order</div>
        <div className="admin-label mb-12">
          Arrange your images into the order they will be viewed:
        </div>
        <div className="admin-des mb-22">
          Drag images up and down so they are arranged in the order you’d like
          them to be viewed. Please note that images at the top of the list will
          be viewed first.
        </div>
        <div className="pb-37 ">
          {Array.from(Array(5).keys())
            .slice(1)
            .map(() => (
              <ImageList name="image.jpeg" size="4mb" bg="gray-lighter" />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
