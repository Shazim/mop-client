import Input from 'components/app/common/Input';
import React from 'react';
import { useState } from 'react';
import RadioButton from '../../atoms/buttons/RadioButton';
import CheckBox from '../../atoms/checkbox/CheckBox';

function Menu({ data, title, setData, filter }) {
  const subMenu = (item, index, type, title) => {
    const components = {
      radio: (
        <RadioButton
          className="text-sm mt-12"
          name={title}
          value={item.name}
          checked={item.select}
          onChange={() => setData(title, index, '')}
        />
      ),
      checkbox: (
        <CheckBox
          className="mt-12"
          onChange={() => setData(title, index, '')}
          value={item.name}
          checked={item.select}
        />
      ),
      input: (
        <>
          <div className="font-bold text-sm tracking uppercase text-secondary leading-8">
            {item.name}
          </div>
          <Input
            name={item.name}
            type="number"
            placeholder="enter price"
            className="textfield focus:outline-none uppercase w-220 tracking placeholder-gray h-32 font-bold text-sm pl-10 text-secondary"
            onChange={(e) => setData(title, index, e.target.value)}
            value={filter[title].values[index].value}
          />
        </>
      ),
    };
    return components[type];
  };

  const [isOpen, setIsOpne] = useState(false);
  const clickHandler = () => setIsOpne(!isOpen);
  return (
    <div
      className={`relative ${
        data.type !== 'input' ? 'border-b' : 'border-b-0'
      } mx-36 border-gray pb-16 mb-16`}
    >
      <div className="flex justify-between link" onClick={clickHandler}>
        <div className="uppercase text-sm text-primary tracking font-bold">
          {title}
        </div>
        <img
          className={`link ${isOpen ? '' : 'transform rotate-45'}`}
          src="images/sidebar/cross.svg"
          onClick={clickHandler}
        />
      </div>
      <div
        className={`max-h-200 overflow-auto scroll-bar ${
          isOpen ? '' : 'hidden'
        }`}
      >
        {data.values.map((item, index) => {
          return <>{subMenu(item, index, data.type, title)}</>;
        })}
      </div>
    </div>
  );
}

export default Menu;
