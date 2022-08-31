import React, { useState } from 'react';
import OutsideAlerter from 'utils/outsidelayer';
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
  className: classes = 'w-100%',
  color = 'gray-lighter',
  textColor = 'secondary',
  onChange,
  name,
}) {
  const [text, setText] = useState(label);
  const [hide, setHide] = useState(true);
  const [value, setValue] = useState(0);

  const handleSelect = (item, name) => {
    onChange?.(item.value, item.label, name);
    setText(item.label);
    setValue(item.value);
    setHide(!hide);
  };
  return (
    <OutsideAlerter close={() => setHide(true)}>
      <div
        class={`relative ${classes} flex flex-row-reverse  h-32  cursor-pointer`}
        onClick={() => setHide(!hide)}
      >
        <select className="hidden">
          {option.map((item) => (
            <option value={item.value}>{item.label}</option>
          ))}
        </select>
        <div class="custom-arrow min-w-36 h-32 relative bg-gray-darkest"></div>
        <div
          class={`select-selected text-${textColor} py-8 px-22 sm:px-10 w-100% tracking bg-${color} leading-4 font-bold text-sm sm:text-tiny sm:text-11 select-arrow-active uppercase`}
        >
          {text}
        </div>
        <div
          class={`${
            hide ? 'hidden' : ''
          } font-bold uppercase select-items w-100% absolute top-100% text-secondary text-sm left-0 tracking right-0 z-50 bg-gray-lightest leading-7`}
        >
          {option.map((item) => (
            <div
              className="select-item pl-22"
              onClick={() => handleSelect(item, name)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </OutsideAlerter>
  );
}

export default SelectOptions;
