import Button from 'components/atoms/buttons/Button';
import SearchBar from 'components/atoms/searchbar/SearchBar';
import React, { useState, useEffect } from 'react';

import { ReactComponent as Cart } from '../../../assets/images/cartIcon.svg';
// import { slide as Menu } from 'react-burger-menu'
import SideBar from '../sidebar/SideBar';
function Header({ login = false , signUpHandler,signInHandler, menu, isOpen }) {
  const [active, setActive] = useState(0);
  const tabs = ['about', 'galleries', 'browse artwork'];
  const loginTabs = ['my gallery', 'store', 'get started', 'profile'];
  const handleClick = (index) => setActive(index);
  const [open, setOpen] = useState(false);

  useEffect(() => {
  }, [])

  return (
    <>
      <div className="max-screen lg:px-60 md:px-50 py-32 sm:px-23">
        <div className="flex justify-between">
          <div className="flex justify-between w-50% xl:w-57% lg:w-57% md:w-57% items-center sm:w-100%">
            <img src="/images/Logo/logo.svg" alt="" className="mr-25 w-132 h-32" />
            <div className='hidden sm:block'>

              {(menu) ?
                <img className={`w-20`} src='/images/header/cross.svg' onClick={() => isOpen(!menu)} />
                : <img className={`w-27`} src='/images/header/muneIcon.svg' onClick={() => isOpen(!menu)} />
              }
            </div>
            <div className='flex w-65% justify-between sm:hidden'>{tabs.map((item, i) => (
              <div
                className={`font-bold mt-6 ${active == i ? 'text-primary' : 'text-secondary'
                  } text-sm uppercase hover:text-primary link tracking`}
                onClick={() => handleClick(i)}
              >
                {item}
              </div>
            ))}
            </div>
          </div>
          <div className="flex items-center justify-between w-40% xl:w-42% md:w-42% sm:hidden">
            <SearchBar
              className=""
              placeholder="Search For An Artist"
              bgColor="bg-transparent"
            />
            <Button onClick={() => signUpHandler(prv => !prv) } className="w-87 h-33 ">Create</Button>
            <div
              onClick={() => signInHandler(prv => !prv) }
              className="text-secondary-black font-reg text-base link">
              Sign in
            </div>
            <Cart className="w-20 h-18" />
          </div>
        </div>
      </div>

      {/* <div className="max-screen flex p-30 items-center">
        <img src="/images/Logo/logo.svg" alt="" />
        {login ? (
          <div className="w-200"></div>
        ) : (
          <>
            <div className="flex justify-between">
              {tabs.map((item, i) => (
                <div
                  className={`font-bold mt-6 ${
                    active == i ? 'text-primary' : 'text-secondary'
                  } text-sm uppercase hover:text-primary link`}
                  onClick={() => handleClick(i)}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="w-153"></div>
          </>
        )}
        <div>
          <SearchBar
            className=""
            placeholder="search for an artist"
            bgColor="bg-white"
          />
        </div>

        {login ? (
          <>
            <div className="w-50"></div>
            <div className="flex flex-row">
              {loginTabs.map((e, i) => (
                <div
                  className={`font-bold mt-6 ${
                    active == i ? 'text-primary' : 'text-secondary'
                  } text-sm uppercase mr-73 hover:text-primary`}
                  onClick={() => handleClick(i)}
                >
                  {e}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-row items-center">
            <Button className="w-87 h-33 mr-33">Create</Button>
            <div className="text-secondary-black font-reg text-base mr-20">
              Sign in
            </div>
            <Cart className="w-20 h-18" />
          </div>
        )}
      </div> */}
      {/* <Menu pageWrapId='page-wrap' noTransition right isOpen={open} width="100%" >
        <div className='w-100%'>
          <SideBar />
        </div>
      </Menu> */}
    </>
  );
}

export default Header;
