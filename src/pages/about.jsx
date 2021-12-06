import React from 'react';
import Header from 'components/molecules/header/Header';
import { LinkLabel } from 'components/LinkLabel';

function About() {
  return (
    <div className="bg-photography bg-no-repeat bg-cover ">
      <Header />
      <div className="max-screen pt-370 pb-116">
        <div className="ml-50 text-primary tracking-wider font-avenir-300 uppercase text-3xl leading-55 w-55%">
          <span className="text-secondary">from the creators of online </span>
          photography classes{' '}
          <span className="text-secondary">that works with the</span> best
          photographers <span className="text-secondary">in the world.</span>
        </div>
        <div className="ml-50  mt-25">
          <LinkLabel label="discover our offers" />
        </div>
      </div>
    </div>
  );
}

export default About;
