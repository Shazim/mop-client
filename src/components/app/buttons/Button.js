import PropTypes from "prop-types";
import { useMemo } from "react";

import "../config/styles/style.scss";

function Button({
  children,
  className: classes = "",
  onClick,
  style,
  type = "contained",
  color = 'primary',
  ...otherProps
}) {

  const btnClasses = useMemo(() => {
    let classes = 'font-nunito-bold';
    if (type == 'contained') {
      if (color.includes('primary')) {
        return `${classes} bg-${color} text-white shadow`;
      } else {
        return `${classes} bg-${color} text-secondary tracking shadow`;
      }
    } else {
      return `${classes} text-${color} border border-${color}`;
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
