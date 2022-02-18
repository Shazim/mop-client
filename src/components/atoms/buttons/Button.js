import PropTypes from 'prop-types';
import { useMemo } from 'react';

import '../../app/config/styles/style.scss';

function Button({
  children,
  className: classes = '',
  onClick,
  style,
  type = 'contained',
  rounded = false,
  color = 'primary',
  transform = "capitalize",
  ...otherProps
}) {

  const grayBtn = color.includes('gray');

  const btnClass = (type) => {
    const btnType = {
      "contained": `bg-${color} ${grayBtn ? "gray-btn" : "primary-btn"}`,
      "outline": `font-bold text-${color} border border-${color} text-base`,
      "edit": `bg-white gray-btn rounded-sm`
    }
    return btnType[type]
  }

  const btnClasses = useMemo(() => {
    return btnClass(type);
  }, [color, type]);



  return (
    <button
      className={`${classes} ${btnClasses}`}
      onClick={onClick}
      style={style}
      {...otherProps}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['outline', 'contained']),
  color: PropTypes.oneOf([
    'primary',
    'primary-light',
    'primary-dim',
    'gray',
    'gray-light',
    'gray-dim',
  ]),
  transform: PropTypes.oneOf(['uppercase', 'capitalize']),
};

export default Button;
