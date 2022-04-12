import { FormField } from 'components/app/forms';
import React, { useState } from 'react';
import { useStore } from 'store';
import '../../../index.css';

function SelectOptions({
  option = [
    { value: 0, label: 'item4' },
    { value: 1, label: 'item2' },
    { value: 2, label: 'item3' },
    { value: 3, label: 'item4' },
    { value: 4, label: 'item5' },
  ],
  label = 'choose an option',
  width = '266',
  color = 'gray-lighter',
  textColor = 'secondary',
  onChange,
}) {
  const [text, setText] = useState(label);
  const [hide, setHide] = useState(true);
  const [value, setValue] = useState(0);
  const displayItems = (name, value) => {
    setHide(!hide);
    setText(name);
    setValue(value);
  };
  return (
    <div
      class={`relative w-${width} flex flex-row-reverse  h-32 cursor-pointer`}
      onClick={() => setHide(!hide)}
    >
      <select className="hidden">
        {option.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
      <div class="custom-arrow w-42 h-32 relative bg-gray-darkest"></div>
      <div
        class={`select-selected text-${textColor} py-8 px-22 w-100% tracking bg-${color} leading-4 font-bold text-sm select-arrow-active uppercase`}
      >
        {text}
      </div>
      <div
        class={`${
          hide ? 'hidden' : ''
        } font-bold uppercase select-items w-100% absolute top-100% text-secondary text-sm pl-22 left-0 tracking right-0 z-50 bg-gray-lightest leading-7`}
      >
        {option.map((item) => (
          <div
            onClick={() => {
              onChange && onChange(item.value);
              displayItems(item.label, item.value);
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectOptions;
