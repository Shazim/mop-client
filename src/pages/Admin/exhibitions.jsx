import React from 'react';
import { AdminLayout } from 'Layout';
import { ExhibitionsComp } from 'components/ExhibitionRoom/index';
import { useHistory } from 'react-router-dom';
import { routes } from 'routes';

function Exhibitions() {
  const history = useHistory();

  return (
    <AdminLayout
      title="exhibition room"
      subtitle="up for sale"
      buttonText="ADD NEW ITEM"
      button={true}
      handler={() => history.push(routes.ROUTE_EXHIBITION_ROOM)}
    >
      <ExhibitionsComp />
    </AdminLayout>
  );
}

export default Exhibitions;
