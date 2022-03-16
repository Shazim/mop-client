import { getColors, getStyles } from 'api';
import * as Yup from 'yup';
import { Form } from 'components/app/forms';
import SelectOptions from 'components/atoms/form/SelectOptions';
import SearchBar from 'components/atoms/searchbar/SearchBar';
import Footer from 'components/molecules/footer/Footer';
import Header from 'components/molecules/header/Header';
import SubHeader from 'components/molecules/header/SubHeader';
import SideBar from 'components/molecules/sidebar/SideBar';
import StepBar from 'components/stepbar/StepBar';
import Categories from 'components/StockItem/Categories';
import Detail from 'components/StockItem/Detail';
import Exhibition from 'components/StockItem/Exhibition';
import Price from 'components/StockItem/Price';
import WithPrivateRoute from 'hoc/WithPrivateRoute';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { artworkSchema, generateSchema } from 'validation';
import StockItem from '../components/StockItem';

// let flow = [
//   { title: 'item details', status: true },
//   { title: 'categories', status: false },
//   { title: 'pricing', status: false },
//   { title: 'exhibition', status: false },
// ];
function StockRoom() {
  const [steps, setSteps] = useState([
    'item details',
    'categories',
    'pricing',
    'exhibition',
  ]);
  const [step, setStep] = useState('stock room');
  const [edition, setEdition] = useState(0);
  const [colors, setColors] = useState([]);
  const [styles, setStyles] = useState([]);
  const [openEdition, setOpenEdition] = useState(false);
  const [artwork, setArtwork] = useState({
    name: '',
    note: '',
    styles: [],
  });

  useEffect(() => {
    getStyles()
      .then((response) => {
        if (response?.status == 200) {
          setStyles(response?.data?.styles);
          console.log('STYLES ', response?.data?.styles);
        }
      })
      .catch((error) => console.log('ERROR ', error));

    getColors()
      .then((response) => {
        if (response?.status == 200) {
          setColors(response?.data?.colours);
          console.log('COLOURS ', response?.data?.colours);
        }
      })
      .catch((error) => console.log('ERROR ', error));
  }, []);

  const next = (num) => {
    window.scrollTo(0, 0);
    console.log('steps[num] : ', steps[num]);
    setStep(steps[num]);
  };

  const previous = (num) => {
    window.scrollTo(0, 0);
    console.log('steps[num] : ', steps[num]);
    setStep(steps[num]);
  };

  const addItem = () => {
    setStep(steps[0]);
  };
  // const componentState = {
  //   'stock room': <StockItem addItem={addItem} />,
  //   'item details': (
  //     <Detail steps={steps} step={step} next={next} addItem={addItem} />
  //   ),
  //   categories: (
  //     <Categories
  //       steps={steps}
  //       addItem={addItem}
  //       step={step}
  //       next={next}
  //       previous={previous}
  //       styles={styles}
  //       colors={colors}
  //     />
  //   ),
  //   pricing: (
  //     <Price
  //       steps={steps}
  //       addItem={addItem}
  //       step={step}
  //       next={next}
  //       previous={previous}
  //     />
  //   ),
  //   exhibition: <Exhibition steps={steps} addItem={addItem} step={step} />,
  // };

  const data = (data) => {
    console.log('DATA : ', data);
  };

  return (
    <>
      <Header />
      <div className="flex w-100% bg-backgroundColor">
        <div className="w-20%">
          <SideBar routBack={step == 'stock room' ? false : true} />
        </div>
        {step == 'stock room' && <StockItem addItem={addItem} />}
        <Form
          initialValues={{ name: '', note: '', images: [] }}
          onSubmit={data}
          validationSchema={artworkSchema}
        >
          {step == 'item details' && (
            <Detail
              steps={steps}
              step={step}
              yup
              next={next}
              addItem={addItem}
              artwork={artwork}
              artworkHandler={setArtwork}
            />
          )}

          {step == 'categories' && (
            <Categories
              steps={steps}
              artwork={artwork}
              stylesId={artwork.styles}
              addItem={addItem}
              step={step}
              next={next}
              handler={setArtwork}
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
        </Form>
      </div>

      <Footer />
    </>
  );
}

// export default WithPrivateRoute(StockRoom)
export default StockRoom;
