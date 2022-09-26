// ====================== IMPORTED LIBRARIES ========================
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { routes } from 'routes';
import { useFetch, usePost } from 'hooks';
import { useDispatch, useSelector } from 'react-redux';
// ====================== IMPORTED COMPONENT ========================
import { Form } from 'components/app/forms';
import Categories from 'components/StockItem/Categories';
import Detail from 'components/StockItem/Detail';
import Exhibition from 'components/StockItem/Exhibition';
import Price from 'components/StockItem/Price';
import { AdminLayout } from 'Layout';
// ====================== IMPORTED APIS ========================
import { artworkSchema } from 'validation';
import { formDataHandler } from 'utils';
import * as types from 'store/actions/actionTypes';
import { getColors, getStyles } from 'api';
import { createWork, getStock } from 'api/api-services';
import withArtistRoute from 'hoc/withArtistRoute';

const StockRoom = () => {

  const { id = 62 } = useParams();
  const dispatch = useDispatch();

  const { data: dataStockroom = [] } = useFetch(getStock, {
    variables: id,
  });
  const [steps, setSteps] = useState([
    'item details',
    'categories',
    'pricing',
    'exhibition',
  ]);
  const [step, setStep] = useState('item details');
  const [colors, setColors] = useState([]);
  const [styles, setStyles] = useState([]);
  const [initialValues, setInitialValues] = useState({
    name: '',
    notes: '',
    artwork_images_attributes: [],
    edition_type: 'open',
    sell_via: 'with_us',
    sellable: false,
    exhibitionable: false,
    colour_ids: {},
    style_ids: {},
    status: true,
    price_sheet_id: {},
  });

  const history = useHistory();
  useEffect(() => {
    getStyles()
      .then((response) => {
        if (response?.status == 200) {
          setStyles(response?.data?.styles);
        }
      })
      .catch((error) => console.log('ERROR ', error));

    getColors()
      .then((response) => {
        if (response?.status == 200) {
          setColors(response?.data?.colours);
        }
      })
      .catch((error) => console.log('ERROR ', error));
  }, []);

  const next = (num) => {
    window.scrollTo(0, 0);
    setStep(steps[num]);
  };

  const previous = (num) => {
    window.scrollTo(0, 0);
    setStep(steps[num]);
  };

  const addItem = () => {
    setStep(steps[0]);

    dispatch({ type: types.BACK_BUTTON, payload: true });
  };

  const [post, { data: dataPost, status: statusPost }] = usePost(createWork);

  useEffect(() => {
    if (dataPost) {
      history.push(routes.ROUTE_STOCKROOM);
    }
  }, [dataPost]);

  useEffect(() => {
    if (dataStockroom) {
      const copyData = { ...dataStockroom }
      const colour_ids = {};
      const style_ids = {}
      const artworkIds = copyData?.colours?.map(
        (item) => (colour_ids[item.id] = item.id)
      );
      const styleIds = copyData?.styles?.map(
        (item) => (style_ids[item.id] = item.id)
      );

      const draftsInitialValues = {
        artwork_images_attributes: copyData.image,
        colour_ids: colour_ids,
        style_ids: style_ids,
        edition_type: copyData.edition_type,
        exhibitionable: copyData.exhibitionable,
        name: copyData.name,
        notes: copyData.notes,
        price_sheet_id: copyData.price_sheet || {},
        sell_via: copyData.sell_via,
        sellable: copyData.sellable,
        status: true,
      };
      setInitialValues(draftsInitialValues);
    }
  }, [dataStockroom]);

  const data = (data) => {
    let copyData = { ...data };
    let colour_ids = [];
    let style_ids = [];
    const colourIdsLength = Object.entries(data?.colour_ids).length;
    const styleIdsLength = Object.entries(data?.style_ids).length;

    if (data?.colour_ids && colourIdsLength != 0) {
      Object.entries(data.colour_ids).map(([key, value]) => {
        colour_ids.push(value);
      });
    }

    if (data?.style_ids && styleIdsLength != 0) {
      Object.entries(data.style_ids).map(([key, value]) => {
        style_ids.push(value);
      });
    }

    copyData.colour_ids = colour_ids;
    copyData.style_ids = style_ids;

    copyData.edition_type == 'open' && copyData.edition_quantity
      ? delete copyData.edition_quantity
      : (copyData.edition_quantity = copyData.edition_quantity);

    const formData = new FormData();
    Object.entries(data).map(([key, value]) => {
      formDataHandler('artwork', key, value, formData);
    });
    post({
      variables: formData,
    });
  };

  return (
    <>
      <AdminLayout handler={addItem} title="Add new artwork" subtitle={step}>
        <Form
          initialValues={initialValues}
          onSubmit={data}
          validationSchema={artworkSchema}
          enableReinitialize={true}
        >
          {() => (
            <>
              {step == 'item details' && (
                <Detail
                  steps={steps}
                  step={step}
                  next={next}
                  addItem={addItem}
                />
              )}

              {step == 'categories' && (
                <Categories
                  steps={steps}
                  addItem={addItem}
                  step={step}
                  next={next}
                  previous={previous}
                  styles={styles}
                  colors={colors}
                />
              )}
              {step == 'pricing' && (
                <Price
                  steps={steps}
                  addItem={addItem}
                  step={step}
                  next={next}
                  previous={previous}
                />
              )}
              {step == 'exhibition' && (
                <Exhibition
                  steps={steps}
                  addItem={addItem}
                  step={step}
                  next={next}
                  previous={previous}
                />
              )}
            </>
          )}
        </Form>
      </AdminLayout>
    </>
  );
};

export default withArtistRoute(StockRoom);
