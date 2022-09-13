// ====================== IMPORTED LIBRARIES ========================
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
// ====================== IMPORTED COMPONENTS ========================

import HeaderMobile from './HeaderMobile';
import DekstopHeader from './DekstopHeader';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 960) {
      setIsMobile(true);
    }
  }, []);
  return isMobile ? <HeaderMobile /> : <DekstopHeader />;
};

export default Header;
