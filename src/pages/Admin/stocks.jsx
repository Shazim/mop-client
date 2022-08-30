// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'routes';

// ====================== IMPORTED COMPONENT ========================
import { AdminLayout } from 'Layout';
import StockItem from '../../components/StockItem';
import withArtistRoute from 'hoc/withArtistRoute';

const Stocks = () => {
  const history = useHistory();

  return (
    <AdminLayout
      title="stockroom"
      subtitle="up for sale"
      buttonText="ADD NEW ITEM"
      button={true}
      handler={() => history.push(routes.ROUTE_CREATE_STOCKROOM)}
    >
      <StockItem />
    </AdminLayout>
  );
};

export default withArtistRoute(Stocks);
