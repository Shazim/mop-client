import React, { useState, useEffect } from 'react';
import { getColors, getStyles } from 'api';
import { Form } from 'components/app/forms';
import SubHeader from 'components/molecules/header/SubHeader';
import Categories from 'components/StockItem/Categories';
import Detail from 'components/StockItem/Detail';
import Exhibition from 'components/StockItem/Exhibition';
import Price from 'components/StockItem/Price';
import { artworkSchema } from 'validation';
import StockItem from '../components/StockItem';
import { usePost } from 'hooks';
import { createWork } from 'api/api-services';
import { formDataHandler } from 'utils';
import { AdminLayout } from 'Layout';

function StockRoom() {
  const [steps, setSteps] = useState([
    'item details',
    'categories',
    'pricing',
    'exhibition',
  ]);
  const [step, setStep] = useState('stock room');
  const [colors, setColors] = useState([]);
  const [styles, setStyles] = useState([]);

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
  };

  const [post, { data: dataPost, status: statusPost }] = usePost(createWork);

  useEffect(() => {
    if (dataPost) {
      setStep('stock room');
    }
  }, [dataPost]);

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
      <AdminLayout>
        <SubHeader
          title="StockRoom"
          subtitle=""
          handler={addItem}
          title="stockroom"
          subtitle="up for sale"
          buttonText="ADD NEW ITEM"
          button={true}
        />
        {step == 'stock room' && <StockItem addItem={addItem} />}
        <Form
          initialValues={{
            name: '',
            note: '',
            artwork_images_attributes: [],
            edition_type: 'open',
            sell_via: 'with_us',
            sellable: false,
            exhibitionable: false,
            colour_ids: {},
            style_ids: {},
            status: true,
          }}
          onSubmit={data}
          validationSchema={artworkSchema}
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
}

export default StockRoom;
