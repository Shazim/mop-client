import React from 'react';

function Order() {
  return (
    <div>
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
        <div className="pb-37 "></div>
      </div>
    </div>
  );
}

export default Order;
