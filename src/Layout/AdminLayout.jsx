import React, { useState } from 'react';
import Footer from 'components/molecules/footer/Footer';
import Header from 'components/molecules/header/Header';
import SideBar from 'components/molecules/sidebar/SideBar';

function AdminLayout({ children }) {
  const [step, setStep] = useState('stock room');

  return (
    <>
      <Header />
      <div className="flex w-100% bg-primary-layout-background">
        <div className="w-20%">
          <SideBar />
        </div>
        <div className=" w-80%">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default AdminLayout;
