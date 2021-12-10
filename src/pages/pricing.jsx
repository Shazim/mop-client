import TitleBar from 'components/Menu/TitleBar';
import Footer from 'components/molecules/footer/Footer';
import Header from 'components/molecules/header/Header';
import { Packages } from 'components/Packages';
import React from 'react';

function Pricing() {
  return (
    <>
      <div className="bg-backgroundColor  ">
        <TitleBar />
        <div className=" pt-85 pb-114">
          <Packages />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Pricing;
