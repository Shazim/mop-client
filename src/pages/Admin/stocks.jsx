import React from 'react';
import { AdminLayout } from 'Layout';
import StockItem from '../../components/StockItem';
import { useHistory } from 'react-router-dom';
import { routes } from 'routes';

function Stocks() {
  const history = useHistory();

  return (
    <AdminLayout
      title="stockroom"
      handler={() => history.push(routes.ROUTE_STOCK_ROOM)}
      subtitle="up for sale"
      buttonText="ADD NEW ITEM"
      button={true}
    >
      <StockItem />
    </AdminLayout>
  );
}

export default Stocks;
