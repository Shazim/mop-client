import PropTypes from 'prop-types';
import { useMemo } from 'react';

import '../../app/config/styles/style.scss';

function Button({
  children,
  className: classes = '',
  onClick,
  style,
  type = 'contained',
  color = 'primary',
  transform = "capitalize",
  ...otherProps
}) {

  const grayBtn = color.includes('gray');

  const btnClasses = useMemo(() => {
    return (type == 'contained') ? `bg-${color} ${grayBtn ? "gray-btn" : "primary-btn"}` : `font-bold text-${color} border border-${color} text-base`;
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
    'default',
    'default-light',
    'default-dim',
  ]),
  transform: PropTypes.oneOf(['uppercase', 'capitalize']),
};

export default Button;
