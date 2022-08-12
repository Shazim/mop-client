// ====================== IMPORTED LIBRARIES ========================
import React, { useState, useEffect } from 'react';
import { useLazyFetch } from 'hooks';
import { Link, useHistory } from 'react-router-dom';
import { routes } from 'routes';

// ====================== IMPORTED COMPONENTS ========================
import Button from 'components/atoms/buttons/Button';
import SelectOptions from 'components/atoms/form/SelectOptions';
import { setCookie, getCookie } from 'cookies/Cookies';
// ====================== IMPORTED api ========================
import { getPublicArtworkPrice } from 'api/public-api-services';
import { object } from 'prop-types';
import { toast } from 'react-toastify';

const AddCart = ({ id, sizes, artwork_name, artist, images }) => {
  const [dataArray, setDataArray] = useState([]);
  const [option, setOption] = useState([]);
  const [frame, setFrame] = useState([]);
  const [frameOption, setFrameOption] = useState([]);
  const [material, setMaterial] = useState([]);
  const [obj, setObj] = useState({});
  const history = useHistory();
  const [handleGetPrice, { data }] = useLazyFetch(getPublicArtworkPrice);
  const { paper_and_price } = data || [];

  useEffect(() => {
    if (sizes) {
      setDataArray(sizes?.sizes);
      setFrame(sizes?.frames);
    }
    const testData = dataArray.map((data) => {
      return { value: data.id, label: data.name };
    });
    setOption(testData);
    const Data = frame.map((data) => {
      return { value: data.id, label: data.name };
    });

    setFrameOption(Data);
  }, [sizes, dataArray]);

  useEffect(() => {
    const testData = paper_and_price?.papers?.map((data, index) => {
      return { value: index, label: data };
    });
    setMaterial(testData);
    setObj((prev) => ({ ...prev, price: paper_and_price?.price }));
  }, [data]);
  const slectedItem = (value, label, name) => {
    setObj((prev) => ({ ...prev, [name]: label }));
    name === 'size' && handleGetPrice({ variables: `id=${id}&size=${value}` });
    setObj((prev) => ({
      ...prev,
      artwork_id: id,
      artwork_name: artwork_name,
      artist_name: artist,
      artwork_images: images[0].image,
      quantity: 1,
    }));
  };
  const getCartItems = getCookie('obj') && JSON.parse(getCookie('obj'));
  const handleCart = () => {
    if (obj?.size && obj?.frame && obj?.paper) {
      let newCartItems;
      if (getCartItems) {
        newCartItems = [...getCartItems, obj];
      } else {
        newCartItems = [obj];
      }
      setCookie('obj', JSON.stringify(newCartItems));

      history.push(routes.ROUTE_CHECKOUT);
    } else {
      toast.error('please fill these options');
    }
  };

  return (
    <div className="h-578 w-80% xl:w-90% lg:w-93% md:w-93% sm:w-100% bg-gray-lighter flex flex-col px-42 sm:px-20 pt-20 pb-40 shadow">
      <p className="font-avenir-reg text-secondary-dark text-2xl sm:text-xl tracking-wider sm:text-center leading-60 sm:leading-38 uppercase">
        buy this artwork
      </p>
      <p className="font-bold text-sm papertext-black tracking leading-32 uppercase mt-14">
        Select Size
      </p>
      <SelectOptions
        textColor="gray"
        color="white"
        width="100%"
        label="click to select size"
        onChange={slectedItem}
        option={option}
        name="size"
      />
      <p className="font-bold text-sm text-black tracking leading-32 uppercase mt-16">
        Select frame type
      </p>
      <SelectOptions
        textColor="gray"
        color="white"
        width="100%"
        label="click to select type"
        option={frameOption}
        onChange={slectedItem}
        name="frame"
      />
      <p className="font-bold text-sm text-black tracking leading-32 uppercase mt-16">
        Select slip mount size
      </p>
      <SelectOptions
        textColor="gray"
        color="white"
        width="100%"
        label="click to select size"
        option={[]}
      />
      <p className="font-bold text-sm text-black tracking leading-32 uppercase mt-16">
        Select print material type
      </p>
      <SelectOptions
        textColor="gray"
        color="white"
        width="100%"
        label="click to select type"
        option={material || []}
        onChange={slectedItem}
        name="paper"
      />
      <div className="mt-16 flex justify-between">
        <p className="font-avenir-reg text-primary text-2xl leading-60 tracking-wider uppercase">
          price
        </p>
        <p className="font-avenir-reg text-primary text-2xl leading-60 tracking-wider">
          £{paper_and_price?.price}
        </p>
      </div>
      <Button className="w-100% h-42" onClick={handleCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default AddCart;
