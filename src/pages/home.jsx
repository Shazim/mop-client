import Button from 'components/atoms/buttons/Button';
import { DescriptiveIcon } from 'components/DescriptiveIcon';
import { DiscoverMore } from 'components/DiscoveMore';
import Footer from 'components/molecules/footer/Footer';
import Header from 'components/molecules/header/Header';
import React from 'react';

function Home() {
  return (
    <>
      {/* <div className="flex justify-center my-50">
        <DescriptiveIcon
          title="Carefully Packaged 
Artwork"
          source="/images/services/world.svg"
        />
      </div> */}
      {/* <div className="flex">
        <div>
          <div className="text-secondary tracking-wider uppercase text-2xl">
            Receive insights and news from the worlds leading voices
          </div>
          <div>input field</div>
          <div>input field</div>
          <Button className="w-184 h-42">Subscribe</Button>
          <div className="text-primary font-light text-base capitalize">
            See Terms & Conditions
          </div>
        </div>
        <img src="/images/girl.png" alt="" />
      </div> */}

      <div className="bg-featured-gallery">
        <Header />
        <div className="max-screen pb-237 pt-158">
          <div className="ml-50 text-primary font-avenir-300 uppercase text-3xl">
            Access <span className="text-secondary">100’s of galleries</span>{' '}
            from artists and photographers from all over the world
          </div>
          <div className="ml-50 font-avenir-reg text-xl text-secondary-dark text-secondary-darkest pt-16  pb-45">
            An immersive experience which is curated and configured by the
            artist to suit the work that is on virtual display. Purchase pieces
            of work you fall in love with directly and have them shipped to you
            within days of purchase.
          </div>
          <div className="ml-50 flex">
            <img src="/images/Home/blocks.svg" />
            <div className="pl-14 text-primary text-xl tracking uppercase font-avenir-800">
              View Featured Galleries
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>Featured</div>
        <div className="flex">
          <Button className="w-184 mr-18">View More</Button>
          <Button type="outline" className="w-184 h-48">
            Browse
          </Button>
        </div>
      </div>
      <div>
        <div>your blank canvas.</div>
        <div>
          Create your gallery with your free trial and upload up to 5 images.
          Your free trial lasts for 10 days and you can upgrade to unlock more
          features.{' '}
        </div>
        <Button className="w-251 mr-18">start your free trial</Button>
      </div>
      <div>
        <div>
          If you are a photographer looking to exhibit we have the tools and
          support to help you reach more clients.
        </div>
        <div>
          Using our suite of tools and mentorship program we can help you grow
          in terms of skills and reach. Click below to find out how much we
          offer and the different ways we can help you.
        </div>
        <Button className="w-251 mr-18">Discover More Today</Button>
      </div>
      <div>
        <div>
          <img src="" alt="" />
          <div>Satisfaction Guarantee</div>
        </div>
      </div>
      <div>
        <div>
          <div>Receive insights and news from the worlds leading voices</div>
          <div>input</div>
          <div>input</div>
          <Button className="w-251 mr-18">Subscribe</Button>
          <div>See Terms & Conditions</div>
        </div>
        <img src="" alt="" />
      </div>
      <Footer />
    </>
  );
}

export default Home;
