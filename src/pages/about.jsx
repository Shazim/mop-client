import React from 'react';
import Header from 'components/molecules/header/Header';
import { LinkLabel } from 'components/LinkLabel';
import { DiscoverMore } from 'components/DiscoveMore';
import { ReceiveInsight } from 'components/ReceiveInsight';

function About() {
  return (
    <>
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
      <div className="flex max-screen justify-between pt-126 pb-156">
        <div className="ml-50 w-40%">
          <div className="tracking-wider uppercase text-2xl font-avenir-reg text-dark leading-38">
            “Great Art in 2021 requires a different type of showcase”
            <span className="text-primary">.</span>
          </div>
          <div className=" font-nunito-light text-lg text-dark leading-32 pt-31">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            viverra pharetra ultricies elementum. Tellus ullamcorper sit in
            scelerisque maecenas elit, viverra eu. Suspendisse ut netus mauris
            gravida viverra vel nunc facilisis scelerisque. Ultrices lobortis
            donec volutpat viverra.{' '}
          </div>
          <div className="pt-30 font-nunito-light text-lg text-dark leading-32">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            viverra pharetra ultricies elementum. Tellus ullamcorper sit in
            scelerisque maecenas elit,
          </div>
        </div>
        <img src="/images/girl.png" alt="" className="w-40%" />
      </div>
      <div className="max-screen border-border border-b">
        <DiscoverMore />
      </div>
      <div>
        <ReceiveInsight image="/images/desert.png" />
      </div>
    </>
  );
}

export default About;
