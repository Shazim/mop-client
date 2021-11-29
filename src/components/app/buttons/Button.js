import PropTypes from "prop-types";
import { useMemo } from "react";

import "../config/styles/style.scss";

function Button({
  children,
  className: classes = "",
  onClick,
  style,
  type = "contained",
  color = 'default',
  ...otherProps
}) {

  const btnClasses = useMemo(() => {
    let classes = '';
    if (type == 'contained') {
      if (color.includes('primary')) {
        classes = 'text-white font-nunito-bold';
        classes = `${classes} bg-${color}`
        return classes
      } else {
        classes = 'text-secondary font-nunito-bold';
        classes = `${classes} bg-${color}`
        return classes;
      }
    } else {
      classes = `text-primary-dark border borderColor-primary-dark  font-nunito-bold`;
      return classes;

    }
  }, [color, type])



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
  type: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
