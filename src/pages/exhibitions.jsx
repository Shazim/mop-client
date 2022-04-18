import React from 'react';
import { AdminLayout } from 'Layout';
import SubHeader from 'components/molecules/header/SubHeader';
import { ExhibitionsComp } from 'components/ExhibitionRoom/index';
import { useHistory } from 'react-router-dom';

function Exhibitions() {
  const history = useHistory();

  return (
    <AdminLayout>
      <SubHeader
        title="exhibition room"
        subtitle="up for sale"
        buttonText="ADD NEW ITEM"
        button={true}
        handler={() => history.push('/exhibition-room')}
      />

      <ExhibitionsComp />
    </AdminLayout>
  );
}

export default Exhibitions;
