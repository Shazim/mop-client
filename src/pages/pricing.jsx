import Layout from 'components/common/Layout';
import Header from 'components/molecules/header/Header';
import SubHeader from 'components/molecules/header/SubHeader';
import { Packages } from 'components/Packages';
import React from 'react';

function Pricing() {
  return (
    <>
      <SubHeader title="pricing" subtitle="REPORT" />

      <div className="bg-gray-dark">
        <Packages />
      </div>
    </>
  );
}

export default Pricing;
