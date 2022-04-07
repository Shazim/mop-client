import React from 'react';

function Pagination({
  pageDetails = {},
  currentPage = 1,
  setCurrentPage,
  className,
}) {
  const active = 'text-primary';
  return (
    <>
      {pageDetails?.total_pages != 1 ? (
        <div className={`flex ${className}`}>
          {Array.from(Array(pageDetails.total_pages).keys()).map((index) => (
            <div
              className={`mr-8 cursor-pointer ${
                index + 1 == currentPage ? active : ''
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default Pagination;
