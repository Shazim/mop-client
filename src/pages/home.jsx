import Button from 'components/atoms/buttons/Button';
import React from 'react';

function Home() {
  return (
    <>
      <div>
        <div className="text-primary uppercase font-lg">
          Access <span className="text-secondary">100’s of galleries</span> from
          artists and photographers from all over the world
        </div>
        <div className="">
          An immersive experience which is curated and configured by the artist
          to suit the work that is on virtual display. Purchase pieces of work
          you fall in love with directly and have them shipped to you within
          days of purchase.
        </div>
        <div className="flex">
          <img src="/images/Home/blocks.svg" />
          <div>View Featured Galleries</div>
        </div>
      </div>
      <div>
        <div></div>
        <div className="flex">
          {/* <Button className="w--184">View More</Button> */}
          <Button type="outline" className="w--184 h-48">
            Browse
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
