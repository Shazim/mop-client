import React from 'react';

function Pagination({
  pageDetails = { total_pages: 1 },
  currentPage = 1,
  setCurrentPage,
  className,
}) {
  const active = 'text-primary';
  return (
    <>
      {pageDetails?.total_pages != 1 ? (
        <div className={`flex ${className}`}>
          {Array.from(Array(pageDetails.total_pages + 1).keys())
            .slice(1)
            .map((index) => (
              <div
                className={`mr-8 cursor-pointer ${
                  index == currentPage ? active : ''
                }`}
                onClick={() => {
                  setCurrentPage(index);
                }}
              >
                {index}
              </div>
            ))}
        </div>
      ) : null}
    </>
  );
}

export default Pagination;
