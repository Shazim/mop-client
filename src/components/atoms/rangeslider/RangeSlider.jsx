import React from 'react';
import { useState } from 'react';
function RangeSlider() {
  const [value, setValue] = useState(0);
  const rangeValue = (value) => {
    setValue(value.target.value);
  };
  return (
    <div>
      <label className="relative">
        <span
          className={`absolute left-10 pointer-events-none text-white font-avenir-reg font-medium tracking-wider leading-32`}
        >
          {value}%
        </span>
        <input
          class="range sm:w-100% w-50% h-28 appearance-none bg-gray outline-none rounded-xl overflow-hidden"
          onMouseMove={(value) => rangeValue(value)}
          onChange={(value) => rangeValue(value)}
          type="range"
          value={value}
          min="0"
          max="1000"
        />
        <span
          className={`absolute right-20 pointer-events-non font-avenir-reg font-medium tracking-wider leading-32 ${
            value > 900 ? 'text-white' : 'text-secondary'
          }`}
        >
          1000%
        </span>
      </label>
    </div>
  );
}

export default RangeSlider;
