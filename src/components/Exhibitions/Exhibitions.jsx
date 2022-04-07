import React from 'react';

function Exhibitions() {
  return (
    <div>
      <div>
        <div className="max-screen flex justify-end pt-31">
          <div className="mr-25">
            <SearchBar
              transform="uppercase"
              placeholder={`search for ${tab == 'Galleries' ? 'Gallery' : tab}`}
              bgColor="bg-gray-lighter"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <SelectOptions label="sort: Most popular" />
        </div>
      </div>
      <div className="max-screen pt-30 pb-43">
        <div className="grid grid-cols-4 gap-36 justify-between">
          {data?.galleries.map(({ gallery_name, views, id }) => (
            <Link to={`/gallery-detail?id=${id}`}>
              <GalleryCard title={gallery_name} views={views} />
            </Link>
          ))}
        </div>
        {/* <div className="text-primary link mt-25 text-base">1</div> */}
        <Pagination
          pageDetails={data?.pagination}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          className="mt-25"
        />
      </div>
    </div>
  );
}

export default Exhibitions;
