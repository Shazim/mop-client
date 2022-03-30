import React from 'react';

function Pagination({ pageDetails = {}, currentPage = 1, setCurrentPage }) {
  const active = 'text-primary';
  return (
    <>
      {pageDetails?.total_pages ? (
        <div className="flex">
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
