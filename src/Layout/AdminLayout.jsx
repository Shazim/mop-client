import React from 'react';
import Footer from 'components/molecules/footer/Footer';
import Header from 'components/molecules/header/Header';
import SideBar from 'components/molecules/sidebar/SideBar';
import SubHeader from 'components/molecules/header/SubHeader';

function AdminLayout({
  children,
  title,
  subtitle,
  handler,
  buttonText,
  button,
}) {
  return (
    <>
      <Header />
      <div className="flex w-100% bg-primary-layout-background">
        <div className="w-20% sm:hidden">
          <SideBar />
        </div>

        <div className=" w-80% sm:w-100% ">
          <SubHeader
            title={title}
            subtitle={subtitle}
            buttonText={buttonText}
            handler={handler}
            button={button}
          />
          <div className="px-43 pt-46">{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminLayout;
