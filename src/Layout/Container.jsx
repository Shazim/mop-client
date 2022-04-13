import React from 'react';
import Footer from 'components/molecules/footer/Footer';
import Header from 'components/molecules/header/Header';

function Container({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Container;
