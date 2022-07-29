// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { routes } from 'routes';
import { Link } from 'react-router-dom';
import { useFetch } from 'hooks';
// ====================== IMPORTED COMPONENT ========================
import Button from 'components/atoms/buttons/Button';
import MenuTable2 from 'components/Tables/menuTable2';
// ====================== IMPORTED API ========================
import { priceSheetDetail } from 'api/api-services';
import { AdminLayout } from 'Layout';

const PricingSheetDetails = () => {
  const history = useHistory();
  const params = useParams();
  const { id } = params;
  const { data = [] } = useFetch(priceSheetDetail, { variables: id });

  return (
    <AdminLayout
      title="pricing and products"
      buttonText="CREATE NEW"
      button={true}
      handler={() => history.push(routes.ROUTE_CREATE_PRICE_SHEET)}
    >
      <div className="flex justify-between ">
        <div className=" font-avenir-reg font-medium text-xl text-secondary uppercase tracking-wider leading-54">
          Print Price sheet
        </div>
        <div className="  mt-51 mr-48 sm:hidden">
          <Button
            onClick={() => history.push(`/edit-price-sheet/${id}`)}
            className="w-116 h-33 "
            color="gray"
          >
            Edit
          </Button>
        </div>
      </div>
      <div className=" font-avenir-reg font-medium text-xl text-secondary uppercase tracking-wider leading-54">
        info
      </div>
      <div className="mt-22 font-nunito-reg text-base leading-22 uppercase text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
        ullamcorper dui enim sit risus ut enim consectetur etiam. Eu sed at in
        dolor amet, in. Gravida dictum consectetur at phasellus diam non sit.
        Egestas volutpat risus lorem aenean viverra nulla tempus vulputate
        volutpat.
      </div>
      <div className="mt-12 font-avenir-reg font-medium text-xl text-secondary uppercase tracking-wider leading-54">
        options
      </div>
      <div className=" flex justify-between sm:flex-col">
        <div>
          <div className="font-avenir-reg font-medium text-base text-secondary uppercase tracking-wider leading-54">
            Size
          </div>
          <div className="font-nunito-reg text-base leading-22 text-black">
            6 x 4 (15 x 10cm), 7 x 5 (18 x 13cm), 10 x 8 (25 x 20cm)
          </div>
        </div>
        <div>
          <div className=" mr-303 font-avenir-reg font-medium text-base text-secondary uppercase tracking-wider leading-54">
            Paper
          </div>
          <div className="font-nunito-reg text-base leading-22 text-black mr-170">
            Lustre, Glossy, Metalic, Velvet
          </div>
        </div>
      </div>
      <div className="hr-b mt-30"></div>
      <div className="mt-12 font-avenir-reg font-medium text-xl text-secondary uppercase tracking-wider leading-54">
        Pricing
      </div>
      <MenuTable2 data={data} />
    </AdminLayout>
  );
};

export default PricingSheetDetails;
