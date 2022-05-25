import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

import NavLinks from './NavLinks';
import MobileNav from './MobileNav';

function LoginHeader() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 960) {
      setIsMobile(true);
    }
  }, []);
  return isMobile ? <MobileNav /> : <NavLinks />;
}

export default LoginHeader;
