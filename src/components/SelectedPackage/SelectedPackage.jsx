import React, { useEffect } from 'react';
import Package from 'components/Packages/package';
import { getCookie } from 'cookies/Cookies';
import { useHistory } from 'react-router-dom';
import { routes } from 'routes';

function SelectedPackage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const selectedPackage =
    getCookie('package') && JSON.parse(getCookie('package'));
  const { name, price, description, year } = selectedPackage || {};
  const history = useHistory();

  if (!selectedPackage) {
    history.push(routes.ROUTE_STORE);
  }

  return (
    <Package
      description={description}
      price={price}
      title={name}
      year={year}
      className="shadow"
      subscribeBtn={false}
      packageTotal={true}
    />
  );
}

export default SelectedPackage;
