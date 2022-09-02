import React from 'react';
import { useState } from 'react';
import Menu from '../menu/Menu';
import SearchBar from '../../atoms/searchbar/SearchBar';
import Button from '../../atoms/buttons/Button';
import * as types from 'store/actions/actionTypes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useFetch } from 'hooks';

import { getPublicColors, getPublicStyles } from 'api/api-services';

function SideBarWithLogin({ className: classes = '' }) {
  const { data: dataColor } = useFetch(getPublicColors);
  const { data: dataStyles } = useFetch(getPublicStyles);

  let initialObj = {
    colours: {
      type: 'checkbox',
      values: [],
      //[
      //   { name: 'item2', select: false },
      //   { name: 'item2', select: false },
      //   { name: 'item3', select: false },
      // ],
    },
    styles: {
      type: 'checkbox',
      values: [],
    },
    // 'menu 1': {
    //   type: 'radio',
    //   values: [
    //     { name: 'item2', select: false },
    //     { name: 'item2', select: false },
    //     { name: 'item3', select: false },
    //   ],
    // },
    // price: {
    //   type: 'input',
    //   values: [
    //     { name: 'Minimum', value: '' },
    //     { name: 'Maximum', value: '' },
    //   ],
    // },
    // minPrice: '',
    // search: '',
    // maxPrice: '',
  };

  const dispatch = useDispatch();

  const [filter, setFilter] = useState(initialObj);
  const [select, setSelect] = useState({});

  useEffect(() => {
    const data = dataStyles?.styles?.map((data) => {
      return { name: data.name, id: data.id, select: false };
    });

    if (data !== undefined) {
      setFilter((prev) => {
        return {
          ...prev,
          styles: { type: 'checkbox', values: data },
        };
      });
    }
  }, [dataStyles]);

  useEffect(() => {
    const testData = dataColor?.colours?.map((data) => {
      return { name: data.name, id: data.id, select: false };
    });
    if (testData !== undefined) {
      setFilter((prev) => {
        return {
          ...prev,
          colours: { type: 'checkbox', values: testData },
        };
      });
    }
  }, [dataColor]);
  // console.log({ filter });
  const handler = (item, id) => {
    const copyFilters = { ...filter };
    const items = [...copyFilters[item].values];
    console.log('first', items[id].id);
  };

  // const handler = (item, id, value) => {
  //   console.log({ id, value });
  //   const copyFilters = { ...filter };
  //   const items = [...copyFilters[item].values];
  //   if (copyFilters[item].type == 'checkbox') {
  //     items[id].select = !items[id].select;
  //     setFilter(copyFilters);
  //   } else if (copyFilters[item].type == 'radio') {
  //     items.map((item, i) => {
  //       item.select = id == i ? true : false;
  //     });
  //     copyFilters[item].values = [...items];
  //     setFilter(copyFilters);
  //   } else {
  //     copyFilters[item].values[id].value = value;
  //     setFilter(copyFilters);
  //   }
  // };

  const clearFilter = () => {
    setFilter((prev) => ({
      prev,
    }));
  };

  const handle_field = (e) => {
    if (e.target.name == 'search') {
      const copyFilter = { ...filter };
      copyFilter[e.target.name] = e.target.value;
      setFilter(copyFilter);
      dispatch({ type: types.SIDEBAR_SEARCH, payload: e.target.value });
    }
  };

  const search = useSelector((state) => state?.public?.searchSideBar);

  return (
    <div
      className={`${classes} h-auto w-299 bg-gray-lighter pt-40 overflow-auto`}
    >
      <SearchBar
        name="search"
        className="w-220 h-32 mx-auto mb-25 placeholder-secondary"
        placeholder="search"
        transform="uppercase"
        onChange={(e) => handle_field(e)}
        value={search}
      />
      {Object.entries(filter).map(([key, value]) => {
        if (typeof value !== 'string') {
          return (
            <Menu data={value} filter={filter} title={key} setData={handler} />
          );
        }
      })}
      <Button
        className="flex w-220 h-33 text-white justify-center items-center mt-25 m-auto"
        color="primary"
      >
        SEARCH
      </Button>
      <Button
        className="flex w-220 h-33 text-secondary justify-center items-center mt-20 m-auto"
        color="gray"
        onClick={clearFilter}
      >
        CLEAR FILTERS
      </Button>
    </div>
  );
}

export default SideBarWithLogin;
