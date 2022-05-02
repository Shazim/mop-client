import React from 'react';
import Footer from 'components/molecules/footer/Footer';
import Header from 'components/molecules/header/Header';
import SubHeader from 'components/molecules/header/SubHeader';

function SubHeaderLayout({ children, title }) {
  return (
    <>
      <Header />
      <div className="bg-primary-layout-background ">
        <SubHeader title={title} className="max-screen" />
        <div className="max-screen">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default SubHeaderLayout;
