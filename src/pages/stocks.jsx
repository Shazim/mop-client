import React from 'react';
import { AdminLayout } from 'Layout';
import SubHeader from 'components/molecules/header/SubHeader';
import StockItem from '../components/StockItem';
import { useHistory } from 'react-router-dom';

function Stocks() {
  const history = useHistory();

  return (
    <AdminLayout>
      <SubHeader
        title="stockroom"
        handler={() => history.push('/stock-room')}
        subtitle="up for sale"
        buttonText="ADD NEW ITEM"
        button={true}
      />

      <StockItem />
    </AdminLayout>
  );
}

export default Stocks;
